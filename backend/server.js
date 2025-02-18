import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import {v2 as cloudinary} from "cloudinary";


import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/users.routes.js";

import connectMongoDB from "./db/connectMongoDB.js";


const app = express();
const PORT=process.env.PORT||5000

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cookieParser());

dotenv.config();
cloudinary.config({
    cloud_name:CLOUDINARY_CLOUD_NAME,
    api_key:CLOUDINARY_API_KEY,
    api_secret:CLOUDINARY_API_SECRET
});

app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes);

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
    connectMongoDB();
})