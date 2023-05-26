import { Router } from "express";
import { addMoney } from "../controllers/money.js";
const router=Router()

router.post("/:id",addMoney)

export default router