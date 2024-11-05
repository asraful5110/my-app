import {type Request,Response} from 'express';
import { users } from '../models/users';
import bcrypt from 'bcrypt';
export async function addUser(req:Request,res:Response){
  try{
    const userData = req.body;
    const {password} = userData;
    const soltRound = 10;
    const hashPassword = await bcrypt.hash(password,soltRound)
    const saveData = {...userData,password : hashPassword};

    const userDoc = new users(saveData);
  
    const data = await userDoc.save();
  
    res.status(200).json({
      msg : "user add success",
      success : true,
      data : data
    })
   
  }catch(err:unknown){
   res.status(500).json({
   err
   })
  }
}