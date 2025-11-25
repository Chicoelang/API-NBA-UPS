import express from "express";
import { StandingsController } from "../controllers/standingsController.js";

const router = express.Router();

router.get("/", StandingsController.getAll);
router.post("/", StandingsController.create);
router.put("/:id", StandingsController.update);
router.delete("/:id", StandingsController.remove);

export default router;