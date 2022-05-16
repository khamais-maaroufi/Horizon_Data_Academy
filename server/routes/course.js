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
  courses,
  checkEnrollment,
  EnrollFree,
  EnrollPaid,
  FetchUserCourses,
  AdminRead,
  AdminCourseRead,
  AdminValidate,
} from "../controllers/course";

//enroll

router.post("/free-enrollment/:courseId", requireSignin, EnrollFree);
router.post("/paid-enrollment/:courseId", requireSignin, EnrollPaid);

//check user's enrollment

router.get("/check-enrollment/:courseId", requireSignin, checkEnrollment);

//publishing the courses on the frontpage
router.get("/courses", courses);

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

// fetch all user courses
router.get("/user-courses", requireSignin, FetchUserCourses);

//admin fetching all the courses
router.get("/Admin-courses", requireSignin, AdminRead);
router.get("/Admin-course/:slug", requireSignin, AdminCourseRead);
router.put("/Admin-course/:slug/:studentId", requireSignin, AdminValidate);

module.exports = router;
