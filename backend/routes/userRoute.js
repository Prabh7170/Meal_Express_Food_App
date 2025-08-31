import express from "express";
import { loginUser, registerUser } from "../controllers/userController.js"; // Corrected imports

const userRouter = express.Router(); // Corrected initialization

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);

export default userRouter;
