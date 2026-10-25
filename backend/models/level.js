import mongoose from "mongoose";

const levelSchema = new mongoose.Schema(
    {
        levelNumber: {
            type: Number,
            required: true,
            unique: true,
            min: 1
        },
        name: {
            type: String,
            required: true,
            trim: true
        },
        difficulty: {
            type: String,
            default: "easy"
        },
        parTimeMs: {
            type: Number, // Target time in milliseconds for speedrun bonus
            required: true,
            min: 1000
        },
        oneStarScore: {
            type: Number,
            default: 100
        },
        twoStarScore: {
            type: Number,
            default: 500
        },
        threeStarScore: {
            type: Number,
            default: 1000
        },
        maxCoins: {
            type: Number,
            default: 0,
            min: 0
        },
        mapConfigUrl: {
            type: String, // Path or URL to Tiled JSON / sprite map
            required: true
        },
        isPublished: {
            type: Boolean,
            default: true
        }
    },
    { timestamps: true }
);

export default mongoose.model("Level", levelSchema);
