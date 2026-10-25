import mongoose from "mongoose";

const shopItemSchema = new mongoose.Schema(
    {
        itemCode: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        name: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        priceCoins: {
            type: Number,
            required: true,
            min: 0
        },
        spriteSheetUrl: {
            type: String,
            required: true
        },
        speedMultiplier: {
            type: Number,
            default: 1.0
        },
        extraJumps: {
            type: Number,
            default: 0
        },
        isAvailable: {
            type: Boolean,
            default: true
        }
    },
    { timestamps: true }
);

export default mongoose.model("ShopItem", shopItemSchema);
