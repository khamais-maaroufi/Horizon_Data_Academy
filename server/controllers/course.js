import Course from "../models/course";

import slugify from "slugify";
import course from "../models/course";

//upload image and remove  it

export const uploadImage = (req, res) =>  {
    console.log(req.body);
};




//create course

export const create = async(req, res) => {
    //console.log("CREATE COURSE");
    try{
        const alreadyExist = await Course.findOne({
            slug: slugify(req.body.name.toLowerCase()),
        });
        if(alreadyExist){
            return res.status(400).send("Title is already Taken! try another one.");
        };
        const course = await new Course({
            slug: slugify(req.body.name),
            instructor: req.user._id,
            ...req.body,
        }).save();
        res.json(course);
    }catch(err){
        console.log(err);
        return res.status(400).send("Sorry Failed to save your course! Try again");
    }

};