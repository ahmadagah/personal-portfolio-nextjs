# Use Node.js base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code
COPY . .

# Build the application
RUN npm run build

# Expose the application port
EXPOSE 8080

# Start the application
CMD ["npm", "start"]



# # Use the official Node.js image as the base image
# FROM node:18-alpine

# # Set the working directory inside the container
# WORKDIR /app

# # Copy package.json and package-lock.json
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the application code
# COPY . .

# # Build the Next.js app
# RUN npm run build

# # Expose the port Next.js runs on
# EXPOSE 3000

# # Define the command to run the application
# CMD ["npm", "run", "start"]
# # Use Node.js base image
# FROM node:18-alpine AS builder

# # Set the working directory inside the container
# WORKDIR /app

# # Copy package.json and package-lock.json for dependency installation
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the application code
# COPY . .

# # Build the Next.js app in standalone mode
# RUN npm run build

# # Production stage
# FROM node:18-alpine

# # Set the working directory for production
# WORKDIR /app

# # Copy only the necessary files from the builder stage
# COPY --from=builder /app/.next/standalone ./
# COPY --from=builder /app/.next/static ./static
# COPY --from=builder /app/public ./public

# # Expose port 3000
# EXPOSE 3000

# # Start the app using the standalone server
# CMD ["node", "server.js"]
