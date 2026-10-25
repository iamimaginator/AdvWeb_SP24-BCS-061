import mongoose from "mongoose";

const achievementSchema = new mongoose.Schema(
    {
        code: {
            type: String,
            required: true,
            unique: true,
            uppercase: true,
            trim: true
        },
        title: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            required: true
        },
        iconUrl: {
            type: String,
            default: "default_badge.png"
        },
        conditionType: {
            type: String,
            required: true
        },
        thresholdValue: {
            type: Number,
            required: true
        },
        rewardCoins: {
            type: Number,
            default: 50,
            min: 0
        }
    },
    { timestamps: true }
);

export default mongoose.model("Achievement", achievementSchema); 