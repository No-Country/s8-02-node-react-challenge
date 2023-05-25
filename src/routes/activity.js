import {Router} from 'express';
import {getActivities, transfer,addfounds} from '../controllers/activity.js'

const router = Router();

router.post("/transfer",transfer)
router.post("/activities",getActivities)
router.post("/addfounds/:id",addfounds)

export default router;