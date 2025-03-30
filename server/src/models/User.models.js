import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  firstName:{
    type: String,
    required: true
  },
  lastName:{
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
  },
  additionalDeatils: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: 'role'
  }

},{timestamps: true})

export const User = mongoose.model("User",userSchema)
