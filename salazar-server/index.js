const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const articleRoutes = require('./routes/articleRoutes');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect DB on every request (required for Vercel serverless)
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    res.status(500).json({ message: 'Database connection failed' });
  }
});

app.use('/api/users', userRoutes);
app.use('/api/articles', articleRoutes);

app.get('/', (req, res) => {
  res.json({ status: 'ok' });
});

module.exports = app;