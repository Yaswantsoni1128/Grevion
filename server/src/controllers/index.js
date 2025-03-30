
import { sendOtp,login,signUp } from "./Auth.controllers.js";
import { completeProfile , getUserProfile } from "./CompleteProfile.controllers.js";
import { addFarmer, updateFarmer } from "./Spoc.controllers.js";
import { getAllSpoc } from "./GetAllSpoc.controllers.js";

export { sendOtp,login,signUp, completeProfile , getUserProfile, addFarmer, updateFarmer , getAllSpoc}
