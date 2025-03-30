import express from "express";
import {login, sendOtp, signUp}  from "../controllers/Auth.controllers.js"; 

const router = express.Router();

router.post("/sendotp", sendOtp);
router.post("/signup", signUp)
router.post('/login', login)

export default router;
