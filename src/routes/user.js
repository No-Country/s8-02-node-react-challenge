import {Router} from 'express'
import { register,login } from '../controllers/auth.js';
import {  deleteUser, getAllUser,getUser, updateUser } from '../controllers/user.js';
import { check } from 'express-validator';
import { validateFields } from '../middleware/validateFields.js';


const router = Router();

// , /*, , , , address, balance*/

router.post("/register",[
    check('fullname', 'The name is required').not().isEmpty(),
    check('email', 'The email is required').isEmail(),
    check('password', 'The password must have more than 6 characters').isLength({ min:6 }),
    check('phone', 'The Phone only must be a number').isNumeric(),
    check('dni', 'The DNI only must be a number').isNumeric(),
    check('address', 'The Addres is required').not().isEmpty(),
    validateFields
],register)

router.post("/login",login)


router.get("/", getAllUser)
router.get("/:id", getUser)
router.patch("/:id",updateUser)
router.delete("/:id",deleteUser)


export default router;