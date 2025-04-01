import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import userRouter from "./routes/userRouter.js";
import productRouter from "./routes/productRouter.js";
import verifyJWT from "./middleware/auth.js";
import orderRouter from "./routes/orderRouter.js";
import dotenv from "dotenv";
dotenv.config()

const app = express();

mongoose.connect(process.env.MONGO_URL).then(
    ()=>{
        console.log("connected to the database");
    }
).catch(
    ()=>{
        console.log("connection failed");
    }
)

//mongodb+srv://Admin:0316@cluster0.aq4sw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

app.use (bodyParser.json());
app.use (verifyJWT)
    


app.use("/api/user",userRouter)
app.use("/api/product",productRouter)
app.use("/api/order",orderRouter)

app.listen(3000,
    ()=>{
        console.log("server is running on port 3000");
    }
)
