# Use the official Node.js LTS image
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first (for better caching)
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Expose the port your app runs on (change if needed)
EXPOSE 3000

# Start the app (change the path if your entry point is different)
CMD ["node", "src/index.js"]
