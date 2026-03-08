import {Request,Response} from 'express';
import { createUser } from '../services/userService';




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