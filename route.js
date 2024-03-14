import { Router } from "express";
import { getPerson, createPerson } from "./controller.js";

const router = Router();

router.get("/", getPerson);
router.post("/", createPerson);
router.get("/search", getPerson);
router.get("/health-check", (_, res) => {
  return res.status(200).json({
    status: 200,
    api: "persons.api",
  });
});

export default router;
