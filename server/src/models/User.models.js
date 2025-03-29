import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password:{
    type: String,
    required: true
  },
  phone:{
    type: String,
    required: true
  },
  location:{
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['farmer','spoc','power_plant'],
    required: true
  }

},{timestamps: true})

export const User = mongoose.model("User",userSchema)
