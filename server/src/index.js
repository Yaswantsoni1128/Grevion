import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import connectDB from "./config/db.js"; 
import {userRouter, spocRouter} from "./routes/index.js"
import cookieParser from "cookie-parser"
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

connectDB();

app.get("/",(req,res)=>{
  res.send("SERVER RUNNING...")
})

<<<<<<< HEAD
app.use("/api/v1/auth",userRouter);
app.use("/api/v1/spoc", spocRouter);
=======
app.use("/api/v1/auth",userRoutes)
// complete profile routes
import {completeProfileRouter} from "./routes/index.js"
app.use("/api/v1/users" , completeProfileRouter)

>>>>>>> 7b43e9a324606848f0c3102cced4f61e568712ff


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
