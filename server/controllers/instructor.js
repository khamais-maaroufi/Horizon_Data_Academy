import User from "../models/user";

export const currentInstructor = async (req, res) => {
    try{
        let user = await User.findById(req.user._id).select('-password').exec();
        if (!user.role.includes('instructor')){
            res.status(403);
        }else {
            res.json({ok:true});
        }
    }catch(err){
        console.log(err);
    };
};

export const makeInstructor = async (req, res) => {
    const {password} = req.body;
    console.log(req.body);
    try {
        const user = await User.findById(req.user._id).exec();
if (password !== process.env.INSTRUCTOR_TOKEN){res.send("y")}
else {
        user.role = "instructor";
        user.save();
        res.send(user);
    }
    }catch(err){
        console.log("make instructor error", err);
    }
};