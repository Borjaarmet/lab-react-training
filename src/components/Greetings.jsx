import React from 'react';

const Greetings = (props) => {
  switch (props.lang) {
    case 'de':
      return (
        <p className="border-4 ml-6 mb-3 p-3 text-4xl w-1/3">
          Hallo {props.children}
        </p>
      );
    case 'en':
      return (
        <p className="border-4 ml-6 mb-3 p-3 text-4xl w-1/3">
          Hello, how are you {props.children} ?
        </p>
      );
    case 'fr':
      return (
        <p className="border-4 ml-6 mb-3 p-3 text-4xl w-1/3">
          Bonjour {props.children}
        </p>
      );
    case 'es':
      return (
        <p className="border-4 ml-6 mb-3 p-3 text-4xl w-1/3">
          Hola, como estas {props.children}?
        </p>
      );
    default:
      return (
        <p className="border-4 ml-6 mb-3 text-4xl w-1/3">
          Hello{props.children}
        </p>
      );
  }
};

export default Greetings;
