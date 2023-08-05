const mongoose = require("mongoose")
const InternshipExperience = require("../models/InternshipExperience")
const InternshipInfo = require("../models/InternshipInfo")

exports.getAllInternshipsExp = async (req, res) => {

    try {

        // const { Newest, AlphabeticAsc, AlphabeticDesc } = req.body;

        // console.log( "getinternship req ki body ", req.body)
        

        let allInternshipsExperience;
        let Newest,AlphabeticAsc,AlphabeticDesc,Oldest

        // console.log("req.body",req.body.selectOption)

        if(req.body.selectOption=="Newest"){
            Newest="Newest"
        }
        else if(req.body.selectOption=="AlphabeticAsc"){
            AlphabeticAsc="AlphabeticAsc"
        }
        else if(req.body.selectOption=="AlphabeticDesc"){
            AlphabeticDesc="AlphabeticDesc"
        }
        else Oldest="Oldest"
        

        // console.log(Newest,AlphabeticAsc,AlphabeticDesc,Oldest)

        if (Oldest==="Oldest") {
            allInternshipsExperience = await InternshipExperience.find(
                {},
                {
                    email: true,
                    companyName: true,
                    Experience: true
                }
            ).sort({ createdDate: 1 });
        }
        else if ( Newest==="Newest") {
            allInternshipsExperience = await InternshipExperience.find(
                {},
                {
                    email: true,
                    companyName: true,
                    Experience: true
                }
            ).sort({ createdDate: -1 });
        }
        else if (AlphabeticAsc==="AlphabeticAsc") {
            allInternshipsExperience = await InternshipExperience.find(
                {},
                {
                    email: true,
                    companyName: true,
                    Experience: true
                }
            ).sort({ companyName: 1 });
        }
        else {
            allInternshipsExperience = await InternshipExperience.find(
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
            message: "All internship exp detailed got",
            allInternshipsExperience
        })

    }
    catch (error) {
        console.log(error.message)
        return res.status(500).json({
            message: "Error while Getting internship Experience",
            success: false,

        })
    }
}
exports.addInternshipExperience=async(req,res)=>{
           
    try {
        const { email, companyName, Experience } = req.body;
      
        if (!email || !companyName || !Experience) {
          return res.status(400).json({
            message: "All fields are required",
            success: false
          });
        }
      
        const newInternshipExp = new InternshipExperience({
          email,
          companyName,
          Experience
        });
      
        await newInternshipExp.save(); // Save the new instance to the database
      
        return res.status(200).json({
          success: true,
          message: "New internship experience added",
        //   newInternshipExp
        });
      } catch (error) {
        console.log(error.message);
        return res.status(500).json({
          message: "Error while adding internship experience",
          success: false
        });
      }      
}
exports.addInternshipInformation = async (req, res) => {
    try {
      const { email, Information,title } = req.body;
  
      if (!email || !Information) {
        return res.status(400).json({
          message: "All fields are required",
          success: false,
        });
      }
  
      const newInternshipInfo = new InternshipInfo({
        email,
        Information,
        title
      });
  
      await newInternshipInfo.save(); // Save the new InternshipInfo instance
  
      return res.status(200).json({
        success: true,
        message: "New internship information added",
        newInternshipInfo,
      });
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({
        message: "Error while adding internship information",
        success: false,
      });
    }
  };
  
exports.getInternshipsInfo = async (req, res) => {

    try {

        const { Newest } = req.body;

        let allInternshipsInformation

        if (!Newest) {


            allInternshipsInformation=  await InternshipInfo.find(
                {},
                {
                    email: true,
                    Information: true
                }
            ).sort({ createdDate: 1 });
        }
        else {
            allInternshipsInformation=  await InternshipInfo.find(
                {},
                {
                    email: true,
                    Information: true
                }
            ).sort({ createdDate: -1 });

        }

        res.status(200).json({
            success: true,
            message: "All internship info detailed got",
            allInternshipsInformation
        })

    }
    catch (error) {
        console.log(error.message)
        return res.status(500).json({
            message: "Error while Getting internship info",
            success: false,

        })
    }

}

exports.getMyInternshipExperience=async (req,res)=>{
     try{
        const {email}=req.body;

       if(!email){
        return res.status(400).json({
            message:"Email Required For getting Internship Exp",
            success:false,
        })
       }
     
       const myInternshipExp=await InternshipExperience.find(
        {email:email}
       )

       return res.status(200).json({
        message:"succesfully Got my intern exp data",
        myInternshipExp,
        success:true,
       })
     }catch(err){
        return res.status(504).json({
            message:"failed to get data",
            success:true
        })
     }
}
exports.editMyInternshipExperience = async (req, res) => {
    try {
      const { email, id, companyName, Experience } = req.body;
  
      if (!email || !id || !companyName || !Experience) {
        return res.status(400).json({
          message: "Email, ID, Company Name, and Experience are required for updating Internship Exp",
          success: false,
        });
      }
  
      const myInternshipExp = await InternshipExperience.findById(id);
  
      if (!myInternshipExp) {
        return res.status(404).json({
          message: "Internship Experience not found",
          success: false,
        });
      }
  
      myInternshipExp.companyName = companyName;
      myInternshipExp.Experience = Experience;
  
      await myInternshipExp.save();
  
      return res.status(200).json({
        message: "Successfully updated my intern exp data",
        myInternshipExp,
        success: true,
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        message: "Failed to update data",
        success: false,
      });
    }
  };
  
  
exports.deleteMyInternshipExperience=async (req,res)=>{
     try{
        const {email,id}=req.body;

       if(!email || !id){
        return res.status(400).json({
            message:"Email Required For getting Internship Exp",
            success:false,
        })
       }
     
       const myInternshipExp=await InternshipExperience.findByIdAndDelete(
          id,
       )
     
       
    await myInternshipExp.save()
       return res.status(200).json({
        message:"succesfully delete my intern exp data",
        myInternshipExp,
        success:true,
       })
     }catch(err){
        return res.status(504).json({
            message:"failed to delete data",
            success:true
        })
     }
}
exports.getMyInternshipInformation=async (req,res)=>{
     try{
        const {email}=req.body;

       if(!email){
        return res.status(400).json({
            message:"Email Required For getting Internship info",
            success:false,
        })
       }
     
       const myInternshipInfo=await InternshipInfo.find(
        {email:email}
       )

       return res.status(200).json({
        message:"succesfully Got my intern info data",
        myInternshipInfo,
        success:true,
       })
     }catch(err){
        return res.status(504).json({
            message:"failed to get data",
            success:true
        })
     }
}
