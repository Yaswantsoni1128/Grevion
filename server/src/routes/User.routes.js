import express from "express";
import sendOtp from "../controllers/Auth.controllers.js"; 

const router = express.Router();

router.post("/sendotp", sendOtp);

export default router;
