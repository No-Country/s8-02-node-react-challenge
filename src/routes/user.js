import {Router} from 'express'
import { register,login } from '../controllers/auth.js';
import {  deleteUser, getAllUser,getUser, updateUser } from '../controllers/user.js';

const router = Router();

router.post("/register",register)
router.post("/login",login)


router.get("/", getAllUser)
router.get("/:id", getUser)
router.patch("/:id",updateUser)
router.delete("/:id",deleteUser)

export default router;