
import { Request, Response ,NextFunction} from 'express';

const request = new Map();



export const rateLimit = async(req:Request,res:Response,next:NextFunction)=>{
             
        const  ip = req.ip;

        const limit = 5;

        const windowTime = 60000; //1 minute m only 5 req

        const currentTIme = Date.now();

      // if not ip means, pehli baar aaya to count 1, start time current time  
        if(!request.has(ip)){
              
              request.set(ip,{
                   count :1,
                   startTime: currentTIme
                })

                return next();
            }

          
            // ip pehle se h
            const userData =request.get(ip);
              
            // abhi bhi ek min ke andar h
             if(currentTIme - userData.startTime < windowTime){
                    
                   userData.count++;

                   if(userData.count > limit ){
                      
                      return res.status(429).json({
                           message: "To many requests"
                       })
                   }
             }

              else{ // matlab doosri window m agye h hum to ab dobara se sab ko original se shuru krna
                       request.set(ip,{
                           count:1,
                           startTime:currentTIme
                       })
              }

              next();

}