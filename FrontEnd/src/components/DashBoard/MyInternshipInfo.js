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

  const handleSubmitEditExperience = async () => {
    setIsEditMode(false);
    const updatedExperience = [...myInternshipExp];
    updatedExperience[indexOfEdit].Experience = editedExperience;
    setMyInternshipExperience(updatedExperience);

    const companyName = updatedExperience[indexOfEdit].companyName;
    const id = updatedExperience[indexOfEdit]._id;
    const exp=updatedExperience[indexOfEdit].Experience

    console.log(companyName, id, exp, email);

    try {
      const response = await apiConnector('POST', endpoints.EDIT_INTERNSHIP_, {
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

  useEffect(() => {
    fetchInternshipExp();
    fetchInternshipInfo();
  }, []);

  return (
    <>
      <div>
        <div style={{ fontSize: '20px', fontWeight: 'bolder', textAlign: 'center' }}>My Internship Experience</div>
        <div style={{ width: '650px', margin: '15px ' }}>
          {myInternshipExp?.map((data, index) => (
            <div key={index} style={{ width: '250px', margin: '15px', padding: '25px', border: '2px solid black', height: 'auto', width: 'auto' }}>
              <label className='text-pink-800 text-bolder font-bold'>Company:</label>
              {data.companyName}
              {(!isEditMode || index !== indexOfEdit) && (
                <>
                  <button
                    style={{ border: '2px solid black', backgroundColor: 'lightblue', padding: '2px', position: 'flex', marginLeft: '80px' }}
                    onClick={() => handleEditExperience(index)}
                  >
                    Edit
                  </button>
                  <button style={{ border: '2px solid black', backgroundColor: 'orange', padding: '2px', position: 'flex', marginLeft: '20px' }}>Delete</button>
                  <div style={{ display: 'flex', marginTop: '7px' }}>
                    <p className='text-pink-800 text-bolder font-bold' style={{ marginRight: '10px' }}>
                      Experience:
                    </p>
                    <Scrollbars
                      style={{
                        width: '100%',
                        height: data.Experience.length > 200 ? '150px' : 'auto',
                      }}
                      autoHide
                      autoHideTimeout={1000}
                      autoHideDuration={200}
                      renderThumbVertical={({ style, ...props }) => (
                        <div
                          {...props}
                          style={{
                            ...style,
                            backgroundColor: '#4C51BF',
                            borderRadius: '4px',
                          }}
                        />
                      )}
                    >
                      {data.Experience}
                    </Scrollbars>
                  </div>
                </>
              )}
              {isEditMode && index === indexOfEdit && (
                <>
                  {/* <textarea onChange={(e) => setEditedExperience(e.target.value)} value={editedExperience} />
                  <button onClick={handleSubmitEditExperience} style={{ marginTop: '7px' }}>
                    Submit
                  </button> */}
                    <p className='text-pink-800 text-bolder font-bold' style={{ marginRight: '10px' }}>
                      Experience:
                    </p>
                   <textarea rows={15} cols={60} onChange={(e) => setEditedExperience(e.target.value)} value={editedExperience}  style={{ display: 'flex', marginTop: '7px'}}>
                    <Scrollbars
                      style={{
                        width: '100%',
                        height: data.Experience.length > 200 ? '150px' : 'auto',
                      }}
                      autoHide
                      autoHideTimeout={1000}
                      autoHideDuration={200}
                      renderThumbVertical={({ style, ...props }) => (
                        <div
                          {...props}
                          style={{
                            ...style,
                            backgroundColor: '#4C51BF',
                            borderRadius: '4px',
                          }}
                        />
                      )}
                    >
                      
                    </Scrollbars>
                  </textarea>
                  <button onClick={handleSubmitEditExperience} style={{fontWeight:"bolder",justifyContent:"center",alignContent:"center", textAlign:"center", marginTop: '7px' }}>
                    Submit
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
             </div>
    </>
  );
}
