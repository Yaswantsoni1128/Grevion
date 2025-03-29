import mongoose from "mongoose"

const orderSchema = new mongoose.Schema({
  powerPlantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PowerPlant",
    required: true
  },
  spocId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Spoc",
    required: true
  },
  totalParali: {
    type: Number,
    min: 0,
    required: true
  },
  totalPrice:{
    type: Number,
    min: 0,
    required: true
  },
  status: [
    {
      type: String,
      enum: ['pending','confirmed','delivered']
    }
  ]
},{timestamps: true})

export const Order = mongoose.model("Order",orderSchema)