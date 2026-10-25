import mongoose from "mongoose";

const playerProfileSchema = new mongoose.Schema(
    {
        user: {
            type: String,
            required: true,
            unique: true
        },
        displayName: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            minlength: 3,
            maxlength: 24
        },
        avatar: {
            type: String,
            default: "default_avatar.png"
        },
        equippedSkin: {
            type: String,
            default: "default_runner"
        },
        coins: {
            type: Number,
            default: 0,
            min: 0
        },
        totalScore: {
            type: Number,
            default: 0,
            min: 0
        },
        totalDeaths: {
            type: Number,
            default: 0,
            min: 0
        },
        totalEnemiesDefeated: {
            type: Number,
            default: 0,
            min: 0
        },
        totalPlayTimeSeconds: {
            type: Number,
            default: 0,
            min: 0
        },
        unlockedItems: {
            type: [String], // List of ShopItem itemCodes
            default: []
        },
        unlockedAchievements: {
            type: [String], // List of Achievement codes
            default: []
        }
    },
    { timestamps: true }
);

export default mongoose.model("PlayerProfile", playerProfileSchema);
