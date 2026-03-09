import {Request,Response} from 'express';
import { createUser,findUser,me } from '../services/userService';




export const signup = async(req:Request,res:Response) =>{
     

       const {name,email,password} = req.body;

        try {
              const user = await createUser({name,email,password});

              if(user){
                  res.status(201).json({
                     message: "User created successfully",
                     user
                  });
                }
        } catch (error: any) {
              
              res.status(400).json({
                  message: error.message
              });
        }
};



 export const login = async(req:Request,res:Response)=>{
     
           const {name,email,password} = req.body;

           try {
                  const data = await findUser({name,email,password});

                  if(data){
                      res.status(201).json({
                        message:"welcome, you are signed in",
                        user: data.user,
                        token: data.token
                      }); 
                  }
                  
           } catch (error : any) {
              
               res.status(400).json({
                    message: error.message
               });
           }
 }


export const myProfile = async (req: Request, res: Response) => {

    // const userId = (req as any).user.userId;
                  const userId = req.userId


    const data = await me(userId);

    res.json({
        message: "user id mil gaya",
        userId: data
    });
};