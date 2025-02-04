import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import subscribeHandler from './subscribeHandler.js';

dotenv.config();

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to The Choice Room!');
});

// Middleware
app.use(express.json()); // Parse JSON requests
app.use(cors({ origin: 'https://the-choice-room-io.vercel.app/' })); // Allow frontend origin

// Route for handling form submission
app.post('/backend/subscribeHandler', subscribeHandler);

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
