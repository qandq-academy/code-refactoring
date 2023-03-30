import React, { useEffect, useState } from 'react';
import './App.css';
import fetchData, { DataModel } from '../services/dataLoader';
import DisplayMin from './displayMin';
import { DataProvider } from './dataProvider';
import DisplayMax from './displayMax';
import DisplayAverage from './displayMean';

function App2() {
  const [data, setData] = useState<DataModel>();

  const onClick = () => {
    setData(fetchData());
  }

  useEffect(()=> onClick(), []);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={onClick}>
        Load Data for Version 2
        </button>
      </header>
      <div style={{margin:20}}>
        {data?.title}
      </div>
      {data &&
      <div className='row' style={{display:'flex'}}>
        <DataProvider data={data}>
          <DisplayMin />
          <DisplayMax />
          <DisplayAverage />
        </DataProvider>
        
      </div>}
      
    </div>
  );
}

export default App2;
