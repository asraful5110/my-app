import {type Request,Response,NextFunction} from 'express';


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function handleError(err:Error,req:Request,res:Response,next:NextFunction){
   res.status(403).json({error:err})
}