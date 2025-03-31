
import { sendOtp,login,signUp } from "./Auth.controllers.js";
import { completeProfile , getUserProfile } from "./CompleteProfile.controllers.js";
import { getAllSpoc , placeOrder} from "./PowerPlant.controllers.js";
import { addFarmer, updateFarmer, getAllFarmers ,deleteFarmer} from "./Spoc.controllers.js";

export { sendOtp,login,signUp, completeProfile , getUserProfile, addFarmer, updateFarmer, getAllFarmers, deleteFarmer, getAllSpoc, placeOrder}

