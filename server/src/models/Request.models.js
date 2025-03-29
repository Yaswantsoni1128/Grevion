import mongoose from "mongoose"

const requestSchema = new mongoose.Schema({
  powerPlantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PowerPlant",
    required: true,
  },
  spocId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Spoc",
    required: true
  },
  requestedParali: {
    type: Number,
    min: 0 ,
    required: true
  },
  offeredPricePerTon: {
    type: Number,
    min: 0,
    required: true
  },
  status: {
    type: String,
    enum: ['pending','accepted','rejected','completed'],
    required: true
  },
  message: {
    type: String,
    required: true
  }
},{timestamps: true})

export const Request = mongoose.model("Request",requestSchema)