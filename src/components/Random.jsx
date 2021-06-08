import React from 'react';

const Random = (props) => {
  function random(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  return (
    <div className="text-xl ml-6 mb-3 border-4 p-3 w-1/2">
      <strong>
        Random value between {props.min} and {props.max} {'===>'}
      </strong>
      {random(props.min, props.max)}
    </div>
  );
};

export default Random;
