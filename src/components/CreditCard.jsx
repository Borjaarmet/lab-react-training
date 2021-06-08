import React from 'react';

const CreditCard = (props) => {
  const { bgColor, color } = props;
  const style = {
    backgroundColor: bgColor,
    color: color,
  };

  function showLogo(props) {
    switch (props) {
      case 'Visa':
        return (
          <div>
            <img
              className="w-10 h-10 float-right"
              src="https://logos-marcas.com/wp-content/uploads/2020/04/Visa-Logo-650x366.png"
              alt="VISA"
            ></img>
          </div>
        );

      case 'Master Card':
        return (
          <div>
            <img
              className="w-10 h-10 float-right"
              src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg"
              alt="MASTERCARD"
            ></img>
          </div>
        );

      default:
        break;
    }
  }

  function hideNumbers(props) {
    let arrayNum = Array.from(props);
    return <p>···· ···· ···· {arrayNum.slice(12, 16)}</p>;
  }
  function daysMonth(props) {
    if (props <= 9) {
      return '0' + props;
    } else {
      return props;
    }
  }

  return (
    <div
      className="p-4 ml-6 mr-6 rounded-md w-1/3 flex flex-col shadow-2xl"
      style={style}
    >
      <>{showLogo(props.type)}</>
      <div>
        <p className="text-center m-1 text-3xl">{hideNumbers(props.number)}</p>
        <p className="text-sm">
          Expires {daysMonth(props.expirationMonth)} / {props.expirationYear}{' '}
          {props.bank}
        </p>

        <p>{props.owner}</p>
      </div>
    </div>
  );
};

export default CreditCard;
