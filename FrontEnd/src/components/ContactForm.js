import React from "react";
import ContactUsForm from "./ContactUsForm";

const ContactForm = () => {
  return (
    <div className="border h-[100%]  border-richblack-800 text-richblack-50 rounded-xl p-7 lg:p-4 flex gap-3 flex-col">
     <p style={{ marginBottom: '5px',justifyContent:"center",textAlign:"center "  }}>
          For any inquiries or feedback, please don't hesitate to reach out to us. We are happy to hear from you and will respond as soon as possible.
        </p>
      <p style={{textAlign:"center"}} className="mt-1 text-2xl leading-10 font-semibold text-richblack-5">
       Connect With Us
      </p>

      <div className="mt-2">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactForm;