import express,{type Express,Request,Response} from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken'

// dotenv configure
dotenv.config()
const app : Express = express();
const PORT = process.env.PORT || 4000;



app.get('/',(req:Request,res:Response)=>{
    res.cookie('abc','hello')
    res.status(200).send("Hello bangladesh");
})


console.log("Hello")
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})