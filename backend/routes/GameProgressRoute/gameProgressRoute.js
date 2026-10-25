import express from "express";
import { addGameProgress } from "../../controllers/gameProgress/add_gameProgess.js";

const router = express.Router();

router.post("/addGameProgress",addGameProgress);

export default router;
