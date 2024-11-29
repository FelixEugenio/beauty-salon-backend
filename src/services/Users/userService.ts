import { UserRepository } from "../../repositories/Users/userRepository";
import { CreateUserDTO,LoginUserDTO,UpdateUserDTO, UserResponseDTO } from "../../dtos/Users/usersDTO";
import bcrypt from 'bcryptjs'
import generateToken from "../../utils/auth/generate-token";

export class UserService{
    private userRepository : UserRepository;
    constructor(){
        this.userRepository = new UserRepository();
    }
    async create({email,name,password,banner,phoneNumber}:CreateUserDTO):Promise<UserResponseDTO>{
           const verifyIfUserExists = await this.userRepository.findByEmail(email);
           if(verifyIfUserExists){
            throw new Error("User already exists");
           }

            const PasswordHash = bcrypt.hashSync(password,8); 

            const user = await this.userRepository.create({email,name,password:PasswordHash,banner,phoneNumber});
            
            return {
                name:user.name,
                email:user.email,
                banner:user.banner,
                phoneNumber:user.phoneNumber,
            };
    }

    async loginUser({email,password}:LoginUserDTO):Promise<{token:string}>{
        const user = await this.userRepository.findByEmail(email);
        if(!user){
            throw new Error("User not found");
        }
        const PasswordHash = bcrypt.compareSync(password,user.password); 
        if(!PasswordHash){
            throw new Error("Email or password incorrect");
        }

        const token = await generateToken(user.id);
        return {token}
    }
}
