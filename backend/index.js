// const express =require('express')
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import userRoute from "./routes/userRoute.js";
dotenv.config({});

connectDB();
const app = express();

//middleware
app.use(express.json());

//routes
app.use("/api/v1/user", userRoute);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
