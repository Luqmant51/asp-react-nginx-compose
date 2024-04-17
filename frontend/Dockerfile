FROM node:21.5.0-alpine
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build
# Install a simple server to serve static content
RUN npm install -g serve

# Serve the app on port 4000
CMD ["serve", "-s", "build", "-l", "4000"]

# Expose port 4000
EXPOSE 4000
