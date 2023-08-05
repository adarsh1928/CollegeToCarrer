import React, { useEffect, useState } from 'react';
import { endpoints } from '../../services/APIs';
import { getMyInternshipExp, getMyInternshipInfo } from '../../services/authAPI';
import { useDispatch, useSelector } from 'react-redux';
import Scrollbars from 'react-custom-scrollbars';
import { apiConnector } from '../../services/ApiConnector';

export default function GetInternships() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.profile);
  const email = user.email;

  const [myInternshipExp, setMyInternshipExperience] = useState([]);
  const [myInternshipInformation, setMyInternshipInformation] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [indexOfEdit, setIndexOfEdit] = useState(-1);
  const [editedExperience, setEditedExperience] = useState('');
  const [editCompanyName, setEditCompanyName] = useState('');

  const handleEditExperience = (index) => {
    setIsEditMode(true);
    setIndexOfEdit(index);
    setEditedExperience(myInternshipExp[index].Experience);
    setEditCompanyName(myInternshipExp[index].companyName);
  };

  const handleDeleteExperience=async (index)=>{
    try{

      const id=myInternshipExp[index]._id;
      console.log("id is",id)
    

          const response=await apiConnector("POST",endpoints.DELETE_INTERNSHIP_EXPEREIENCE,{email,id});
          console.log(response);

    }
     catch(err){
       console.log(err);
     }

     
     
  }

  const handleSubmitEditExperience = async () => {
    setIsEditMode(false);
    const updatedExperience = [...myInternshipExp];
    updatedExperience[indexOfEdit].Experience = editedExperience;
    setMyInternshipExperience(updatedExperience);

    const companyName = updatedExperience[indexOfEdit].companyName;
    const id = updatedExperience[indexOfEdit]._id;
    const exp = updatedExperience[indexOfEdit].Experience;

    console.log(companyName, id, exp, email);

    try {
      const response = await apiConnector('POST', endpoints.EDIT_INTERNSHIP_EXPERIENCE, {
        email,
        id,
        companyName,
        Experience: exp, // Use the updated experience array in the request
      });

      console.log(response);
      console.log('Successfully edited experience.');
    } catch (err) {
      console.log(err);
      console.log('Error editing experience.');
    }
  };

  const fetchInternshipExp = async () => {
    try {
      const response = await apiConnector('POST', endpoints.GET_MY_INTERNSHIP_EXPERIENCE, { email });
      setMyInternshipExperience(response.data.myInternshipExp);
    } catch (err) {
      console.log(err);
      console.log('Error in intern experience');
    }
  };

  const fetchInternshipInfo = async () => {
    try {
      const response = await apiConnector('POST', endpoints.GET_MY_INTERNSHIP_INFORMATION, { email });
      setMyInternshipInformation(response.data.myInternshipInfo);
    } catch (err) {
      console.log(err);
      console.log('Error in intern information');
    }
  };

  useEffect(() => {
    fetchInternshipExp();
    fetchInternshipInfo();
  }, []);

  return (
    <>
      <div className="p-4 bg-gray-100 min-h-screen">
        <div className="text-3xl font-bold text-center mb-8 text-purple-800">My Internship Experience</div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-1 xl:grid-cols-1">
          {myInternshipExp?.map((data, index) => (
            <div key={index} className="border-2 border-purple-800 bg-richblue-300 rounded-lg shadow-md p-6">
              <label className="font-semibold text-purple-800">Company:</label>
              <p className="text-richblack-25">{data.companyName}</p>
              {(!isEditMode || index !== indexOfEdit) && (
                <>
                  <button className="bg-pink-800 text-white py-2 px-4 mt-4 rounded-lg" onClick={() => handleEditExperience(index)}>
                    Edit
                  </button>
                  <button className="bg-pink-800 text-white py-2 px-4 mt-4 ml-2 rounded-lg"onClick={()=>handleDeleteExperience(index)} >Delete</button>
                  <div className="flex mt-4">
                    <p className="font-semibold text-yellow-100 mr-2">Experience:</p>
                    <Scrollbars
                      style={{ width: '100%', height: data.Experience.length > 200 ? '150px' : 'auto' }}
                      autoHide
                      autoHideTimeout={1000}
                      autoHideDuration={200}
                      renderThumbVertical={({ style, ...props }) => (
                        <div {...props} style={{ ...style, backgroundColor: '#4C51BF', borderRadius: '4px' }} />
                      )}
                    >
                      <p className="text-richblack-25">{data.Experience}</p>
                    </Scrollbars>
                  </div>
                </>
              )}
              {isEditMode && index === indexOfEdit && (
                <>
                  <p className="font-semibold text-purple-800 mt-4">Experience:</p>
                  <textarea
                    rows={15}
                    cols={60}
                    className="flex mt-2 border rounded-lg border-purple-800 p-2"
                    onChange={(e) => setEditedExperience(e.target.value)}
                    value={editedExperience}
                  />
                  <button
                    onClick={handleSubmitEditExperience}
                    className="font-bold bg-purple-800 text-white py-2 px-4 mt-4 rounded-lg"
                  >
                    Submit
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
        <div className="text-3xl font-bold text-center mt-8 text-purple-800">My Internship Information</div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {myInternshipInformation.map((data, index) => (
            <div key={index} className="border-2 border-purple-800 bg-white rounded-lg shadow-md p-6">
              <label className="font-semibold text-purple-800">Title:</label>
              <p className="text-gray-800">{data.title}</p>
              <div className="flex mt-4">
                <p className="font-semibold text-purple-800 mr-2">Information:</p>
                <Scrollbars
                  style={{ width: '100%', height: data.Information.length > 200 ? '150px' : 'auto' }}
                  autoHide
                  autoHideTimeout={1000}
                  autoHideDuration={200}
                  renderThumbVertical={({ style, ...props }) => (
                    <div {...props} style={{ ...style, backgroundColor: '#4C51BF', borderRadius: '4px' }} />
                  )}
                >
                  <p className="text-gray-800">{data.Information}</p>
                </Scrollbars>
              </div>
            </div>
          ))}
        </div>
      </div>        </>
  );
}
