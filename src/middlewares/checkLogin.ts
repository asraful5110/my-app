import { type Response,Request,NextFunction } from "express";
import jwt from 'jsonwebtoken'


export async function checkLogin(req:Request,res:Response,next:NextFunction){
try{
    const cookie= req.cookies;
    const SECRET:string = process.env.JWT_SECRET;
    const decoded = await jwt.verify(cookie.login,SECRET);
    req.user = decoded;
      next()
}catch(err:any){
    res.status(401).json({err : 'Invalid username or password'})
}
}