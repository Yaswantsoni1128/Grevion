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
        console.log(newFarmer)
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
        const {name, phone,email, totalParali } = req.body;

        if(!name || !phone || !email || !totalParali){
            return res.status(404).json({
                success: false,
                message: "All fields required!"
            })
        }

        if(!await Farmer.findById(farmerId)) return res.status(400).json({success: false, message: "Farmer id doesn't exists!"});
        
        
        const updatedFarmer = await Farmer.findByIdAndUpdate(farmerId, {totalParali :totalParali, name:name, phone:phone, email:email }, {new: true})
        console.log(updatedFarmer)
        

        res.status(200).json({updatedFarmer, message: "Details updated successfully!"} )
    }
    catch(error){
        console.log("Error updating farmer details", error);
        return res.status(500).json({
            success : false,
            message :"Error updating farmer details. Try again!"
        })
    }
}

const getAllFarmers = async (req, res) => {
    try {
        const userId = req.user.id;

        // Find the SPOC using userId
        const spoc = await Spoc.findOne({ userId }).populate("farmers");

        // Check if SPOC exists
        if (!spoc) {
            return res.status(404).json({
                success: false,
                message: "SPOC not found for this user",
            });
        }

        return res.status(200).json({
            success: true,
            message: "All farmers fetched successfully",
            farmers: spoc.farmers,
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Error fetching farmers",
        });
    }
};


export  {addFarmer, updateFarmer, getAllFarmers};
