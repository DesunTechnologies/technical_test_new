# Use Node.js image as the base image
FROM node:16

# Create and set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Run migrations and seeds
CMD ["sh", "-c", "npm run migrate && npm run seed:all"]
