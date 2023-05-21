import { Router } from 'express';
import { register, login } from '../controllers/auth.js';
import {  deleteUser, getAllUser, getUser, updateUser } from '../controllers/user.js';
import { userMiddle } from '../middlewares/auth_user.js';
import { user_middleRegister } from '../middlewares/authUser.js';
import { requireToken } from '../middlewares/authToken.js';


const router = Router();

router.post("/register", register)
router.post("/login", user_middleRegister, login)


router.get("/", getAllUser)
router.get("/:id", userMiddle, requireToken, getUser)
router.patch("/:id", userMiddle, requireToken, updateUser)
router.delete("/:id", userMiddle, requireToken, deleteUser)


export default router;