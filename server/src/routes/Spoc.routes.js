import express from "express"

import { addFarmer, updateFarmer ,getAllFarmers } from "../controllers/index.js";

import { addFarmer, updateFarmer, deleteFarmer } from "../controllers/index.js";

import {auth, isSpoc} from  "../middlewares/index.js"
const spocRouter= express.Router();

spocRouter.post("/addFarmer",auth,addFarmer)

spocRouter.get("/getAllFarmers",auth, getAllFarmers)
// spocRouter.delete("/delete/:farmerId",deleteFarmer)

// spocRouter.get("/getAllFarmers/:spocId",auth,getAllFarmers)
spocRouter.delete("/deleteFarmer/:farmerId",auth, deleteFarmer)
spocRouter.put("/updateFarmer/:farmerId",auth,updateFarmer)
export default spocRouter