import { Router } from "express";
import { createCard, deleteCard, getCard, updateCard } from "../controllers/card.js";


const router=Router()

router.get("/:id",getCard)
router.post("/:id",createCard)
router.patch("/:id", updateCard)
router.delete("/:id",deleteCard)


export default router