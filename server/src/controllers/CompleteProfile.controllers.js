import {User , Spoc , Farmer , PowerPlant} from "../models/index.js"

const completeProfile = async (req, res) => {
    try {
        const {userId} = req.params;
        const {  additionalDetails } = req.body;
        
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ message: "User not found" });

        let profileModel;
        if (user.role === "farmer") {
            profileModel = Farmer;
        } else if (user.role === "spoc") {
            profileModel = Spoc;
        } else if (user.role === "power_plant") {
            profileModel = PowerPlant;
        } else {
            return res.status(400).json({ message: "Invalid role" });
        }

        // Check if profile already exists
        let profile = await profileModel.findOne({ userId });
        if (profile) {
            profile = await profileModel.findByIdAndUpdate(profile._id, additionalDetails, { new: true });
        } else {
            profile = new profileModel({ userId, ...additionalDetails });
            await profile.save();
        }

        user.additionalDetails = profile._id;
        console.log("Received data:", req.body);

        await user.save();

        res.status(201).json({ message: "Profile completed successfully", profile });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};

// Fetch User Profile with Linked Additional Details
const getUserProfile = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await User.findById(userId).populate("additionalDetails");

        if (!user) return res.status(404).json({ message: "User not found" });

        res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};

export {completeProfile , getUserProfile}