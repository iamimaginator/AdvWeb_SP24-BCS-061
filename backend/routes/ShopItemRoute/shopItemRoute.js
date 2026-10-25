import express from "express";
import { addShopItem } from "../../controllers/shopItem/add_shopItem.js";

const router = express.Router();

router.post("/addShopItem",addShopItem);

export default router;
