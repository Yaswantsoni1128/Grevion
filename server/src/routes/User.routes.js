import express from "express";
import {sendOtp, signUp}  from "../controllers/Auth.controllers.js"; 

const router = express.Router();

router.post("/sendotp", sendOtp);
router.post("/signup", signUp)

export default router;
