import express from "express";

const router = express.Router();

//middleware
import { isInstructor, requireSignin } from "../middlewares";

//controllers
import { uploadImage, create, read, addLesson } from "../controllers/course";

// image
router.post("/course/upload-image", requireSignin, uploadImage);

//course
router.post("/course", requireSignin, isInstructor, create);

//course view
router.get("/course/:slug", read);

//add lesson

router.post("/course/lesson/:slug/:instructorId", requireSignin, addLesson);

module.exports = router;
