import mongoose from "mongoose"

const powerPlantSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  companyName: {
    type: String,
    required: true
  },
  location:{
    type: String,
    required: true
  },
  phone:{
    type: String,
    required: true
  },
  contactPerson: {
    type: String,
    required: true
  },
  requestedParali: {
    type: Number,
    required: true
  },
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order"
    }
  ]
},{timestamps: true})


export const PowerPlant = mongoose.model("PowerPlant",powerPlantSchema)