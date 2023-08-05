import React from 'react';

export default function AddInternshipExp({ token, handleOnChange, handleFormSubmit, formData, email }) {
  const { companyName, experience } = formData;

  return (
    <>
      <div className="text-white bg-richblue-600 max-w-md mx-auto p-8 mt-8 rounded-lg">
        <h2 className="text-center font-bold text-2xl mb-4">Add My Experience</h2>
        <form>
          <div className="mb-4">
            <label className="block font-bold mb-1">Email:</label>
            <input
              defaultValue={email}
              name="email"
              onChange={handleOnChange}
              value={email}
              type="email"
              className="w-full p-2 border-2 border-gray-400 rounded-lg bg-richblack-5 text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-1">Company Name:</label>
            <input
              type="text"
              name="companyName"
              onChange={handleOnChange}
              value={companyName}
              className="w-full p-2 border-2 border-gray-400 rounded-lg bg-richblack-5 text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-1">Experience:</label>
            <textarea
              type="text"
              name="experience"
              onChange={handleOnChange}
              value={experience}
              className="w-full p-4 border-2 border-gray-400 rounded-lg bg-richblack-5 text-black"
              rows="5"
            />
          </div>
          <button
            type="submit"
            onClick={handleFormSubmit}
            className="w-full p-2 bg-richblack-900 text-white font-bold rounded-lg cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
