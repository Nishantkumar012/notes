
import {Request,Response,NextFunction} from 'express'

import jwt from 'jsonwebtoken';



export const authMiddleware = (
     req:Request,
     res:Response,
     next:NextFunction
)=>{

        const header = req.headers.authorization;

        if(!header){
             res.status(401).json({
                 message: "Invalid header"
             })
        }
          // header m [1] pe token hoga
        const token = header?.split(" ")[1];

        try {     // decode m token ko verify kiya
                  const decoded = jwt.verify(token!, process.env.JWT_SECRET as string);
                
                
                  (req as any).user = decoded;

                //   console.log((req as any).user);

                  next();

        } catch (error : any) {
              
              return res.status(401).json({
                    message: "token is missing"
              })
        }

}