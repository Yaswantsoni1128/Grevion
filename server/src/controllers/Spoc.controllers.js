import { Spoc, Farmer, User } from "../models/index.js";

const addFarmer = async (req, res) => {
    try {
        const userId = req.user.id;  // This is the logged-in user's ID (SPOC)
        console.log(userId);
        const { email, totalParali } = req.body;

        // Find the user by email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User does not exist"
            });
        }

        // Check if user is a farmer
        if (user.role !== "farmer") {
            return res.status(400).json({
                success: false,
                message: "User is not a farmer"
            });
        }

        // Find the SPOC associated with the logged-in user
        const spoc = await Spoc.findOne({ userId: userId });
        if (!spoc) {
            return res.status(404).json({
                success: false,
                message: "SPOC not found for this user"
            });
        }

        // Check if the farmer's village matches the SPOC's village
        console.log(spoc.village)
        if (user.location !== spoc.village) {
            return res.status(400).json({
                success: false,
                message: "Farmer's village does not match SPOC's village"
            });
        }

        // Create new farmer and associate with the found SPOC
        const newFarmer = await Farmer.create({
            userId: user._id,  
            village: user.location,
            totalParali,
            spocId: spoc._id  
        });

        // Update Spoc by pushing farmer's ObjectId
        const updatedSpoc = await Spoc.findByIdAndUpdate(
            spoc._id,
            { $push: { farmers: newFarmer._id } },
            { new: true }
        );

        return res.status(200).json({
            success: true,
            message: "Farmer added successfully",
            updatedSpoc
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Unable to add farmer, please try again"
        });
    }
};

export { addFarmer };
