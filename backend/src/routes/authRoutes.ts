import Router from 'express';
import { signup,login } from '../controllers/userController';
import { rateLimit } from '../middleware/ratelimitter';



const router = Router();


router.post("/signup",signup);
router.post("/login",rateLimit,login);


export default router;