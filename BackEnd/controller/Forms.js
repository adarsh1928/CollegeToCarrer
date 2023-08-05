const mongoose = require("mongoose");
const FormSubmission = require("../models/FormSubmisson");
const Form = require("../models/Forms");

exports.createForms = async (req, res) => {
  try {
    const { title, email, accountType, semester, fields, submissions, expiresHours } = req.body;

    if (!email || !title || !expiresHours) {
      res.status(400).json({
        message: "All fields are required",
        success: false
      });
    }

    const newForms = new Form({
      title: title,
      email: email,
      fields: fields,
    });

    newForms.expireAt = new Date(Date.now() + (expiresHours * 60 * 60 * 1000));

    await newForms.save();

    console.log("new form added");
    return res.status(200).json({
      success: true,
      message: "New Form added",
      newForms,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
      success: false,
      message: "Error while adding new form",
    });
  }
};

exports.getFormDetails = async (req, res) => {

  try {


    const getFormDetails = await Form.find(
      {},
      {
        title: true,
        email: true,
        fields: true
      }
    )
    if (getFormDetails.length == 0) {
      return res.status(200).json({
        message: "No forms found",
        success: true
      })
    }

    return res.status(200).json({
      message: "Successfully Got the forms detail",
      success: true,
      getFormDetails
    })

  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: "Error while getting form detail ",
    })
  }

}

exports.fillForms = async (req, res) => {

  const { email, semester, formId, choices } = req.body;

  if (!email) {
    res.status(400).json({
      message: "all field required",
      success: false
    })
  }

  const newFillForms = new FormSubmission({
    email: email,
    semester: semester,
    Form: formId,
    selectedOptions: choices
  });
  
  try {
    const savedFillForm = await newFillForms.save();
  
    res.status(200).json({
      success: true,
      message: "Form filled successfully",
      newFillForms: savedFillForm,
    });
  } catch (err) {
    // console.error("Error while filling the form:", err);
    return res.status(500).json({
      success: false,
      message: "Error while filling the form",
    });
  }
}  