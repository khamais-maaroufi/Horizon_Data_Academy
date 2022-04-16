import User from "../models/user";

import {hashPassword, comparePassword} from "../utils/auth";

import jwt from 'jsonwebtoken';
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react-dom";

export const register = async (req, res) => {
  try {
        //console.log(req.body);
        const {name, email, password, CIN} = req.body;

        //validation
        if (!name) return res.status(400).send("The name is required");
        if (!CIN) return res.status(400).send("The CIN is required");
        if (!password || password.length < 6) {
            return res.status(400)
            .send("password is required and should be min 6 characters long");
        }
        let userExist = await User.findOne({email}).exec();
        let CINExist = await User.findOne({CIN}).exec();
        if (userExist) return res.status(400).send("Email is already existing!");
        if (CINExist) return res.status(400).send("CIN is already existing!");
        //hash password
        const hashedPassword = await hashPassword(password);
        
        // register
        const user = new User ({
            name,
            email,
            password: hashedPassword,
            CIN,
        });
        await user.save();
        console.log(" user saved succesfully");
        return res.json({ok: true});


  } catch(err){
        console.log(err);
        return res.status(400).send("error try agin!");
  }
};

export const login = async (req, res) => {
  try{
    //console.log(req.body);
    const {email,password} = req.body;

    //check if the email iis existing in the data base
    const user = await User.findOne({email}).exec();
    if (!user) return res.status(400).send("email is not found! try enter again.");
    //check if the hashed password is existing in the data base
    const match = await comparePassword(password, user.password);
    if (match === false) return res.status(400).send("password is wrong! try enter again.");
    //created signed jwt
    const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET,{
      expiresIn: "7d",
    });
    //return user and token to client, exclude hashed password
    user.password = undefined;
    //send token in cookies
    res.cookie("token", token, {
      httpOnly: true,
      //secure: true,//only works on https

    });

    //send user as json response
    res.json(user);

  }catch(err){
    console.log(err);
    return res.status(400).send("Error! sorry you can Try again.");
  }
};

export const  logout = async (req, res) => {
  try {
    res.clearCookie('token');
    return res.json({message: "signeout success"});
  }catch(err){
    console.log(err);
  }
};

export const currentUser = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password").exec();
    console.log("CURRENT_USER", user);
    return res.json({ok: true});
  }catch(err){
    console.log(err);
  }
};

export const currentAdmin = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).exec();
    console.log("CURRENT_USER", user);
    if(user.role.includes('Admin'))
    {return res.json({ok: true});}
    else{
      res.status(404);
    }
  }catch(err){
    console.log(err);
  }
};

