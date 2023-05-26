import { Router } from 'express';
import { register, login } from '../controllers/auth.js';
import {  deleteUser, getAllUser, getUser, updateUser } from '../controllers/user.js';
import { userMiddle } from '../middlewares/auth_user.js';
import { user_middleRegister } from '../middlewares/authUser.js';
import { requireToken } from '../middlewares/authToken.js';
import { check } from 'express-validator';
import { validateFields } from '../middlewares/validateFields.js';
import { idUserValidator } from '../middlewares/idValidators.js';
import { updatePass } from '../controllers/updatepass.js';

const router = Router();

router.post("/register",[
    check('fullname', 'The name is required').not().isEmpty(),
    check('email', 'The email is required').isEmail(),
    check('password', 'The password must have more than 6 characters').isLength({ min:6 }),
    check('phone', 'The Phone only must be a number').isNumeric(),
    check('dni', 'The DNI only must be a number').isNumeric(),
    check('address', 'The Addres is required').not().isEmpty(),
    validateFields
],  register)

router.post("/login",[
    check('email', 'The email is required').isEmail(),
    check('password', 'The password must have more than 6 characters').isLength({ min:6 }),
    validateFields
], user_middleRegister, login)


router.get("/", getAllUser)

router.get("/:id",[
    check('id', 'It is not a valid mongo id').isMongoId(),
    check('id').custom(idUserValidator),
    validateFields
    ],
    userMiddle,
    requireToken,
    getUser)

router.patch("/:id", [
    check('id', 'It is not a valid mongo id').isMongoId(),
    check('id').custom(idUserValidator),
    check('fullname', 'The name is required').not().isEmpty(),
    check('email', 'The email is required').isEmail(),
    check('password', 'The password must have more than 6 characters').isLength({ min:6 }),
    check('phone', 'The Phone only must be a number').isNumeric(),
    check('dni', 'The DNI only must be a number').isNumeric(),
    check('address', 'The Addres is required').not().isEmpty(),
    validateFields
    ],
    userMiddle,
    requireToken, 
    updateUser)


router.delete("/:id", [ 
    check('id', 'It is not a valid mongo id').isMongoId(),
    check('id').custom(idUserValidator),
    validateFields,
    ],
    userMiddle,
    requireToken,
    deleteUser)

router.patch("/updatepass",updatePass)


export default router;