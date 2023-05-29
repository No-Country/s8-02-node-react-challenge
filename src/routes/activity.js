import {Router} from 'express';
import {getActivities, transfer} from '../controllers/activity.js';
import { userMiddle } from '../middlewares/auth_user.js';
import { requireToken } from '../middlewares/authToken.js';

const router = Router();

router.post("/transfer", userMiddle, requireToken, transfer)
router.get("/activities", userMiddle, requireToken, getActivities)


export default router;