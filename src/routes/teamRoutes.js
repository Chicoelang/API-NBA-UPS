import express from "express";
import { TeamController } from "../controllers/teamController.js";

const router = express.Router();

router.get("/", TeamController.getAll);
router.get("/:id", TeamController.getById);
router.post("/", TeamController.create);
router.put("/:id", TeamController.update);
router.delete("/:id", TeamController.remove);

export default router;