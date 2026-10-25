import express from "express";
import { addLeaderboard } from "../../controllers/leaderboard/add_leaderboard.js";

const router = express.Router();

router.post("/addLeaderboard",addLeaderboard);

export default router;
