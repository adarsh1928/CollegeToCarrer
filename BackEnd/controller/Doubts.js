const mongoose = require("mongoose");
const Doubt = require("../models/Doubts");

exports.createDoubt = async (req, res) => {
  try {
    const { email, Title, message } = req.body;

    if (!email || !Title || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const newDoubt = await Doubt.create({
      email,
      Title,
      message,
    });

    return res.status(200).json({
      success: true,
      data: newDoubt,
      message: "Doubt created successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Failed to create doubt",
      error: error.message,
    });
  }
};

exports.getqueriesInfo = async (req, res) => {

  try {
    // console.log("req body",req.body)
      const { Newest } = req.body;

      let allqueriesInformation

      if (!Newest) {


          allqueriesInformation=  await Doubt.find(
              {},
              {
                  email: true,
                  Title:true,
                  message: true
              }
          ).sort({ createdDate: 1 });
      }
      else {
          allqueriesInformation=  await Doubt.find(
              {},
              {
                  email: true,
                  Title,
                  message: true,
              }
          ).sort({ createdDate: -1 });
      }
// console.log("all queries info",allqueriesInformation)
      res.status(200).json({
          success: true,
          message: "All queries info detailed got",
          allqueriesInformation
      })

  }
  catch (error) {
      console.log(error.message)
      return res.status(500).json({
          message: "Error while Getting queries info",
          success: false,

      })
  }

}

exports.getMyQueries=async (req,res)=>{
  try{
     const {email}=req.body;

    if(!email){
     return res.status(400).json({
         message:"Email Required For getting queries Exp",
         success:false,
     })
    }
  
    const myqueriesExp=await Doubt.find(
     {email:email}
    )

    return res.status(200).json({
     message:"succesfully Got my query exp data",
     myqueriesExp,
     success:true,
    })
  }catch(err){
     return res.status(504).json({
         message:"failed to get data",
         success:true
     })
  }
}

