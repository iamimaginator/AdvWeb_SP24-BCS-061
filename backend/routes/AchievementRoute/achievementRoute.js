import express from "express";
import { addAchievement } from "../../controllers/achievement/add_achievement.js";

const router = express.Router();

router.post("/addAchievement",addAchievement);

export default router;