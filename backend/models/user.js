import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            minlength: 2,
            maxlength: 50
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"]
        },
        password: {
            type: String,
            required: true,
            minlength: 6,
            select: false // Prevents password hash from leaking in standard queries
        },
        role: {
            type: String,
            default: "player"
        },
        isActive: {
            type: Boolean,
            default: true
        }
    },
    { timestamps: true }
);

export default mongoose.model("User", userSchema);
