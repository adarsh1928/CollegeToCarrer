const mongoose=require("mongoose")
const placementExperience=require("../models/PlacementExp")
const PlacementInfo=require("../models/PlacementInfo")

exports.getAllPlacementsExp = async (req, res) => {


    try {

        const { isNew, isAscending, isDescending } = req.body;

        let allPlacementsExperience;

        if (!isNew && !isAscending && !isDescending) {
            allPlacementsExperience = await placementExperience.find(
                {},
                {
                    email: true,
                    companyName: true,
                    Experience: true
                }
            ).sort({ createdDate: 1 });
        }
        else if (isNew) {
            allPlacementsExperience = await placementExperience.find(
                {},
                {
                    email: true,
                    companyName: true,
                    Experience: true
                }
            ).sort({ createdDate: -1 });
        }
        else if (isAscending) {
            allPlacementsExperience = await placementExperience.find(
                {},
                {
                    email: true,
                    companyName: true,
                    Experience: true
                }
            ).sort({ companyName: 1 });
        }
        else {
            allPlacementsExperience = await placementExperience.find(
                {},
                {
                    email: true,
                    companyName: true,
                    Experience: true
                }
            ).sort({ companyName: -1 });

        }

        res.status(200).json({
            success: true,
            message: "All Placement exp detailed got",
            allPlacementsExperience
        })

    }
    catch (error) {
        console.log(error.message)
        return res.status(500).json({
            message: "Error while Getting Placement Experience",
            success: false,

        })
    }

}
exports.getPlacementsInfo = async (req, res) => {

    try {

        const { isNew } = req.body;

        let allPlacementsExperience

        if (!isNew) {


            allPlacementsExperience=  await PlacementInfo.find(
                {},
                {
                    email: true,
                    Information: true
                }
            ).sort({ createdDate: 1 });
        }
        else {
            allPlacementsExperience=  await PlacementInfo.find(
                {},
                {
                    email: true,
                    Information: true
                }
            ).sort({ createdDate: -1 });

        }

        res.status(200).json({
            success: true,
            message: "All Placement info detailed got",
            allPlacementsExperience
        })

    }
    catch (error) {
        console.log(error.message)
        return res.status(500).json({
            message: "Error while Getting Placement info",
            success: false,

        })
    }

}