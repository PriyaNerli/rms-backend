# Use official Node.js image
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (for dependency installation)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source code into the container
COPY . .

# Expose the port the app runs on
EXPOSE 9090

# Start the server
CMD ["node", "server.js"]