import {Router} from 'express'
import { register,login } from '../controllers/auth.js';
import {  deleteUser, getAllUser,getUser, updateUser } from '../controllers/user.js';
import { check } from 'express-validator';
import { validateFields } from '../middleware/validateFields.js';
import { idUserValidator } from '../middleware/idValidators.js';


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
],  login)


router.get("/", getAllUser)

router.get("/:id",[
    check('id', 'It is not a valid mongo id').isMongoId(),
    check('id').custom(idUserValidator),
    validateFields
    ],
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
    updateUser)


router.delete("/:id", [ 
    check('id', 'It is not a valid mongo id').isMongoId(),
    check('id').custom(idUserValidator),
    validateFields,
    ], 
    deleteUser)


export default router;