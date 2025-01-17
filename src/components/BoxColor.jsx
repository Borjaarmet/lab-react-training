import React from 'react';

const BoxColor = (props) => {
  const { r, g, b } = props;
  const style = {
    backgroundColor: `rgb(${r},${g},${b})`,
  };
  function elemToHex(elem) {}
  function hexValues(r, g, b) {
    return '#' + elemToHex(r) + elemToHex(g) + elemToHex(b);
  }

  return (
    <div className="ml-6 text-center p-4 text-2xl w-1/2" style={style}>
      <p>
        rgb ( {r} {g} {b} )
      </p>
      <p> {hexValues()}</p>
    </div>
  );
};

export default BoxColor;
