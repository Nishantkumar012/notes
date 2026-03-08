import Router from 'express';
import { signup,login,myProfile } from '../controllers/userController';
import { rateLimit } from '../middleware/ratelimitter';
import { authMiddleware } from '../middleware/authMiddleware';



const router = Router();


router.post("/signup",signup);
router.post("/login",rateLimit,login);
router.get("/profile",authMiddleware,myProfile);




export default router;