require("dotenv/config")
require('express-async-errors')
const ErrorApp = require("./utils/errorApp")

const express = require("express")
// Removido o middleware CORS
const routes = require("./routes")

const app = express()

// Configuração manual para permitir qualquer tipo de conexão
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  res.header('Access-Control-Allow-Headers', '*');
  
  // Responder imediatamente às solicitações OPTIONS
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

const PORT = process.env.PORT || 3132

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on Port ${PORT}`);
  console.log(`Health check available at: http://localhost:${PORT}/health`);
});