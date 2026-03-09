import {Request,Response} from 'express'
import {createNote} from '../services/noteService'





export const createNoteController = async (req: Request, res: Response) => {
   
   
    try {

        const userId = (req as any).user.userId;

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