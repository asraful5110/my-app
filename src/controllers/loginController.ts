import { type Request,Response } from "express";
import jwt from 'jsonwebtoken';


export async function loginController(req:Request,res:Response){

    try{
        const userData = {
            name : `${req.fname} ${req.lname}`,
            email : req.email,
            username : req.username
        }
     const generateJwt = await jwt.sign(userData, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE });
       res.cookie('login',generateJwt,{
        maxAge : process.env.JWT_EXPIRE,
        secure : true,
       })
       res.status(200).json({
        token : generateJwt,
        login : true
       })
    }catch(err){
        res.status(401).json({
            msg : err.message
        })
    }

   
}