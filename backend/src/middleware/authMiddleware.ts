
import {Request,Response,NextFunction} from 'express'

// import jwt ,jwtPayload from 'jsonwebtoken';
import { JwtPayload } from "jsonwebtoken";
import jwt from 'jsonwebtoken';

declare global{
    namespace Express{
         interface Request{
            user: JwtPayload,
            userId : string
         }
        
    }
}



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
                
                
                  // (req as any).user = decoded;

                     req.user = decoded as any

                //   console.log((req as any).user);

                  next();

        } catch (error : any) {
              
              return res.status(401).json({
                    message: "token is missing"
              })
        }

}