import User from "../../models/user.js";
import bcrypt from "bcryptjs";


export const addUser = async (req, res) =>{
    try{
        console.log("Inside addUser");
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;
        const role = req.body.role;
        const isActive = req.body.isActive;


        let userExist = await User.findOne({
            email : email
        });

        if(userExist){
            return res.status(400).json({
                message : "User Already Exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        let user_created = await User.create({
            name : name,
            email : email,
            password : hashedPassword,
            role : role,
            isActive : isActive
        });

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
