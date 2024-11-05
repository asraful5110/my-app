import { type Request, Response, NextFunction } from "express";
import { users } from "../models/users";
import bcrypt from 'bcrypt'

export async function login(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { username, email, password } = req.body;
    const user = await users.findOne({ $or: [{ username }, { email }] });
    if(user){
        const checkPass = await bcrypt.compare(password,user.password);
        if(checkPass){
            req.fname = user.fname;
            req.lname = user.lname;
            req.email = user.email;
            req.username = user.username
            next()
        }else{
            res.status(401).json({msg : 'invalid credentials'})
        }
    }else{
        res.status(401).json({msg : 'invalid credentials'})
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({ msg: err.message });
  }
}
