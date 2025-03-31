import express from "express"

import { addFarmer, updateFarmer ,getAllFarmers , deleteFarmer, getAllSpoc } from "../controllers/index.js";

import {auth, isSpoc} from  "../middlewares/index.js"
const spocRouter= express.Router();

spocRouter.post("/addFarmer",auth, isSpoc, addFarmer)
spocRouter.get("/getAllFarmers",auth, isSpoc, getAllFarmers)
spocRouter.delete("/deleteFarmer/:farmerId",auth, isSpoc, deleteFarmer)
spocRouter.put("/updateFarmer/:farmerId",auth, isSpoc, updateFarmer)

// spocRouter.post("/uploadSpoc", uploadSpoc)
export default spocRouter