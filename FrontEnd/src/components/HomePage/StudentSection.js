import React from 'react';
import image9 from '../../assets/images9.png';

export default function StudentSection() {
  return (
    <>
      <div className="overflow-x-hidden">
        <div className="flex flex-col lg:flex-row mt-8">
          <div className='lg:w-11/12  mt-8 lg:mt-0 lg:ml-32 '>
          <img
            className="w-full h-128 lg:h-256 rounded-lg shadow-lg"
            src={image9}
            alt=""
          />
          </div>
          <div className="text-center mt-4 lg:mt-0 lg:ml-8 lg:mr-20">
            <div  className="text-2xl lg:text-3xl text-yellow-500 font-bold mt-4">
              Unlock Opportunities, Learn from Seniors, Share Experiences, and Connect with Professors
            </div>
            <div  className="mt-6 text-lg lg:text-xl text-richblack-900">
              Comprehensive internship and placement resources. Explore a vast database of opportunities, learn from the experiences of seniors who have gone before you.
            </div>
            <div className="mt-6 text-lg lg:text-xl text-InfoText">
              <p className="text-pink-600 font-bold">
                Have a question or query that needs answering?
              </p>
              No worries! Ask your query, irrespective of the specific faculty, and the most suitable Professor will address your concern. Benefit from a wide range of expertise and receive the best response.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
