import {Router} from 'express';
import userRoute from './user.js'
import cardRouter from './card.js'
const router = Router();

router.use("/user",userRoute)
router.use("/card", cardRouter)


export default router;