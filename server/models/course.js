import mongoose from "mongoose";

//const {ObjectId} = new mongoose.Schema;

const lessonSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 320,
        required: true,
    },
    slug: {
        type: String,
        lowercase: true,
    },
    content: {
        type: {},
        minlength: 200,
    },
    Starting:{
        type: Date,

    },
    timestamps: Date,
});

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 320,
        required: true,
    },
    slug: {
        type: String,
        lowercase: true,
    },
    description: {
        type: {},
        minlength: 200,
        required: true,
    },
    price: {
        type: Number,
    },
    image: {},
    category: String,
    published: {
        type: Boolean,
        default: false,

    },
    paid: {
        typ: Boolean,
        default: false,
    },
    instructor: {
        type: mongoose.ObjectId,
        ref:"User",
        required: true,
    },
    lessons: [lessonSchema],
    timestamps: Date,
});

export default mongoose.model("Course", courseSchema);