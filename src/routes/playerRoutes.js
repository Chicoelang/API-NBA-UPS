import express from "express";
import { PlayerController } from "../controllers/playerController.js";

const router = express.Router();

router.get("/", PlayerController.getAll);
router.get("/:id", PlayerController.getById);
router.post("/", PlayerController.create);
router.put("/:id", PlayerController.update);
router.delete("/:id", PlayerController.remove);

export default router;