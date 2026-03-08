import Router from 'express';
import { createNoteController } from '../controllers/noteController';


const router = Router();



router.post("/create",createNoteController);



export default router;
