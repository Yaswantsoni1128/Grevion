import { User } from "../models/User.models.js"
import otpGenerator from "otp-generator";
import { Otp } from "../models/Otp.models.js";
import dotenv from "dotenv";

dotenv.config();

const sendOtp = async (req, res) => {
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

export default sendOtp;
