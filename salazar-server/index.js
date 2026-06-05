require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const articleRoutes = require("./routes/articleRoutes");

const app = express();

const startServer = async () => {
  await connectDB();

  // Middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // cors options
  const corsOptions = {
    origin: "*",
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    preflightContinue: false,
    optionsSuccessStatus: 204,
  };
  app.use(cors(corsOptions));

  // Curb Cores Error by adding a header here
  app.use((req, res, next) => {
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({ message: "Database connection not ready. Try again in a moment." });
    }

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
  });

  // Root route for health check
  app.get("/", (req, res) => {
    res.send("Backend is running");
  });

  // Routes
  app.use("/api/users", userRoutes);
  app.use("/api/articles", articleRoutes);

  // Error Handling
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Server Error" });
  });

  if (!process.env.VERCEL) {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  }
};

startServer().catch((error) => {
  console.error("Server failed to start:", error);
  process.exit(1);
});

if (process.env.VERCEL) {
  module.exports = app;
}