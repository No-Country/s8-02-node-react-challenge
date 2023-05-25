import { Router } from "express";
import { sendQr } from "../controllers/qr.js";
const router=Router()

router.get("/:alias/:mount",sendQr)


export default router
