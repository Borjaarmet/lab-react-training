import React, { Fragment } from 'react';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import './App.css';

function App() {
  return (
    <Fragment>
      <div className="flex flex-col">
        <h1 className="text-4xl text-center m-6 bg-yellow-300 inline">
          Id Card ( iteration 1 )
        </h1>
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={178}
          birth={new Date('1992-07-14')}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        ></IdCard>
        <IdCard
          lastName="Delores "
          firstName="Obrien"
          gender="female"
          height={172}
          birth={new Date('1988-05-11')}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        ></IdCard>
      </div>
      <div className="flex flex-col" s>
        <h1 className="text-4xl text-center m-6 bg-yellow-300 inline">
          Greetings ( iteration 2 )
        </h1>
        <Greetings lang="es" children="Borja"></Greetings>
        <Greetings lang="fr" children="Borja"></Greetings>
      </div>
      <div className="flex flex-col" s>
        <h1 className="text-4xl text-center m-6 bg-yellow-300 inline">
          Random ( iteration 3 )
        </h1>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>
      <div className="flex flex-col">
        <h1 className="text-4xl text-center m-6 bg-yellow-300 inline">
          BoxColor ( iteration 4 )
        </h1>
        <div className="flex justify-center flex-col">
          <BoxColor r={255} g={0} b={0} />
          <BoxColor r={128} g={255} b={0} />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
