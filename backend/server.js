import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import connectMongoDB from "./db/connectMongoDB.js";
import cookieParser from "cookie-parser";


const app = express();
const PORT=process.env.PORT||5000

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cookieParser());

dotenv.config();

app.use("/api/auth",authRoutes);

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
    connectMongoDB();
})