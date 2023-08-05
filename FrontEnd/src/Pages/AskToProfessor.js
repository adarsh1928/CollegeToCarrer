import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addQuery } from '../services/authAPI';
import { toast } from 'react-hot-toast';

export default function AskToProfessors() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.profile);
  const email=user.email 


  const [formData, setFormData] = useState({
    Title: "",
    message: "",
  });

  const { Title, message } = formData;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await dispatch(addQuery(email, Title, message));

      setFormData({
        Title: "",
        message: "",
      });

      // Show a success notification
      toast.success("Query added successfully!");
    } catch (err) {
      console.error("Failed to add a query", err);
      // Show an error notification
      toast.error("Failed to add a query");
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mt-10">Ask a Query To Professors</h1>
      <div className="bg-richblue-200 p-8 rounded-lg mt-8 w-3/5 sm:w-4/5 md:w-2/5 lg:w-1/3">
        <h2 className="text-2xl font-bold mb-4 text-center">Add My Query</h2>
        <form>
          <div className="mb-4">
            <label className="block font-bold mb-1">Email:</label>
            <input
              defaultValue={email}
              name="email"
              type="email"
              className="w-full p-2 border-2 rounded bg-gray-100"
              
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-1">Title:</label>
            <input
              type="text"
              name="Title"
              onChange={handleOnChange}
              value={Title}
              className="w-full p-2 border-2 rounded bg-gray-100"
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-1">Query:</label>
            <textarea
              name="message"
              onChange={handleOnChange}
              value={message}
              className="w-full p-2 border-2 rounded bg-gray-100"
              rows={6}
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              onClick={handleFormSubmit}
              className="px-4 py-2 bg-richblue-800 text-white rounded cursor-pointer"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
