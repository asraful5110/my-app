import { type Request,Response } from "express";
import { postModel } from "../models/posts";

interface MyRequest extends Request {
 userId : string
}


export async function getAllPost(req:Request,res:Response){
    try{

        const allPosts = await postModel.find({});

        res.status(200).json(allPosts)

    }
    catch(err:any){
        if(err){
            res.json({
                msg : err.message
            })
        }
    }
}


export async function createPost(req:MyRequest,res:Response){
  try{

    const addPost = new postModel({...req.body,user : req.userId});
   

    const post = await addPost.save();

    res.status(200).json(post)

  }catch (err:any){
    
    if(err) res.json({msg : err.message})
  }
}