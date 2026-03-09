import {Request,Response} from 'express'
import {createNote, getNotes,updateNote} from '../services/noteService'





export const createNoteController = async (req: Request, res: Response) => {
   
   
    try {

        // const userId = (req as any).user.userId;
                  const userId = req.userId


        const note = await createNote(userId, req.body);

        res.json({
            message: "Note created",
            data: note
        });

    } catch (error: any) {

        console.error(error);

        res.status(500).json({
            message: "Something went wrong",
            error: error.message
        });

    }
};



export const  getnotesController = async(req:Request,res:Response)=>{
     
     try {
            //   const userId = (req as any).user.userId;

                  const userId = req.userId

              const notes = await getNotes(userId);

              res.json({
                  message: "All notes fetched",
                  data: notes
              })
              
     } catch (error : any) {
               
        console.error(error);

        res.status(500).json({
            message: "Something went wrong",
            error: error.message
        });

     }
} 



export const updatenotesController = async(req:Request,res:Response)=>{
          
          const {title,content,isPinned} = req.body;

                  const userId = req.userId;
                  const noteId = req.params.id as string;

                  try {
                  const updateData : any = {};
                  
                  // if tittl is missing then let the tittle be otherwise jo title h ,put it into this
                  if(title !== undefined) updateData.title = title;
                  if(content !== undefined) updateData.content = content;
                  if(isPinned !== undefined) updateData.isPinned = isPinned;

                  const note = await updateNote(userId,noteId,updateData);
                     
                  console.log(note)
                  return res.json({
                      message: "update the data",
                      data: note
                   },)
                       
                //    console.log("controller m hu")
                } catch (error:any) {
                      
                    console.log(error);
                    return res.status(500).json({
                        
                         message:"Something went wrong",
                         error: error.message
                    })
            
          }
} 