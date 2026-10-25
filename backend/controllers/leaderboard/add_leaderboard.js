import Leaderboard from "../../models/leaderboard.js";


export const addLeaderboard = async (req, res) =>{
    try{
        console.log("Inside addLeaderboard");
        const user = req.body.user;
        const level = req.body.level;
        const score = req.body.score;
        const timeMs = req.body.timeMs;
        const deaths = req.body.deaths;
        const characterUsed = req.body.characterUsed;


        let entryExist = await Leaderboard.findOne({
            user : user,
            level : level
        });

        if(entryExist){
            return res.status(400).json({
                message : "Leaderboard Entry Already Exists"
            });
        }


        let leaderboard_created = await Leaderboard.create({
            user : user,
            level : level,
            score : score,
            timeMs : timeMs,
            deaths : deaths,
            characterUsed : characterUsed
        });

        res.status(200).json({
            message : "Leaderboard Entry Created Successfully"
        });


    }
    catch(error){
        console.log(JSON.stringify(error));

        res.status(500).json({
            message : "Something Went Wrong, Please Contact Support"
        });
    }
}
