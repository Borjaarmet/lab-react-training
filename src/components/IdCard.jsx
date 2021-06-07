import React from 'react';

const IdCard = (props) => {
  console.log(props.birth);
  return (
    <div className="flex flex-start ml-6 mb-3 border-4 p-4 w-1/3">
      <img className="mr-3" src={props.picture} alt="" />
      <div className="text-2xl ml-3">
        <div>
          <strong>First Name: </strong> {props.firstName}
        </div>
        <div>
          <strong>Last Name: </strong> {props.lastName}
        </div>
        <div>
          <strong>Gender: </strong> {props.gender}
        </div>
        <div>
          <strong>Height: </strong> {props.height}
        </div>
        {/* <div>Birth: {props.birth.Date()}</div> */}
      </div>
    </div>
  );
};

export default IdCard;