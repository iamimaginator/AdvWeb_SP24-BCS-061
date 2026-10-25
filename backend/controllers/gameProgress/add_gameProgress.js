import GameProgress from "../../models/gameProgress.js";


export const addGameProgress = async (req, res) =>{
    try{
        console.log("Inside addGameProgress");
        const user = req.body.user;
        const level = req.body.level;
        const isUnlocked = req.body.isUnlocked;
        const isCompleted = req.body.isCompleted;
        const bestTimeMs = req.body.bestTimeMs;
        const highScore = req.body.highScore;
        const starsEarned = req.body.starsEarned;
        const coinsCollected = req.body.coinsCollected;
        const attempts = req.body.attempts;
        const deaths = req.body.deaths;
        const checkpointId = req.body.checkpointId;
        const checkpointX = req.body.checkpointX;
        const checkpointY = req.body.checkpointY;


        let progressExist = await GameProgress.findOne({
            user : user,
            level : level
        });

        if(progressExist){
            return res.status(400).json({
                message : "Game Progress Already Exists"
            });
        }


        let gameProgress_created = await GameProgress.create({
            user : user,
            level : level,
            isUnlocked : isUnlocked,
            isCompleted : isCompleted,
            bestTimeMs : bestTimeMs,
            highScore : highScore,
            starsEarned : starsEarned,
            coinsCollected : coinsCollected,
            attempts : attempts,
            deaths : deaths,
            checkpointId : checkpointId,
            checkpointX : checkpointX,
            checkpointY : checkpointY
        });

        res.status(200).json({
            message : "Game Progress Created Successfully"
        });


    }
    catch(error){
        console.log(JSON.stringify(error));

        res.status(500).json({
            message : "Something Went Wrong, Please Contact Support"
        });
    }
}
