import { Router } from 'express';
import { register, login } from '../controllers/auth.js';
import {  deleteUser, getAllUser, getUser, updateUser } from '../controllers/user.js';
import { userMiddle } from '../middlewares/auth_user.js';
import { user_middleRegister } from '../middlewares/authUser.js';
import { requireToken } from '../middlewares/authToken.js';
import { check } from 'express-validator';
import { validateFields } from '../middlewares/validateFields.js';
// import { idUserValidator } from '../middlewares/idValidators.js';
import { validateCreateUser, validateLoginUser, validateUserByID, validateUserDelete, validateUserPatch } from '../validators/userValidator.js';
import {validationResultExpress} from '../middlewares/authValidation.js'


const router = Router();

router.post("/register",[ validateCreateUser, validationResultExpress ],  register)

router.post("/login",[ validateLoginUser, validationResultExpress ], user_middleRegister, login)


router.get("/", getAllUser)

router.get("/:id", [validateUserByID, validationResultExpress ], userMiddle, requireToken, getUser)

router.patch("/:id", [ validateUserPatch, validationResultExpress ], userMiddle, requireToken, updateUser)


router.delete("/:id", [ validateUserDelete, validationResultExpress ], userMiddle, requireToken ,deleteUser)


export default router;