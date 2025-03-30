import express from "express"
import { addFarmer } from "../controllers/index.js";
import {auth, isSpoc} from  "../middlewares/index.js"
const spocRouter= express.Router();

spocRouter.post("/addFarmer",auth,addFarmer)
// spocRouter.get("/getAllFarmers/:spocId",getAllFarmers)
// spocRouter.delete("/delete/:farmerId",deleteFarmer)
// spocRouter.put("/updateFarme/:farmerId",updateFarmer)
export default spocRouter