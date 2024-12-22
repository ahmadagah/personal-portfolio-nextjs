import {
  MongoClient,
  ServerApiVersion,
} from 'mongodb';
import dotenv from 'dotenv';
import { NextResponse } from 'next/server';

dotenv.config();

// Load the connection URI from the .env file
const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env'
  );
}

// Create a MongoClient instance
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export async function POST(request: Request) {
  try {
    // Parse the incoming request body
    const body = await request.json();
    const { name, location, email, message } =
      body;

    // Validate the data
    if (
      !name ||
      !location ||
      !email ||
      !message
    ) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    await client.connect();
    const database = client.db('contactFormDB'); // Replace with your database name
    const collection =
      database.collection('contacts'); // Replace with your collection name

    // Insert the form data into the collection
    const result = await collection.insertOne({
      name,
      location,
      email,
      message,
      createdAt: new Date(),
    });

    // Return a success response
    return NextResponse.json({
      message:
        'Your message has been sent successfully!',
      id: result.insertedId,
    });
  } catch (error) {
    console.error(
      'Error handling contact form submission:',
      error
    );
    return NextResponse.json(
      {
        error:
          'An error occurred while processing your request.',
      },
      { status: 500 }
    );
  } finally {
    // Close the MongoDB connection
    await client.close();
  }
}
