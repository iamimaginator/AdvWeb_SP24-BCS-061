import express from "express";
import { addPlayerProfile } from "../../controllers/playerPofile/add_playerProfile.js";

const router = express.Router();

router.post("/addPlayerProfile",addPlayerProfile);

export default router;
