
import {prisma} from "../config/prisma"





export const createUser = async (data: any) => {

  const existingUser = await prisma.user.findUnique({
    where: { email: data.email }
  });

  if (existingUser) {
    throw new Error("User already exists");
  }
     
    const user = await prisma.user.create({
        data:{
            name: data.name,
            email: data.email,
            password: data.password
        }
    })

    return user;
}