import express from "express"

import { addFarmer, updateFarmer ,getAllFarmers , deleteFarmer } from "../controllers/index.js";

import {auth, isSpoc} from  "../middlewares/index.js"
const spocRouter= express.Router();

spocRouter.post("/addFarmer",auth,addFarmer)

spocRouter.get("/getAllFarmers",auth, getAllFarmers)
spocRouter.delete("/deleteFarmer/:farmerId",auth, deleteFarmer)
spocRouter.put("/updateFarmer/:farmerId",auth,updateFarmer)
export default spocRouter