import { Request,Response } from "express";
import { UserService } from "../../services/Users/userService";
import { CreateUserDTO, LoginUserDTO,UpdateUserDTO } from "../../dtos/Users/usersDTO";

const userService = new UserService();

export class UserController{
  async register(req:Request,res:Response){
    try{
        const userData:CreateUserDTO = req.body;
        const newUser = await userService.create(userData);
        return res.status(201).json(newUser); 
    }catch(err){
        console.log(err);
    }
  }

  async login(req:Request,res:Response){
    try{
        const userData:LoginUserDTO = req.body;
        const token = await userService.loginUser(userData);
        return res.status(200).json({
            message:"User logged in successfully",
            token
        });
    }catch(err){
        console.log(err);
    }
  }
}