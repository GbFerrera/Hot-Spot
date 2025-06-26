require("dotenv/config")
require('express-async-errors')
const ErrorApp = require("./utils/errorApp")

const express = require("express")
const cors = require("cors")
const routes = require("./routes")

const app = express()

// Enable CORS for all requests with maximum permissive settings
app.use(cors({
  origin: '*', // Allow all origins
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'], // Allow all common HTTP methods
  allowedHeaders: '*', // Allow all headers
  exposedHeaders: ['Content-Length', 'X-Requested-With', 'Authorization', 'Content-Type'],
  credentials: true, // Allow credentials
  maxAge: 86400 // Cache preflight requests for 24 hours
}))

// Additional headers for cross-origin requests
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  
  // Handle preflight OPTIONS requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  next();
})

app.use(express.json())
app.use(routes)

// Add a simple health check route
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', environment: process.env.NODE_ENV, port: process.env.PORT });
});

app.use((error, request, response, next) => {
  if (error instanceof ErrorApp) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message,
    });
  }

  console.error(error);

  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

const PORT = process.env.PORT || 8080

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on Port ${PORT}`);
  console.log(`Health check available at: http://localhost:${PORT}/health`);
});