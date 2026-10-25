import Level from "../../models/level.js";


export const addLevel = async (req, res) =>{
    try{
        console.log("Inside addLevel");
        const levelNumber = req.body.levelNumber;
        const name = req.body.name;
        const difficulty = req.body.difficulty;
        const parTimeMs = req.body.parTimeMs;
        const oneStarScore = req.body.oneStarScore;
        const twoStarScore = req.body.twoStarScore;
        const threeStarScore = req.body.threeStarScore;
        const maxCoins = req.body.maxCoins;
        const mapConfigUrl = req.body.mapConfigUrl;
        const isPublished = req.body.isPublished;


        let levelExist = await Level.findOne({
            levelNumber : levelNumber
        });

        if(levelExist){
            return res.status(400).json({
                message : "Level Already Exists"
            });
        }


        let level_created = await Level.create({
            levelNumber : levelNumber,
            name : name,
            difficulty : difficulty,
            parTimeMs : parTimeMs,
            oneStarScore : oneStarScore,
            twoStarScore : twoStarScore,
            threeStarScore : threeStarScore,
            maxCoins : maxCoins,
            mapConfigUrl : mapConfigUrl,
            isPublished : isPublished
        });

        res.status(200).json({
            message : "Level Created Successfully"
        });


    }
    catch(error){
        console.log(JSON.stringify(error));

        res.status(500).json({
            message : "Something Went Wrong, Please Contact Support"
        });
    }
}
