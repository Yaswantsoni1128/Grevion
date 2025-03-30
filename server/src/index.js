import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import connectDB from "./config/db.js"; 
import userRoutes from "./routes/User.routes.js"
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

app.use("/api/v1/auth",userRoutes)



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
