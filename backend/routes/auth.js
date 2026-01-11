import express from "express";
import bcrypt from "bcrypt.js";
import jwt from "jsonwebtoken";
import User from "../model/User.js";

const router = express.Router();

//Signup
router.post("/signup",async(req,res) => {
    const {name,email,password} = req.body;

    const hasedPassword = await bcrypt.hash(password,8);

    const user= await User.create({
        name,
        email, 
        password:hashedPassword
    });

    res.json({message:"Signup Successful"});

});

// Login
router.post("/login", async(req,res)=>{
    const{email,password}=req.body;

    const user= await User.findOne({email});
    if (!user) return res.status(400).json({message:"User not found"});

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({message:"Invalid credentials"});

    const token = jwt.sign(
        { id:user_id, role:user.role},
        "SECRETKEY",
        {expiresIn:"id"}
    );

    res.json({
        token,
        name:user.name,
        role:user.role
    });
});

export default router;