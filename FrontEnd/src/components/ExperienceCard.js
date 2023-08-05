import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

export default function ExperienceCard({ expData, searchText }) {
  return (
    <>
      <div className="flex flex-wrap w-512 text-CaptionText">
        {expData
          .filter((data) => {
            const searchRegex = new RegExp(searchText, 'i');
            return (
              data.email.match(searchRegex) ||
              data.companyName.match(searchRegex) ||
              data.Experience.match(searchRegex)
            );
          })
          .map((data, index) => (
            <div
              key={index}
              className="flex flex-col text-richblack-900 bg-richblue-50 border-3 border-black m-4 p-4 "
            >
              <div className="font-bold flex justify-between">
                <label className="text-pink-800 font-bold">Email :</label>
                <span>{data.email}  </span> 
              </div>
              <div className="font-bold flex">
                <label className="text-pink-800 font-bold">company :</label>
                <span>{data.companyName}  </span> 
              </div>
              <div className="mt-3">
                <div className="flex">
                  <p className="text-pink-800 font-bold mr-2">Experience:</p>
                  <Scrollbars
                    style={{
                      width: "100%",
                      height: data.Experience.length > 200 ? "250px" : "auto",
                    }}
                    autoHide
                    autoHideTimeout={1000}
                    autoHideDuration={200}
                    renderThumbVertical={({ style, ...props }) => (
                      <div
                        {...props}
                        style={{
                          ...style,
                          backgroundColor: "#4C51BF",
                          borderRadius: "4px",
                        }}
                      />
                    )}
                  >
                    {data.Experience}
                  </Scrollbars>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
