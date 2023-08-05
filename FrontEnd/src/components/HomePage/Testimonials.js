import React from 'react';

const testimonialsData = [
  {
    text: "I am truly grateful for the guidance provided by the professors on this platform. Their expertise and support have been instrumental in shaping my academic and professional journey.",
    author: "Adarsh patel"
  },
  {
    text: "The professors on this platform have helped me gain valuable insights and practical knowledge. I highly recommend their mentorship to any student seeking academic and career guidance.",
    author: "Ashvin Kumhar"
  },
  {
    text: "The support I received from the professors exceeded my expectations. They went above and beyond to ensure my success. I am truly thankful for their dedication and commitment.",
    author: "Harshal Mistry"
  }
];

const Testimonials = () => {
    return (
      <div className="bg-richblue-100 py-16 relative z-[2]">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl lg:text-5xl text-yellow-500 font-bold text-center mb-8">
            What Our Users Say
          </h2>
          <div className="flex flex-wrap justify-center">
            {testimonialsData.map((testimonial, index) => (
              <div
                key={index}
                className="bg-richblue-200 rounded-lg shadow-lg w-full sm:w-80 lg:w-96 p-6 mx-4 my-6 transition-transform transform hover:-translate-y-2 hover:bg-richblue-25"
              >
                <p className="text-lg font-bold text-richblack-800 mb-4">{testimonial.text}</p>
                <p className="text-base text-pink-900 font-bold">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

export default Testimonials;
