import { Spoc, Farmer, User } from "../models/index.js";

const addFarmer = async (req, res) => {
    try {
        const userId = req.user.id;  // This is the logged-in user's ID (possibly a SPOC)
        console.log(userId)
        const { email,  totalParali } = req.body;

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

        // Find the SPOC associated with this user
        const spoc = await Spoc.findOne({ userId: userId });
        if (!spoc) {
            return res.status(404).json({
                success: false,
                message: "SPOC not found for this user"
            });
        }

        // Create new farmer and associate with the found SPOC
        const newFarmer = await Farmer.create({
            userId: user._id,  // Correctly referencing the user
            village:user.location,
            totalParali,
            spocId: spoc._id   // Correctly linking the farmer to the Spoc
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

const updateFarmer = async (req, res) => {
    try{
        const farmerId = req.params.farmerId;
        const {user_firstname,user_lastname, user_phone, farmer_totalParali} = req.body;

        if(!user_firstname || !user_lastname || !user_phone || !farmer_totalParali){
            return res.status(404).json({
                success: false,
                message: "All fields required!"
            })
        }

        if(!await Farmer.findById(farmerId)) return res.status(400).json({success: false, message: "Farmer id doesn't exists!"});
        console.log(farmer_totalParali)
        
        const updatedFarmer = await Farmer.findByIdAndUpdate(farmerId, {totalParali : farmer_totalParali }, {new: true})
        console.log(updatedFarmer)
        const userid = updatedFarmer.userId;
        const updatedUser = await User.findByIdAndUpdate(userid, {firstName : user_firstname, lastName: user_lastname, phone: user_phone}, {new: true, runValidators: true})


        res.status(200).json({updatedFarmer, updatedUser, message: "Details updated successfully!"} )
    }
    catch(error){
        console.log("Error updating farmer details", error);
        return res.status(500).json({
            success : false,
            message :"Error updating farmer details. Try again!"
        })
    }
}

export  {addFarmer, updateFarmer};
