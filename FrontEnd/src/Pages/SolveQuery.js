import React, { useEffect, useState } from 'react';
import { apiConnector } from '../services/ApiConnector';
import { endpoints } from '../services/APIs';
import { useDispatch, useSelector } from 'react-redux';
import Scrollbars from 'react-custom-scrollbars';

export default function SolveQuery() {
  const [queryData, setqueryData] = useState([]);
  const { token } = useSelector((state) => state.auth);
  const [selectOption, setSelectOption] = useState('Newest');
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.profile);
  let email = "user@123";

  if (token != null) {
    email = user.email;
  }

  const handleSearchText = (e) => {
    setSearchText(e.target.value);
  };

  const handleGetqueryExp = async () => {
    try {
      const response = await apiConnector('POST', endpoints.GET_ALL_QUERIES, { selectOption });
      setqueryData(response.data.allqueriesInformation);
    } catch (error) {
      console.log('Error while getting messages', error);
    }
  };

  const handleSelectOption = (e) => {
    setSelectOption(e.target.value);
  };

  useEffect(() => {
    handleGetqueryExp();
  }, [selectOption]);

  return (
    <>
      <h4 className="bg-lightgrey p-4 font-bold text-center">Query Messages</h4>

      <div className='bg-richblue-25 p-4 border-2 border-white'>
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
          <div className="w-full md:w-48 mb-4 md:mb-0">
            <select
              className="p-2 text-richblack-5 bg-richblue-400 w-full"
              value={selectOption}
              onChange={handleSelectOption}
            >
              <option value="Newest">Newest</option>
              <option value="Oldest">Oldest</option>
            </select>
          </div>
          <input
            type="text"
            className="p-2 text-richblack-5 bg-richblue-400 w-full md:w-48 border-3 border-black rounded"
            onChange={handleSearchText}
            placeholder="Search"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {queryData
            .filter((data) => {
              const searchRegex = new RegExp(searchText, 'i');
              return (
                data.email.match(searchRegex) ||
                data.Title.match(searchRegex) ||
                data.message.match(searchRegex)
              );
            })
            ?.map((data, index) => (
              <div key={index} className='text-richblack-900 bg-richblue-50 border-3 border-black p-4'>
                <div className='font-bold'>
                  <label className='text-pink-800 text-bolder font-bold'>Email:</label>
                  {data.email}
                </div>
                <label className='text-pink-800 text-bolder font-bold'>Title:</label>
                {data.Title}
                <div className='mt-4'>
                  <div className='flex'>
                    <p className='text-pink-800 text-bolder font-bold mr-2'>Message:</p>
                    <Scrollbars
                      style={{
                        width: '100%',
                        height: data.message.length > 200 ? '250px' : 'auto',
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
                      {data.message}
                    </Scrollbars>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
