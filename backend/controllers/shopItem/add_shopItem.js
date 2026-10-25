import ShopItem from "../../models/shopItem.js";


export const addShopItem = async (req, res) =>{
    try{
        console.log("Inside addShopItem");
        const itemCode = req.body.itemCode;
        const name = req.body.name;
        const description = req.body.description;
        const category = req.body.category;
        const priceCoins = req.body.priceCoins;
        const spriteSheetUrl = req.body.spriteSheetUrl;
        const speedMultiplier = req.body.speedMultiplier;
        const extraJumps = req.body.extraJumps;
        const isAvailable = req.body.isAvailable;


        let itemExist = await ShopItem.findOne({
            itemCode : itemCode
        });

        if(itemExist){
            return res.status(400).json({
                message : "Shop Item Already Exists"
            });
        }


        let shopItem_created = await ShopItem.create({
            itemCode : itemCode,
            name : name,
            description : description,
            category : category,
            priceCoins : priceCoins,
            spriteSheetUrl : spriteSheetUrl,
            speedMultiplier : speedMultiplier,
            extraJumps : extraJumps,
            isAvailable : isAvailable
        });

        res.status(200).json({
            message : "Shop Item Created Successfully"
        });


    }
    catch(error){
        console.log(JSON.stringify(error));

        res.status(500).json({
            message : "Something Went Wrong, Please Contact Support"
        });
    }
}
