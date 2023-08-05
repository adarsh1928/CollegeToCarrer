const mongoose=require("mongoose");
const Research = require("../models/Research");

exports.createResearchDetail=async(req,res)=>{
    try {
        const { email, researchDetail,title } = req.body;

        console.log(email,researchDetail,title)
    
        if (!email || !researchDetail) {
          return res.status(400).json({
            message: "All fields are required",
            success: false,
          });
        }
    
        const newResearchDetail = new Research({
          email,
          ResearchDetail: researchDetail,
          title
        });
    console.log("before saving",newResearchDetail)
        await newResearchDetail.save(); 
        console.log("after saving research detail")
    
        return res.status(200).json({
          success: true,
          message: "New researchDetail added",
          newResearchDetail,
        });
      } catch (error) {
        console.log(error.message);
        return res.status(500).json({
          message: "Error while adding  researchDetail",
          success: false,
        });
      }
}
exports.getMyResearchDetail=async (req,res)=>{
    try{
       const {email}=req.body;

      if(!email){
       return res.status(400).json({
           message:"Email Required For getting reserach Exp",
           success:false,
       })
      }
    
      const myreserach=await Research.find(
       {email:email}
      )

      return res.status(200).json({
       message:"succesfully Got my research data",
       myreserach,
       success:true,
      })
    }catch(err){
       return res.status(504).json({
           message:"failed to get data",
           success:true
       })
    }
}
exports.getAllResearch = async (req, res) => {

    try {

        const { Newest } = req.body;

        let allresearchDetail

        if (!Newest) {


            allresearchDetail=  await Research.find(
                {},
                {
                    email: true,
                    researchDetail: true
                }
            ).sort({ createdDate: 1 });
        }
        else {
            allresearchDetail=  await Research.find(
                {},
                {
                    email: true,
                    researchDetail: true
                }
            ).sort({ createdDate: -1 });

        }

        res.status(200).json({
            success: true,
            message: "All Research info detailed got",
            allresearchDetail
        })

    }
    catch (error) {
        console.log(error.message)
        return res.status(500).json({
            message: "Error while Getting Research info",
            success: false,

        })
    }

}
