import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { apiConnector } from '../services/ApiConnector';
import { endpoints } from '../services/APIs';

export default function Forms() {
  const { user } = useSelector((state) => state.profile);
  const [formDetail, setFormDetail] = useState([]);
  const email = user.email;

  const handleGetFormDetail = async () => {
    try {
      const response = await apiConnector('POST', endpoints.GET_FORMS_DETAIL);
      console.log('Response of get form:', response);
      setFormDetail(response.data.getFormDetails[0].fields);
    } catch (error) {
      console.log('Error while getting form details:', error);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await apiConnector('POST', endpoints.FILL_FORM, {
        email: email,
        semester: '6',
        formId: '64afd9974803e97658fbea7e',
        choices: formDetail
      });
      console.log('Response:', response);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  useEffect(() => {
    handleGetFormDetail();
  }, []);

  return (
    <div className='text-white'>
      Forms
    </div>
  );
}
