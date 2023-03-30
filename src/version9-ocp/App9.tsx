import React, { useEffect, useState } from 'react';
import './App.css';
import fetchData, { DataModel } from '../services/dataLoader';
import DisplayMin from './displayMin';
import { CalculationType, DataContextModel, DataProvider } from './dataProvider';
import DisplayMax from './displayMax';
import DisplayAverage from './displayMean';
import { WithDataCalculator } from './withData';
import DisplayTitle from './displayTitle';
import DisplaySum from './displaySum';
import DisplayHealth from './displayHealth';
import { cins } from './models';


function App9() {
  const [data, setData] = useState<DataModel>();

  const onClick = () => {
    setData(fetchData()); 
  }

  useEffect(()=> onClick(), []);

  const DispMin = WithDataCalculator<any, number>(DisplayMin, (state: DataContextModel) => {
    return state.data.data.reduce((a, b) => a + b)
  });
  const DispMax = WithDataCalculator<any, number>(DisplayMax);
  const DispAverage = WithDataCalculator<any, number>(DisplayAverage);
  const DispTitle = WithDataCalculator<any, string>(DisplayTitle);
  const DispSum = WithDataCalculator<any, number>(DisplaySum, (state: DataContextModel) => {
    return state.data.data.reduce((a, b) => a + b)
  });


  const DispAvg = WithDataCalculator<any, number>(DisplayAverage, (state: DataContextModel) => {
    return state.data.data.reduce((a, b) => a - b)
  });

  const DispCins = WithDataCalculator<any, cins>(DisplayHealth, (state: DataContextModel) => {
    return {min: 1, max:10};
  });

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={onClick}>
          Load Data for Version 9
        </button>
      </header>
      <div style={{margin:20}}>
        {data?.title}
      </div>
      {data &&
      <div className='row' style={{display:'flex'}}>
        <DataProvider data={data}>
            <DispMin  calculation={CalculationType.minimum} />
            <DispMax  calculation={CalculationType.maximum}/>
            <DispAverage calculation={CalculationType.average}/>
            <DispTitle calculation={CalculationType.title}/>
            <DispSum />
            <DispAvg/>
            <DispCins/>
        </DataProvider>
      </div>}
      
    </div>
  );
}

export default App9;
