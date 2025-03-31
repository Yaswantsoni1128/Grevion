import { deleteModel } from "mongoose";
import {Order, PowerPlant, Request, Spoc, User} from "../models/index.js"

const getAllSpoc = async (req,res)=>{
  try {
    const allSpoc = await Spoc.find({})

    if(allSpoc.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Spoc not found"
    });
  }

    return res.status(200).json({
      success: true,
      message: "All spoc fetched successfully",
      data: allSpoc
    })
    
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      success: false,
      message: "Unable to get all spocs, please try again"
  });
  }
}

const placeOrder = async (req, res) => {
  try {
    const userId = req.user.id; // This is userId, not necessarily PowerPlant _id
    const user = await User.findById(userId);
    const spocId = req.params.spocId;
    const spoc = await Spoc.findById(spocId);

    if (!user) {
      console.log("User not found");
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    if (!spoc) {
      console.log("Spoc not found");
      return res.status(404).json({
        success: false,
        message: "Spoc does not exist",
      });
    }

    // Fetch the PowerPlant associated with this user
    const powerPlant = await PowerPlant.findOne({ userId: userId });
    if (!powerPlant) {
      console.log("PowerPlant not found for userId:", userId);
      return res.status(404).json({
        success: false,
        message: "PowerPlant does not exist for this user",
      });
    }

    const {
      requestedParali,
      offeredPricePerTon,
      totalPrice,
      deliverWithin,
      location,
      message,
    } = req.body;

    if (!requestedParali || !offeredPricePerTon || !totalPrice || !deliverWithin || !location || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    console.log(user.name);

    // Create Request document and save it to get _id
    const newRequest = await Request.create({
      powerPlantId: powerPlant._id, // Use actual PowerPlant _id
      spocId: spocId,
      name: user.name,
      requestedParali,
      offeredPricePerTon,
      totalPrice,
      deliverWithin,
      location,
      message,
    });

    // Create Order document and save it to get _id
    const newOrder = await Order.create({
      powerPlantId: powerPlant._id, // Use actual PowerPlant _id
      spocId: spocId,
      name: spoc.name,
      location: spoc.location,
      requestedParali,
      offeredPricePerTon,
      totalPrice,
      deliverWithin,
    });

    // Update Spoc and PowerPlant with the saved document _id
    const updatedSpoc = await Spoc.findByIdAndUpdate(
      spocId,
      { $push: { requests: newRequest._id } },
      { new: true }
    );

    console.log("PowerPlant ID:", powerPlant._id);

    const updatedPowerPlant = await PowerPlant.findByIdAndUpdate(
      powerPlant._id, // Use PowerPlant ID instead of userId
      { $push: { orders: newOrder._id } },
      { new: true }
    );

    console.log(updatedPowerPlant);

    return res.status(200).json({
      success: true,
      message: "Order placed successfully",
      updatedSpoc,
      updatedPowerPlant,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Unable to place order, please try again.",
    });
  }
};

export  {getAllSpoc, placeOrder}