import express from 'express'
import { getAllSpoc } from '../controllers/index.js';
import { isPowerPlant, auth } from '../middlewares/index.js';

const PowerPlantRouter = express.Router();

PowerPlantRouter.get("/getAllSpoc",auth, isPowerPlant, getAllSpoc)

export {PowerPlantRouter}