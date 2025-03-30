import { User } from "../models/User.models.js"
import otpGenerator from "otp-generator";
import { Otp } from "../models/Otp.models.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import dotenv from "dotenv";

dotenv.config();

export const sendOtp = async (req, res) => {
    try {
        const { email } = req.body;

        const checkUserPresent = await User.findOne({ email });
        if (checkUserPresent) {
            return res.status(401).json({
                success: false,
                message: "User Already Exists",
            });
        }
        let otp;
        let result;

        do {
            otp = otpGenerator.generate(6, {
                upperCaseAlphabets: false,
                lowerCaseAlphabets: false,
                specialChars: false,
            });
            result = await Otp.findOne({ otp });
        } while (result);
        const otpPayload = { email, otp };
        await Otp.create(otpPayload);

        console.log("OTP Sent Successfully");

        res.status(200).json({
            success: true,
            message: "OTP sent successfully",
        });

    } catch (error) {
        console.error("Error Sending OTP", error);
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};



export const signUp = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            password,
            phone,
            location,
            role,
            otp
        } = req.body;

        if (!firstName || !lastName || !email || !password || !phone || !otp || !role ||!location ) {
            return res.status(403).json({
                success: false,
                message: "All fields are required",
            });
        }


        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User is already registered"
            });
        }

        const recentOtp = await Otp.find({ email }).sort({ createdAt: -1 }).limit(1);

        if (recentOtp.length === 0) {
            return res.status(400).json({
                success: false,
                message: "Otp not found"
            });
        }

        if (otp !== recentOtp[0].otp) {
            return res.status(400).json({
                success: false,
                message: "Invalid Otp"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = {
            firstName,
            lastName,
            email,
            password: hashedPassword,
            role,
            location,
            phone,
            image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`
        };

        const newUser = new User(user);
        const savedUser = await newUser.save();

        return res.status(200).json({
            success: true,
            message: "User registered successfully",
            savedUser
        });

    } catch (error) {
        console.error(error);
        return res.status(400).json({
            success: false,
            message: "User is not registered, Please try again"
        });
    }
};