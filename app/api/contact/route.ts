import clientPromise from "lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // Parse the incoming request body
    const body = await request.json();
    const { name, location, email, message } = body;

    // Validate the data
    if (!name || !location || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    // Reuse the shared MongoDB client
    const client = await clientPromise;
    const database = client.db("contactFormDB"); // Replace with your database name
    const collection = database.collection("contacts"); // Replace with your collection name

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
      message: "Your message has been sent successfully!",
      id: result.insertedId,
    });
  } catch (error) {
    console.error("Error handling contact form submission:", error);

    return NextResponse.json(
      {
        error: "An error occurred while processing your request.",
      },
      { status: 500 },
    );
  }
}
