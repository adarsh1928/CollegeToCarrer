import React, { useState } from 'react'
import { useSelector } from 'react-redux';
// import { apiConnector } from '../services/ApiConnector';
import { useDispatch } from 'react-redux';
import { apiConnector } from '../services/ApiConnector';
import { endpoints } from '../services/APIs';
// import { endpoints } from '../services/APIs';
import axios from "axios"
// import { Toaster } from 'react-hot-toast';
// import { addQuery } from '../services/authAPI';

// https://script.google.com/a/macros/sot.pdpu.ac.in/s/AKfycbztSGKVlZlVb91aA4gNn7D4R44_tTgj_0IcjY5szf1tLG4VbmXmoAgeXbyeEbMtZ5TR/exec

//AKfycbztSGKVlZlVb91aA4gNn7D4R44_tTgj_0IcjY5szf1tLG4VbmXmoAgeXbyeEbMtZ5TR
//https://docs.google.com/spreadsheets/d/1BaMkDpPrkyQlWu3Cne_7-A6iZ_lPfsNd84jbgXl78tI/edit#gid=0
const styles = {
  formContainer: {
    //   maxWidth: '400px',

    margin: '0 auto',
    padding: '20px',

    border: '1px solid #ccc',
    borderRadius: '5px',
    // backgroundColor: '#',
    marginTop: "1px",

    width: "70%",


  },
  heading: {
    marginBottom: '20px',
    fontWeight: "bold",
    textAlign: 'center',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    color: "white",
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '8px',
    border: '3px solid grey',
    borderRadius: '4px',
    backgroundColor: "lightblue"
  },
  textarea: {
    width: '100%',
    padding: '8px',
    border: '3px solid grey',
    borderRadius: '4px',
    backgroundColor: "lightblue"
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#4caf50',
    color: 'black',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    // textAlign:"center"

  },
};



export default function ContactUsForm() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.profile);

  const [formData, setFormData] = useState({
    title: "",
    contactNo: "",
    message: "",
  });

  const email = user.email;
  const { title, message, contactNo } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = async (e) => {
   
    try {
      console.log('submit button pressed');
  
      // Update the Google Apps Script URL with your actual script ID
      const scriptUrl = ` https://script.google.com/a/macros/sot.pdpu.ac.in/s/AKfycbztSGKVlZlVb91aA4gNn7D4R44_tTgj_0IcjY5szf1tLG4VbmXmoAgeXbyeEbMtZ5TR/exec`;
  
     
      const response = await apiConnector('POST', scriptUrl, formData);

      console.log('success', response);
  
      const result = await response.json();
      console.log('success', result);
    } catch (err) {
      console.log(err);
    }  };

  return (
    <>

      <div className='bg-richblack-800 text-richblack-900' style={styles.formContainer}>

        <form >
          <div style={styles.formGroup}>
            <label style={styles.label}>Email:</label>
            <input defaultValue={email} name="email" type="email" style={styles.input} />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Title:</label>
            <input type="text" name="title" onChange={handleOnChange} value={title} className='bg-richblack-5' style={styles.input} />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Contact No:</label>
            <input type="text" name="contactNo" onChange={handleOnChange} value={contactNo} className='bg-richblack-5' style={styles.input} />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Message:</label>
            <textarea type="text" name="message" onChange={handleOnChange} value={message} className='bg-richblack-5' style={styles.textarea} />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button type="submit" onClick={handleFormSubmit} style={styles.button}>Submit</button>
          </div>
        </form>
      </div>

    </>
  );
}
