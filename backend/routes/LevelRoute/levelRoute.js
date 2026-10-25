import express from "express";
import { addLevel } from "../../controllers/level/add_level.js";

const router = express.Router();

router.post("/addLevel",addLevel);

export default router;
