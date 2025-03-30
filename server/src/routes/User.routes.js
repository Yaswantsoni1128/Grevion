import express from "express";
import {login, sendOtp, signUp}  from "../controllers/index.js"; 

const userRouter = express.Router();

userRouter.post("/sendotp", sendOtp);
userRouter.post("/signup", signUp)
userRouter.post('/login', login)

export default userRouter;
