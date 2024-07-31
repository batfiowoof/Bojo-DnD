/* eslint-disable no-undef */
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

const connectDB = async () => {
  try {
    console.log("Attempting to connect!");
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected");
  } catch (err) {
    console.log("Error connecting to db:", err);
  }
};

// Routes
const characterRoutes = require("./routes/characterRoutes");
app.use("/api/characters", characterRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

connectDB();
