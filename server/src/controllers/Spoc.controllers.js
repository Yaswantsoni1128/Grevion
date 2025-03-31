import mongoose from "mongoose";
import { Spoc, Farmer, Request, Order } from "../models/index.js";

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
            { $push: { farmers: newFarmer._id },$inc: { totalParaliCollected: totalParali }  },
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
    try {
        const farmerId = req.params.farmerId;
        const { name, phone, email, totalParali } = req.body;

        if (!name || !phone || !email || totalParali === undefined) {
            return res.status(400).json({
                success: false,
                message: "All fields are required!"
            });
        }

        const farmerObj = await Farmer.findById(farmerId);
        if (!farmerObj) {
            return res.status(400).json({ success: false, message: "Farmer ID doesn't exist!" });
        }

        const spocId = farmerObj.spocId;
        const previousParali = farmerObj.totalParali;
        const paraliDifference = totalParali - previousParali; // Calculate the difference

        // Update Farmer details
        const updatedFarmer = await Farmer.findByIdAndUpdate(
            farmerId, 
            { totalParali, name, phone, email }, 
            { new: true }
        );

        // Update totalParaliCollected in Spoc
        await Spoc.findByIdAndUpdate(
            spocId,
            { $inc: { totalParaliCollected: paraliDifference } }, // Adjust based on difference
            { new: true }
        );

        return res.status(200).json({
            success: true,
            updatedFarmer,
            message: "Farmer details updated successfully!"
        });

    } catch (error) {
        console.log("Error updating farmer details:", error);
        return res.status(500).json({
            success: false,
            message: "Error updating farmer details. Try again!"
        });
    }
};


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


const deleteFarmer = async (req, res) => {
    try{
        const farmerId = req.params.farmerId;
        console.log(farmerId);
        
        const farmerObj = await Farmer.findById(farmerId);
        if(!farmerObj) return res.status(204).json({message: "Farmer doesn't exists"});
        const spocid = farmerObj.spocId;
        
        console.log(spocid);
      

        const updatedSpoc = await Spoc.findByIdAndUpdate(spocid, 
            {$pull : {farmers: farmerId}, $inc: {totalParaliCollected: -farmerObj.totalParali}},
            {new: true});
        await Farmer.findByIdAndDelete(farmerId);

        res.status(200).json({updatedSpoc, success: true, message: "deleted farmer successfully!"})
    }
    catch(error){
        console.log("Error deleting farmer: ", error);
        return res.status(400).json({
            success : false,
            message: "Error deleting farmer"
        })
    }
}
const getAllRequests = async (req, res) => {
    try {
      const userId = req.user.id;
      const spoc = await Spoc.findOne({ userId }).populate({
        path: "requests",
        model: "Request", // Explicitly mention the model
      });
      
  
      if (!spoc) {
        return res.status(404).json({
          success: false,
          message: "Spoc not found",
        });
      }
  
      console.log("Requests inside Spoc:", spoc.requests); // Debugging line
  
      return res.status(200).json({
        success: true,
        message: "All requests fetched successfully",
        requests: spoc.requests,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Error fetching requests",
      });
    }
  };

  

  const acceptRequest = async (req, res) => {
    try {
        const userId = req.user.id;  // This is the user ID
        const reqid = req.params.reqid; // Request ID from params

        console.log("Received User ID:", userId);
        console.log("Received Request ID:", reqid);

        // Fetch the request
        let request = await Request.findById(reqid);
        if (!request) {
            return res.status(404).json({
                success: false,
                message: "Request not found"
            });
        }

        // Fetch the SPOC linked to this user
        let spoc = await Spoc.findOne({ userId: userId }).select("totalParaliCollected");
        
        console.log("Fetched SPOC:", spoc);

        if (!spoc) {
            return res.status(404).json({
                success: false,
                message: "SPOC not found"
            });
        }

        // Check if enough parali is available
        if (spoc.totalParaliCollected < request.requestedParali) {
            return res.status(400).json({
                success: false,
                message: "Insufficient quantity"
            });
        }

        // Update Spoc's totalParaliCollected
        spoc = await Spoc.findByIdAndUpdate(
            spoc._id,
            { $inc: { totalParaliCollected: -request.requestedParali } },
            { new: true }
        );

        // Update request status to "accepted"
        request = await Request.findByIdAndUpdate(
            reqid,
            { status: "accepted" },
            { new: true }
        );

        // Update order status
        const orderId = request.orderId;
        const order = await Order.findByIdAndUpdate(
            orderId,
            { status: "accepted" },
            { new: true }
        );

        return res.status(200).json({
            success: true,
            message: "Request accepted successfully",
            updatedSpoc: spoc,
            updatedRequest: request,
            updatedOrder: order
        });

    } catch (error) {
        console.error("Error accepting request:", error);
        return res.status(500).json({
            success: false,
            message: "Unable to accept request, please try again"
        });
    }
};



export  {addFarmer, updateFarmer, deleteFarmer, getAllFarmers, getAllRequests, acceptRequest};
