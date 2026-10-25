import PlayerProfile from "../../models/playerProfile.js";


export const addPlayerProfile = async (req, res) =>{
    try{
        console.log("Inside addPlayerProfile");
        const user = req.body.user;
        const displayName = req.body.displayName;
        const avatar = req.body.avatar;
        const equippedSkin = req.body.equippedSkin;
        const coins = req.body.coins;
        const totalScore = req.body.totalScore;
        const totalDeaths = req.body.totalDeaths;
        const totalEnemiesDefeated = req.body.totalEnemiesDefeated;
        const totalPlayTimeSeconds = req.body.totalPlayTimeSeconds;
        const unlockedItems = req.body.unlockedItems;
        const unlockedAchievements = req.body.unlockedAchievements;


        let profileExist = await PlayerProfile.findOne({
            $or : [{ user : user }, { displayName : displayName }]
        });

        if(profileExist){
            return res.status(400).json({
                message : "Player Profile Already Exists"
            });
        }


        let playerProfile_created = await PlayerProfile.create({
            user : user,
            displayName : displayName,
            avatar : avatar,
            equippedSkin : equippedSkin,
            coins : coins,
            totalScore : totalScore,
            totalDeaths : totalDeaths,
            totalEnemiesDefeated : totalEnemiesDefeated,
            totalPlayTimeSeconds : totalPlayTimeSeconds,
            unlockedItems : unlockedItems,
            unlockedAchievements : unlockedAchievements
        });

        res.status(200).json({
            message : "Player Profile Created Successfully"
        });


    }
    catch(error){
        console.log(JSON.stringify(error));

        res.status(500).json({
            message : "Something Went Wrong, Please Contact Support"
        });
    }
}
