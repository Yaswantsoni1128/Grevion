import express from 'express'
import { getAllSpoc, placeOrder } from '../controllers/index.js';
import { isPowerPlant, auth } from '../middlewares/index.js';

const PowerPlantRouter = express.Router();

PowerPlantRouter.get("/getAllSpoc",auth, isPowerPlant, getAllSpoc)
PowerPlantRouter.post("/placeOrder/:spocId",auth,isPowerPlant,placeOrder)

export {PowerPlantRouter}