import mongoose from "mongoose";

const leaderboardSchema = new mongoose.Schema(
    {
        user: {
            type: String,
            required: true
        },
        level: {
            type: String,
            required: true
        },
        score: {
            type: Number,
            required: true,
            min: 0
        },
        timeMs: {
            type: Number, // Completion time in milliseconds
            required: true,
            min: 1
        },
        deaths: {
            type: Number,
            default: 0,
            min: 0
        },
        characterUsed: {
            type: String,
            default: "default_runner"
        }
    },
    { timestamps: true }
);

// Compound index for High Score Leaderboard (Highest score first, tie-broken by fastest time)
leaderboardSchema.index({ level: 1, score: -1, timeMs: 1 });

// Compound index for Speedrun Leaderboard (Fastest time first)
leaderboardSchema.index({ level: 1, timeMs: 1 });

// Unique constraint if you only want 1 best leaderboard entry per user per level:
leaderboardSchema.index({ user: 1, level: 1 }, { unique: true });

export default mongoose.model("Leaderboard", leaderboardSchema);
