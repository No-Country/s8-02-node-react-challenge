import { Router } from "express";
import { createCard, deleteCard, getCard, updateCard } from "../controllers/card.js";
import { validateCardByID, validateCardCreate, validateCardDelete, validateCardUpdate } from "../validators/cardValidators.js";
import { validationResultExpress } from "../middlewares/authValidation.js";


const router=Router()

router.get("/:id", [ validateCardByID, validationResultExpress], getCard)


router.post("/:id", [ validateCardCreate, validationResultExpress ], createCard)
router.patch("/:id", [validateCardUpdate], validationResultExpress, updateCard)
router.delete("/:id", [validateCardDelete], validationResultExpress, deleteCard)


export default router