import express from "express";
import { BoxScoreController } from "../controllers/boxScoreController.js";

const router = express.Router();

router.get("/", BoxScoreController.getAll);
router.get("/:id", BoxScoreController.getById);
router.post("/", BoxScoreController.create);
router.put("/:id", BoxScoreController.update);
router.delete("/:id", BoxScoreController.remove);

export default router;