import React from 'react';
import image9 from '../../assets/images1.jpg';

export default function ProfessorSection() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
          <div className="lg:w-1/2">
            <p className="text-xl lg:text-2xl text-pink-500 font-bold mb-6">For Professors</p>
            <div className="mb-8">
              <p className="text-yellow-600 text-2xl lg:text-3xl font-bold mb-4">Pick Queries Aligned with Your Knowledge</p>
              <p className="text-lg lg:text-xl text-gray-700">
                Keep students informed about the latest internship opportunities, requirements, and application processes. Support the students by picking up queries.
              </p>
            </div>
            <div>
              <p className="text-yellow-700 text-2xl lg:text-3xl font-bold mb-4">Share Your Current Research Projects</p>
              <p className="text-lg lg:text-xl text-gray-700">
                Highlight your ongoing research projects. By showcasing your research initiatives, you can inspire students, attract potential collaborators, and contribute to the advancement of knowledge in your field.
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 mt-8 lg:mt-0 lg:ml-8">
            <img className="w-full rounded-lg shadow-lg" src={image9} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
