import mongoose from "mongoose"

const spocSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  village: {
    type: String,
    required: true
  },
  farmers:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Farmer"
    }
  ],
  totalParaliCollected: {
    type: Number,
    required: true,
    min: 0
  },
  requests: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "PowerPlant"
  }],
  pricePerTon: {
    type: Number,
    required: true,
    min: 0
  },
  availableForSale: {
    type: Boolean,
    default: true
  }
},{timestamps:true})

export const Spoc = mongoose.model("Spoc",spocSchema)