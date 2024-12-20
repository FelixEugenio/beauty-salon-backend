import { Request,Response,NextFunction } from "express";
import jwt from "jsonwebtoken";
import { PayloadDTO } from "../../dtos/auth/authDTO";
import { verify } from "jsonwebtoken";
export async function authMiddleware(req:Request,res:Response,next:NextFunction){
    const authHeader = req.headers.authorization;
    if(!authHeader){
        return res.status(401).json({message:"Token not found"});
    }
    const [ ,token] = authHeader.split(" ");
    try{
        const {sub} = verify(token,process.env.JWT_SECRET) as PayloadDTO;
       console.log(sub);

       return next();
       
    }catch(err){
        return res.status(401).json({message:"Invalid token"});
    }

}