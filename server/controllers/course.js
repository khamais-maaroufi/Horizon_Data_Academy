import Course from "../models/course";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage, app } from "./firebase";
import slugify from "slugify";
import course from "../models/course";

//upload image and remove  it

export const uploadImage = (req, res) => {
  try {
    const { image } = req.body;
    if (!image) return res.status(400).send("no image");

    const base64data = new Buffer.from(
      image.replace(/^data:image\/\w+;base64,/, ""),
      "base64"
    );

    var uuidv1 = require("uuidv1");
    const newName = uuidv1() + "-" + "image1";
    const type = image.split(";")[0].split("/")[1];
    const img = base64data + "." + type;
    const sotrageRef = ref(storage, newName + "." + type);
    const uploadTask = uploadBytesResumable(sotrageRef, base64data);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          res.json(downloadURL);
        });
      }
    );
  } catch (err) {
    console.log(err);
  }
};

//create course

export const create = async (req, res) => {
  //console.log("CREATE COURSE");
  try {
    const alreadyExist = await Course.findOne({
      slug: slugify(req.body.name.toLowerCase()),
    });
    if (alreadyExist) {
      return res.status(400).send("Title is already Taken! try another one.");
    }
    const course = await new Course({
      slug: slugify(req.body.name),
      instructor: req.user._id,
      ...req.body,
    }).save();
    res.json(course);
  } catch (err) {
    console.log(err);
    return res.status(400).send("Sorry Failed to save your course! Try again");
  }
};

export const read = async (req, res) => {
  try {
    const course = await Course.findOne({ slug: req.params.slug })
      .populate("instructor", "_id name")
      .exec();
    res.json(course);
  } catch (err) {
    consolelog(err);
  }
};

//add lesson to data base

export const addLesson = async (req, res) => {
  try {
    const { slug, instructorId } = req.params;
    const { title, content, start_date, time } = req.body;
    if (req.user._id != instructorId) {
      return res.status(400).send("unauthorized");
    }
    const updated = await Course.findOneAndUpdate(
      { slug },
      {
        $push: {
          lessons: { title, content, start_date, time, slug: slugify(title) },
        },
      },
      { new: true }
    )
      .populate("instructor", "_id name")
      .exec();
    res.json(updated);
  } catch (err) {
    console.log(err);
    return res.status(400).send("add lesson failed!");
  }
};

export const update = async (req, res) => {
  try {
    const { slug } = req.params;
    const course = await Course.findOne({ slug }).exec();
    if (req.user._id != course.instructor) {
      return res.status(400).send("Unauthorized");
    }
    const updated = await Course.findOneAndUpdate({ slug }, req.body, {
      new: true,
    }).exec();
    res.json(updated);
  } catch (err) {
    console.log(err);
    res.status(400).send("update course failedd!");
  }
};

export const DeleteLesson = async (req, res) => {
  try {
    const { slug, lessonId } = req.params;
    const course = await Course.findOne({ slug }).exec();
    if (req.user._id != course.instructor) {
      return res.status(400).send("unauthorized");
    }
    const courseDeleted = await Course.findByIdAndDelete(course._id, {
      $pull: { lesson: { _id: lessonId } },
    }).exec();
    res.json({ ok: true });
  } catch (err) {
    console.log(err);
    res.status(400).send("failed to delete lesson");
  }
};
