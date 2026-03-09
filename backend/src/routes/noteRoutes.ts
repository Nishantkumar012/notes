import Router from 'express';
import { createNoteController, getnotesController, updatenotesController } from '../controllers/noteController';
import { authMiddleware } from '../middleware/authMiddleware';


const router = Router();




router.post("/create",authMiddleware,createNoteController);
router.get("/",authMiddleware,getnotesController);
router.patch("/update/:id",authMiddleware,updatenotesController);



export default router;
