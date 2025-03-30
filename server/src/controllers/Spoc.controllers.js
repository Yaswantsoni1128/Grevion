import { Spoc, Farmer, User } from "../models/index.js";

const addFarmer = async (req, res) => {
    try {
        const userId = req.user.id; 
        console.log(userId);

        const {name, phone,email, totalParali } = req.body;

        if (!email || !name || ! phone ||!totalParali) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        
        const existingFarmer = await Farmer.findOne({ email });
        if (existingFarmer) {
            return res.status(400).json({
                success: false,
                message: "Farmer already exists"
            });
        }

        // Find the SPOC associated with this user
        const spoc = await Spoc.findOne({ userId });
        if (!spoc) {
            return res.status(404).json({
                success: false,
                message: "SPOC not found for this user"
            });
        }

        // Create a new farmer and associate with the SPOC
        console.log(spoc.location)
        const newFarmer = await Farmer.create({
            name,
            email,
            phone,
            village: spoc.location,  
            totalParali,
            spocId: spoc._id
        });

        // Update Spoc by pushing farmer's ObjectId
        await Spoc.findByIdAndUpdate(
            spoc._id,
            { $push: { farmers: newFarmer._id } },
            { new: true }
        );

        return res.status(200).json({
            success: true,
            message: "Farmer added successfully",
            newFarmer
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
