import React, { useEffect, useState } from 'react';
import './App.css';
import fetchData, { DataModel } from '../services/dataLoader';
import DisplayMin from './displayMin';
import { CalculationType, DataProvider } from './dataProvider';
import DisplayMax from './displayMax';
import DisplayAverage from './displayMean';
import { WithDataCalculator } from './withData';


function App6() {
  const [data, setData] = useState<DataModel>();

  const onClick = () => {
    setData(fetchData()); 
  }

  useEffect(()=> onClick(), []);

  const DispMin = WithDataCalculator(DisplayMin);
  const DispMax = WithDataCalculator(DisplayMax);
  const DispAverage = WithDataCalculator(DisplayAverage);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={onClick}>
          Load Data for Version 6
        </button>
      </header>
      <div style={{margin:20}}>
        {data?.title}
      </div>
      {data &&
      <div className='row' style={{display:'flex'}}>
        <DataProvider data={data}>
            <DispMin  calculation={CalculationType.minimum}/>
            <DispMax  calculation={CalculationType.maximum}/>
            <DispAverage calculation={CalculationType.average}/>
        </DataProvider>
      </div>}
      
    </div>
  );
}

export default App6;
