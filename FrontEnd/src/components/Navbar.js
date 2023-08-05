import React, { useEffect, useRef, useState } from 'react';
import { Link, matchPath } from 'react-router-dom';
import { NavbarLinksForProfessors, NavbarLinksForStudents } from "../data/NavbarLinks";
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { apiConnector } from '../services/ApiConnector';
import { endpoints } from '../services/APIs';
import ProfileDropdown from '../components/ProfileDropDown';
import useOnClickOutside from './UseOnClickOutside';
import { AiOutlineCaretDown } from 'react-icons/ai';

const subLinksOfInternship = [
  {
    title: "Experiences",
    link: "/internship/experience"
  },
  {
    title: "Informations",
    link: "/internship/informations"
  },
];
const subLinksOfPlacement = [
  {
    title: "Experiences",
    link: "/placement/experience"
  },
  {
    title: "Informations",
    link: "/placement/informations"
  },
];

const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  const location = useLocation();
  const [isinternshipDropDown, setinternshipDropDown] = useState(false)
  const ref = useRef(null)


  const { user } = useSelector((state) => state.profile);
  let accountType = null;

  if (token !== null) {
    accountType = user.accountType;
  }

  // console.log("USSER",user.accountType)
  // const accountType = user.accountType===null?null:accountType

  console.log("account Type", accountType)

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };
  const renderInternshipDropdown = () => (
    <div className='relative flex items-center gap-2 group'>
      <button className='relative' onClick={() => setinternshipDropDown(true)}>
        <div className='flex items-center gap-x-1'>
          <p>Internship</p>
          <AiOutlineCaretDown className='text-sm text-richblack-100' />
        </div>
      </button>
      {isinternshipDropDown && (
        <div
          onClick={(e) => e.stopPropagation()}
          className='absolute top-full right-0 z-[1000] w-45 bg-white rounded-md shadow-md mt-2'
          ref={ref}
        >
          {subLinksOfInternship.map((data, index) => (
            <Link
              to={data.link}
              onClick={() => setinternshipDropDown(false)}
              className='block px-10 py-2 text-richblack-500 hover:bg-gray-100 transition-colors duration-200'
              key={index}
            >
              <p>{data.title}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  useOnClickOutside(ref, () => setinternshipDropDown(false))

  useEffect(() => {
    const fetchSublinks = async () => {
      try {
        const response = await apiConnector('POST', endpoints.GET_INTERNSHIP_EXP);
        // console.log("Printing Sublinks result:", response);
        // Process the sublinks response and update the state accordingly
      } catch (error) {
        // console.log('Could not fetch the sublinks');
      }
    };

    fetchSublinks();
  }, []);

  return (
    <div className='relative z-50 top-0 flex h-14 items-center justify-center border-b border-richblack-700'>
      <div className='fixed flex w-full max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8'>

        <nav>
          <ul className='flex gap-x-6 text-richblack-800'>
            {(accountType === 'Student' || accountType === null
              ? NavbarLinksForStudents
              : NavbarLinksForProfessors
            ).map((link, index) => (
              <li key={index}>
                {link.title === "Internship" ? (
                  renderInternshipDropdown()
                ) : (
                  <Link to={link?.path}>
                    <p className={`${matchRoute(link?.path) ? 'text-yellow-400' : 'text-richblack-800'}`}>
                      {link.title}
                    </p>
                  </Link>
                )}
              </li>
            ))}
            {/* {accountType === "Instructor" && NavbarLinksForProfessors.map((link, index) => (
              <li key={index}>
                {link.title === "Internship" ? (
                  renderInternshipDropdown()
                ) : (
                  <Link to={link?.path}>
                    <p className={`${matchRoute(link?.path) ? 'text-yellow-400' : 'text-richblack-800'}`}>
                      {link.title}
                    </p>
                  </Link>
                )}
              </li>
            ))} */}
          </ul>
        </nav>

        {/* Login/SignUp/Dashboard */}
        <div className='flex gap-x-4 items-center'>
          {!token && (
            <>
              <Link to="/login">
                <button className='border border-richblack-700 bg-richblack-800 px-3 py-2 text-richblack-100 rounded-md'>
                  Log in
                </button>
              </Link>
              <Link to="/signup">
                <button className='border border-richblack-700 bg-richblack-800 px-3 py-2 text-white rounded-md'>
                  Sign Up
                </button>
              </Link>
            </>
          )}
          {token && <ProfileDropdown />}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
