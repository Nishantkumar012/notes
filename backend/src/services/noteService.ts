
import{ prisma }from "../config/prisma"


export const createNote = async(userId: string ,data : any)=>{
        
         const note = await prisma.note.create({
              
             data: {
                ...data,
                userId: userId
             }
         });

         return note;
}