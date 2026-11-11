import user from "../models/user.js";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signupUser = async (req, res) =>{
    try{

        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;

        let userExist = await user.findOne({
            email : email
        });
        console.log('Outside userExist');

        if(userExist){
            console.log("User already exists");
            return res.status(400).json({
                message : "User Already Exists"
            });
        }
        // else{
        //     console.log("User Doesnot exist");
        // }
        

        const hashedpassword = await bcrypt.hash(password, 10);

        await user.create({
            name : name,
            email : email,
            password : hashedpassword
        })

        res.status(200).json({
            message : "User Created Successfully"
        });


    }
    catch(error){
        console.log(JSON.stringify(error));

        res.status(500).json({
            message : "Something Went Wrong, Please Contact Support"
        });
    }
}

export const loginUser = async (req, res) =>{
    try{

        const email = req.body.email;
        const password = req.body.password;

        // password has select:false in the model, so we ask for it here
        let userFound = await user.findOne({
            email : email
        }).select("+password");

        if(!userFound){
            return res.status(401).json({
                message : "Invalid Email or Password"
            });
        }

        const isMatch = await bcrypt.compare(password, userFound.password);

        if(!isMatch){
            return res.status(401).json({
                message : "Invalid Email or Password"
            });
        }

        const token = jwt.sign(
            { id : userFound._id },
            process.env.JWT_SECRET,
            { expiresIn : "1d" }
        );

        res.status(200).json({
            message : "Login Successful",
            token : token,
            name : userFound.name
        });

    }
    catch(error){
        console.log(JSON.stringify(error));

        res.status(500).json({
            message : "Something Went Wrong, Please Contact Support"
        });
    }
}
