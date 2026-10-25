import Achievement from "../../models/achievement.js";


export const addAchievement = async (req, res) =>{
    try{
 console.log("Inside addAchievement");
        const code = req.body.code;
        const title = req.body.title;
        const description = req.body.description;
        const iconUrl = req.body.iconUrl;
        const conditionType = req.body.conditionType;
        const thresholdValue = req.body.thresholdValue;
        const rewardCoins = req.body.rewardCoins;



        let codeExist = await Achievement.findOne({
            code : code
        });

        if(codeExist){
            return res.status(400).json({
            message : "Achievement Already Exists"
        });

        }
        // else{
        //     console.log("User Doesnot exist");
        // }
        

     let achievement_created =   await Achievement.create({
            code : code,
            title : title,
            description : description,
            iconUrl : iconUrl,
            conditionType : conditionType,
            thresholdValue : thresholdValue,
            rewardCoins : rewardCoins
        });

        res.status(200).json({
            message : "Achievement Created Successfully"
        });


    }
    catch(error){
        console.log(JSON.stringify(error));

        res.status(500).json({
            message : "Something Went Wrong, Please Contact Support"
        });
    }
}







// import Achievement from "../../models/achievement.js";

// export const addAchievement = async (req, res) => {
//     try {
//         const {
//             code,
//             title,
//             description,
//             iconUrl,
//             conditionType,
//             thresholdValue,
//             rewardCoins
//         } = req.body;

//         const existingAchievement = await Achievement.findOne({ code: code?.toUpperCase() });
//         if (existingAchievement) {
//             return res.status(400).json({
//                 message: "Achievement with this code already exists"
//             });
//         }

//         const newAchievement = await Achievement.create({
//             code,
//             title,
//             description,
//             iconUrl,
//             conditionType,
//             thresholdValue,
//             rewardCoins
//         });

//         res.status(201).json({
//             message: "Achievement Created Successfully",
//             data: newAchievement
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({
//             message: "Something Went Wrong, Please Contact Support",
//             error: error.message
//         });
//     }
// };
