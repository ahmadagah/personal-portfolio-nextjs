# Use Node.js base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package*.json ./

# Install all dependencies (including devDependencies)
RUN npm install

# Copy everything into the container
COPY . .

# Build the Next.js app (this generates .next folder with CSS and other assets)
RUN npm run build

# Expose port 8080 (required for Cloud Run)
EXPOSE 8080

# Start the Next.js application
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
