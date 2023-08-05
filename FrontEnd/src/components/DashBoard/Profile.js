import React from 'react'
import { useSelector } from 'react-redux'


export default function Profile() {

  const { user } = useSelector((state) => state.profile);
  console.log(user)

  const email = user.email
  const accountType = user.accountType
  const firstName = user.firstName
  const lastName = user.lastName
  const image = user.image
  const accountCreated = new Date(user.createdAt); // Convert createdAt to a Date object

  const getOrdinalSuffix = (number) => {
    if (number >= 11 && number <= 13) {
      return 'th';
    }

    const lastDigit = number % 10;
    switch (lastDigit) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  };

  const day = accountCreated.getDate();
  const month = accountCreated.toLocaleString('en-us', { month: 'long' });
  const year = accountCreated.getFullYear();

  const formattedDate = `${day}${getOrdinalSuffix(day)} ${month} ${year}`;

  return (
    <>
      <div style={{marginLeft:"100px ",marginTop:"40px"}}>
        {/* <div
          style={{
            display: 'block',
            width: '70px',
            height: '70px',
            borderRadius: '50%',
            overflow: 'hidden',
            
            alignItems:"center"
          }}
        >
          <img
            src={image}
            alt="Your Image"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '50%',
            }}
          />
        </div> */}
        
          <div style={{marginLeft:"20px",marginTop:"35px",fontSize:"20px",fontWeight:"bolder "}}>Name: {firstName+" "+lastName}</div>
          <div style={{marginLeft:"20px",marginTop:"35px",fontSize:"20px",fontWeight:"bolder "}}>Email: {email}</div>
          <div style={{marginLeft:"20px",marginTop:"35px",fontSize:"20px",fontWeight:"bolder "}}>Account Type: {accountType}</div>
          <div style={{marginLeft:"20px",marginTop:"35px",fontSize:"20px",fontWeight:"bolder "}}>CreatedAt: {formattedDate }</div>
      </div>




    </>
  )
}
