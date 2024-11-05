import { type Request,Response,NextFunction } from "express";

export default function notFoundError(req:Request,res:Response,next:NextFunction){
   if(res.headersSent){
    return next('Your requested route not found')
   }
   res.status(404).json('Your requested route not found')
}