import mongoose from "mongoose";
import { stringify } from "querystring";
const { Schema } = mongoose;

const ROLE = ["Subscriber","instructor", "Admin"];

const userSchema = new Schema ({
    name: {
        type: String,
        trim: true,
        required: true,
    },

    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
        min:6,
        max:64,
    },
    picture: {
        type: String,
        default: "/avatar.png",
    },
    CIN: {
        type: Number,
        
    },
    role: {
        type: String,
        default: "Subscriber",
        enum: ROLE,
    },
    timestamps: Date,
});

export default mongoose.model("User", userSchema);