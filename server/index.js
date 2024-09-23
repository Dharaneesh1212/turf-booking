import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import TurfBooking from "./routes/bookingroute.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;
const CONNECTION_URL = process.env.CONNECTION_URL;

// Midddleware
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/turf", TurfBooking);

mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is running successfully in http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log("error on connecting to database", error);
  });
