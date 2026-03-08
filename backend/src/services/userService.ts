
import {prisma} from "../config/prisma"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"





export const createUser = async (data: any) => {

  const existingUser = await prisma.user.findUnique({
    where: { email: data.email }
  });

  if (existingUser) {
    throw new Error("User already exists");
  } 

  const hashedPassword = await bcrypt.hash(data.password, 10);
     
    const user = await prisma.user.create({
        data:{
            name: data.name,
            email: data.email,
            password: hashedPassword
        }
    })

    return user;
}


export const findUser = async(data:any) =>{



        
       const user = await prisma.user.findUnique({
           where: {email: data.email}
       })

       if(!user){
           throw new Error("user not found ");
       }

       const isPasswordValid = await bcrypt.compare(
         data.password,
         user.password
       )
          
       if(!isPasswordValid){
             throw new Error("Invalid credentials");
       }
        
         const token = jwt.sign({userId:user.id},  process.env.JWT_SECRET as string );

    return {
        
        user: {
            id: user.id,
            name: user.name,
            email: user.email
        },
        
        token};

    }


export const me = async (userId: any) => {

    // console.log(userId);

    return userId;

};