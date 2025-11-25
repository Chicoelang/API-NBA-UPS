import express from "express";
import { CoachController } from "../controllers/coachController.js";

const router = express.Router();

router.get("/", CoachController.getAll);
router.get("/:id", CoachController.getById);
router.post("/", CoachController.create);
router.put("/:id", CoachController.update);
router.delete("/:id", CoachController.remove);

export default router;