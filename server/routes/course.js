import express from "express";

const router = express.Router();

//middleware
import { isInstructor, requireSignin } from "../middlewares";

//controllers
import {
  uploadImage,
  create,
  read,
  addLesson,
  update,
  DeleteLesson,
  publish,
  unpublish,
} from "../controllers/course";

// image
router.post("/course/upload-image", requireSignin, uploadImage);

//course
router.post("/course", requireSignin, isInstructor, create);

//course view
router.get("/course/:slug", read);

// publishing courses
router.put("/course/publish/:courseId", requireSignin, publish);
router.put("/course/unpublish/:courseId", requireSignin, unpublish);

//add lesson
router.post("/course/lesson/:slug/:instructorId", requireSignin, addLesson);

//update course
router.put("/course/:slug", requireSignin, update);
router.put("/course/:slug/:lessonId", requireSignin, DeleteLesson);

module.exports = router;
