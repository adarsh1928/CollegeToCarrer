import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import HighlightText from '../components/HomePage/HighlightedText';
import CTAButton from '../components/HomePage/Button';
import StudentSection from '../components/HomePage/StudentSection';
import ProfessorSection from '../components/HomePage/ProfessorSection';
import Testimonials from '../components/HomePage/Testimonials';
import Footer from '../components/HomePage/Footer';
//react

const HomePage = () => {
  return (
    <>
      <div className="bg-richblue-25 min-h-screen overflow-x-hidden">
        <div className="text-richblack-600 text-center font-bold text-lg md:text-xl lg:text-2xl">
          <div className="mt-8 md:mt-16 lg:mt-20 text-richblack-900 text-2xl md:text-3xl lg:text-4xl">
            Welcome to <HighlightText text="CollegeToCareer" />,
          </div>
          We are Here For Make Your College to Career Journey and College Work Easier
        </div>
        <div className="flex flex-col md:flex-row mt-8 md:mt-12 lg:mt-16 justify-center items-center">
          <div className="font-bold text-grey-500 text-center text-lg md:text-xl lg:text-2xl mb-4 md:mb-0">
            Become a Part and
          </div>
          <div className="md:ml-2">
            <CTAButton active={true} linkto={'/login'}>
              Explore More
            </CTAButton>
          </div>

        </div>
        <StudentSection />
        <ProfessorSection />
        <Testimonials />
        <Footer/>
      </div>
    </>
  );
};

export default HomePage;
