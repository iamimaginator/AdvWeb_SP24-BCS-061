import user from "../models/user.js";

import bcrypt from "bcryptjs";

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