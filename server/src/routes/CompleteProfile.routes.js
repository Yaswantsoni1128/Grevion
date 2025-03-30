import express from "express"
import { completeProfile  } from "../controllers/index.js"

const router = express.Router()

router.post("/complete-profile/:userId"  , completeProfile)

export default router