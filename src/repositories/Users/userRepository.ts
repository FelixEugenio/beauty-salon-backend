import { PrismaClient } from "@prisma/client";
import { CreateUserDTO, UpdateUserDTO } from "../../dtos/Users/usersDTO";
const prisma = new PrismaClient();

export class UserRepository {

    async create({email,name,password,banner,phoneNumber}:CreateUserDTO){
        return prisma.user.create({
            data: {
                email,
                name,
                password,
                banner,
                phoneNumber
            }
        })
    }

    async findById(userId:string){
      return prisma.user.findUnique({
          where: {
              id: userId
          }
      })
    }

    async update({banner,phoneNumber,name,email,password}:UpdateUserDTO,userId:string){
        return prisma.user.update({
            where: {
                id: userId
            },
            data: {
                banner,
                phoneNumber,
                name,
                email,
                password
            }
    })
 }

   async delete(userId:string){
        return prisma.user.delete({
            where: {
                id: userId
            }
        })
    }

}