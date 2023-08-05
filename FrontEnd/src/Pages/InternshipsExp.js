import React, { useEffect, useState } from 'react';
import { apiConnector } from '../services/ApiConnector';
import { endpoints } from '../services/APIs';
import { addInternshipExp } from '../services/authAPI';
import { useDispatch, useSelector } from 'react-redux';
import ExperienceCard from '../components/ExperienceCard';
import AddInternshipExp from '../components/AddInternshipExp';
import { Navigate, useNavigate } from 'react-router-dom';

export default function InternshipsExp() {
  const [expData, setExpData] = useState([]);
  const { token } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    companyName: '',
    experience: '',
  });
  const [selectOption, setSelectOption] = useState('Newest');
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();
  const { companyName, experience } = formData;
  const { user } = useSelector((state) => state.profile);
  let email = 'user@123';

  if (token != null) {
    email = user.email;
  }

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSearchText = (e) => {
    setSearchText(e.target.value);
  };

  const handleGetInternshipExp = async () => {
    try {
      const response = await apiConnector('POST', endpoints.GET_INTERNSHIP_EXP, { selectOption });
      setExpData(response.data.allInternshipsExperience);
    } catch (error) {
      console.log('Error while getting experiences', error);
    }
  };

  const handleSelectOption = (e) => {
    setSelectOption(e.target.value);
  };
  const internData = {
    ...formData,
    email,
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (token === null) {
      return <Navigate to="/login" />;
    } else {
      dispatch(addInternshipExp(email, companyName, experience)).then(() => {
        handleGetInternshipExp();
      });
      setFormData({
        companyName: '',
        experience: '',
      });
    }
  };

  useEffect(() => {
    handleGetInternshipExp();
  }, [selectOption]);

  return (
    <>
      <h4 className="bg-lightgrey p-4 font-bold text-center">Internship Experiences</h4>

      <div className="bg-richblue-25 p-4 border-2 border-white grid lg:grid-cols-2 gap-1">
        <div className='w-65'>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-4 mt-4">
            <div className="w-full lg:w-48">
              <select
                className="text-richblack-5 bg-richblue-400 p-2"
                value={selectOption}
                onChange={handleSelectOption}
              >
                <option value="Newest">Newest</option>
                <option value="Oldest">Oldest</option>
                <option value="AlphabeticAsc">Alphabetic Asc</option>
                <option value="AlphabeticDesc">Alphabetic Desc</option>
              </select>
            </div>

            <input
              type="text"
              className="text-richblack-5 bg-richblue-400 p-2 lg:w-48 border-3 border-black rounded"
              onChange={handleSearchText}
              placeholder="Search"
            />
          </div>

          <ExperienceCard  expData={expData} searchText={searchText} />
        </div>
        <div >
          <AddInternshipExp token={token} handleFormSubmit={handleFormSubmit} handleOnChange={handleOnChange} formData={formData} email={email} />
        </div>
      </div>
    </>
  );
}
