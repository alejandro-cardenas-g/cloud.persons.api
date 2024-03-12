import { Router } from "express";
import { getPerson, createPerson } from "./controller.js";

const router = Router();

router.get("/", getPerson);
router.post("/", createPerson);

export default router;
