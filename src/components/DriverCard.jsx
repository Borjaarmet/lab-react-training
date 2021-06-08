import React from 'react';
import Rating from './Rating';

const DriverCard = (props) => {
  return (
    <div className="ml-6 flex rounded-md bg-blue-700 shadow-2xl mb-3 w-1/3">
      <div>
        <img
          className="w-20 h-20 rounded-full box-content p-6"
          src={props.img}
          alt=""
        ></img>
      </div>
      <div className="flex flex-col ">
        <p className="text-white text-xl ml-8 mt-5 mb-1 font-bold">
          {props.name}
        </p>
        <Rating rate={props.rating}></Rating>
        <p className="text-white ml-8 mt-1">
          {props.car.model} - {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;
