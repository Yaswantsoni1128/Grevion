import mongoose from "mongoose"

const farmerSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  village: {
    type: String,
    required: true
  },
  totalParali: {
    type: Number,
    required: true,
    min: 0
  },
  spocId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Spoc'
  },
},{timestamps: true})

export const Farmer = mongoose.model("Farmer",farmerSchema)