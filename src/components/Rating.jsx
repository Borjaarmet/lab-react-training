import React from 'react';

const Rating = (props) => {
  function round(props) {
    return Math.round(props);
  }

  function printStars(props) {
    let array = [];
    for (let i = 0; i < round(props); i++) {
      array.push(<div className="mx-1">☀️ </div>);
    }
    for (let i = 0; i < 5 - round(props); i++) {
      array.push(<div className="mx-1">🌧️</div>);
    }
    return array;
  }

  return <div className="flex ml-6 text-xl">{printStars(props.rate)}</div>;
};

export default Rating;
