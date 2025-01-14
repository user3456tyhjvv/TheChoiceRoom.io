import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import subscribeHandler from './subscribeHandler.js';

dotenv.config();

const app = express();

// Middleware
app.use(express.json()); // Parse JSON requests
app.use(cors({ origin: 'http://localhost:3001' })); // Allow frontend origin

// Route for handling form submission
app.post('/backend/subscribeHandler', subscribeHandler);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
