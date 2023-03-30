import React, { useEffect, useState } from 'react';
import './App.css';
import fetchData, { DataModel } from '../services/dataLoader';
import DisplayMin from './displayMin';
import { DataContext, DataProvider } from './dataProvider';
import DisplayMax from './displayMax';
import DisplayAverage from './displayMean';
import { CalculationType, WithDataCalculator } from './withData';


function App4() {
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
        Load Data for Version 4
        </button>
      </header>
      <div style={{margin:20}}>
        {data?.title}
      </div>
      {data &&
      <div className='row' style={{display:'flex'}}>
        <DataProvider data={data}>
            <DataContext.Consumer>
              {state => <DispMin data={state} calculation={CalculationType.minimum}/>}
            </DataContext.Consumer>
            <DataContext.Consumer>
              {state => <DispMax data={state} calculation={CalculationType.maximum}/>}
            </DataContext.Consumer>
            <DataContext.Consumer>
              {state => <DispAverage data={state} calculation={CalculationType.average}/>}
            </DataContext.Consumer>
        </DataProvider>
        
      </div>}
      
    </div>
  );
}

export default App4;
