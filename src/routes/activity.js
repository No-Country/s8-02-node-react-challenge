import {Router} from 'express';
import {getActivities, transfer} from '../controllers/activity.js'

const router = Router();

router.post("/transfer",transfer)
router.post("/activities",getActivities)


export default router;