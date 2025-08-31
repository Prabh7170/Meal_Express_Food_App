//FOR COMPLETE FUNCTIONING 
//UPDATE THE LOCALHOST SERVER IN ORDERCONTROLLER.JS
//USE NPM RUN DEV FOR FRONTEND
//USE NPM RUN SERVER FOR BACKEND

import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoutes.js";
import userRouter from "./routes/userRoute.js"; // Corrected path
import 'dotenv/config';
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// app config
const app = express();
const port = process.env.PORT||4000;

// middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB();

// api endpoints
app.use('/api/food', foodRouter);
app.use('/images', express.static('uploads'));
app.use('/api/user', userRouter);
app.use('/api/cart',cartRouter)
app.use("/api/order",orderRouter)

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});
