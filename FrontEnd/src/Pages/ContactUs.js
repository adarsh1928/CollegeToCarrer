import React from "react"


import ContactDetails from "../components/ContactDetails"
import ContactForm from "../components/ContactForm"

const Contact = () => {
  return (
    <div className="bg-richblue-700 justify-center">
      <div className=" mx-auto mt-7 mb-10 flex w-[80%] max-w-maxContent  justify-center gap-10 text-white ">
        {/* Contact Details */}

        {/* Contact Form */}
        <div className="lg:w-[60%]">
          <ContactForm />
        </div>
      </div>

    </div>
  )
}

export default Contact