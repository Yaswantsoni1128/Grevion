import express from 'express'
import { getAllOrders, getAllSpoc, placeOrder } from '../controllers/index.js';
import { isPowerPlant, auth } from '../middlewares/index.js';

const PowerPlantRouter = express.Router();

PowerPlantRouter.get("/getAllSpoc",auth, isPowerPlant, getAllSpoc)
PowerPlantRouter.post("/placeOrder/:spocId",auth, isPowerPlant,placeOrder)
PowerPlantRouter.get("/getAllOrders", auth, isPowerPlant, getAllOrders)

export {PowerPlantRouter}