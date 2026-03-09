
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



export const getNotes = async(userId: string)=>{
         
          const notes = await prisma.note.findMany({
               where:{userId: userId},
               include:{
                   user:{
                      select:{

                          name:true,
                          email:true
                        }
                    }
                },
                
                orderBy:{
                   createdAt: 'desc'
                }
          }) 

            

          return notes;
}




// update the data
export const updateNote = async(userId:string, noteId:string, updateData:any)=>{
             
             const note = await prisma.note.update({
                  where:{
                      id:noteId,
                      userId:userId
                  },
                  data:updateData,
                  include:{
                     user:{
                        select:{
                            name:true,
                            email:true
                        }
                     }
                  }
             })

             return note;
}