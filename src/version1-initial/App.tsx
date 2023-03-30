import React, { useEffect, useState } from 'react';
import './App.css';
import fetchData, { DataModel } from '../services/dataLoader';
import DisplayMin from './displayMin';
import DisplayMax from './displayMax';
import DisplayAverage from './displayMean';

function App() {
  const [data, setData] = useState<DataModel>();

  const onClick = () => {
    setData(fetchData());
  }

  useEffect(()=> onClick(), []);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={onClick}>
        Load Data for Version 1
        </button>
      </header>
      <div style={{margin:20}}>
        {data?.title}
      </div>
      {data &&
      <div className='row' style={{display:'flex'}}>
        <DisplayMin data={data.data} />
        <DisplayMax data={data.data} />
        <DisplayAverage data={data.data} />
      </div>}
      
    </div>
  );
}

export default App;
