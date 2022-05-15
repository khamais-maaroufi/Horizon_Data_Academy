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
  start_date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
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
  published: {
    type: String,
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
    type: Boolean,
    default: false,
  },
  instructor: {
    type: mongoose.ObjectId,
    ref: "User",
    required: true,
  },
  enrolled_list: [
    {
      type: mongoose.ObjectId,
      ref: "User",
    },
  ],
  PreEnrolled_list: [
    {
      type: mongoose.ObjectId,
      ref: "User",
    },
  ],
  lessons: [lessonSchema],
  timestamps: Date,
});

export default mongoose.model("Course", courseSchema);
