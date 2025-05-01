// const express =require('express')
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";

dotenv.config({});

connectDB();

const app = express();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
