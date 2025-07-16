# ✅ Use a lightweight Node.js image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy all project files
COPY . .

# Install dependencies
RUN npm install

# Expose the gRPC server port
EXPOSE 50051

# Start the gRPC server
CMD ["node", "server/server.js"]
