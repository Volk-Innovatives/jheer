# Use Node.js base image
FROM node:20

# Set working directory
WORKDIR /app

# Copy dependency definitions first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application files
COPY . .

# ✅ Copy the .env file into the container
COPY .env .env

# Build the NestJS project
RUN npm run build

# Expose app port
EXPOSE 3000

# Start the app
CMD ["npm", "run", "start:prod"]
