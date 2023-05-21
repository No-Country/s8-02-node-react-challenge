import {Router} from 'express';
import userRoute from './user.js'
import cardRouter from './card.js'
import activityRouter from './activity.js'
import notificationRouter from './notification.js'
const router = Router();

router.use("/user",userRoute)
router.use("/card", cardRouter)
router.use("/activity",activityRouter)
router.use("/notification",notificationRouter)

export default router;