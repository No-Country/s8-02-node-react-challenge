import { Router } from "express";
import { createCard, deleteCard, getCard, updateCard } from "../controllers/card.js";
import { check } from "express-validator";
import { idCardValidator, idUserValidator, typeOfCardValidator } from "../middleware/idValidators.js";
import { validateFields } from "../middleware/validateFields.js";


const router=Router()

router.get("/:id", [
    check('id', 'It is a not Mongo ID valid'),
    check('id').custom(idCardValidator),
    validateFields
], getCard)


router.post("/:id", [
    check('id', 'It is a not Mongo ID valid'),
    check('id').custom(idUserValidator),
    check('type', 'type has invalid characters').not().isEmpty(),
    check('bank_emisor', 'bank has invalid characters').isString(),
    check('expiration_date', 'expiration date has invalid characters').isString(),
    check('user_card', 'user card has invalid characters').isString(),
    check('user_number', 'user number has invalid characters').isNumeric(),
    check('cvv', 'cvv has invalid characters').isString(),
    // check('bank').custom(typeOfCardValidator),

    validateFields
], createCard)
router.patch("/:id", updateCard)
router.delete("/:id",deleteCard)


export default router