import React, { useState } from 'react';
import TimeframeSelector from './components/TimeframeSelector';
import Chart from './components/Chart';

import './App.css'

const App = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState(null);
  const [data, setData] = useState([]);

  const handleTimeframeSelect = (timeframe) => {
    setSelectedTimeframe(timeframe);
    switch (timeframe) {
      case 'daily':
        setData([
          { timestamp: "2023-01-01", value: 10 },
          { timestamp: "2023-01-02", value: 15 },
          { timestamp: "2023-01-03", value: 8 },
          { timestamp: "2023-01-04", value: 11 },
          { timestamp: "2023-01-05", value: 14 },
          { timestamp: "2023-01-06", value: 5 },
          { timestamp: "2023-01-07", value: 12 },
          { timestamp: "2023-01-08", value: 13 },
          { timestamp: "2023-01-09", value: 9 },
        
        ]);
        break;
      case 'weekly':
        setData([
          { timestamp: "2023-01-01", value: 50 },
          { timestamp: "2023-01-02", value: 40 },
          { timestamp: "2023-01-03", value: 45 },
          { timestamp: "2023-01-04", value: 49 },
          { timestamp: "2023-02-01", value: 39 },
          { timestamp: "2023-02-02", value: 33 },
          { timestamp: "2023-02-03", value: 27 },
          { timestamp: "2023-02-04", value: 30 },
          { timestamp: "2023-03-01", value: 38 },
         
        ]);
        break;
      case 'monthly':
        setData([
          { timestamp: "2023-01-01", value: 90 },
          { timestamp: "2023-02-01", value: 80 },
          { timestamp: "2023-03-01", value: 100 },
          { timestamp: "2023-04-01", value: 60 },
          { timestamp: "2023-05-01", value: 67 },
          { timestamp: "2023-06-01", value: 89 },
          { timestamp: "2023-07-01", value: 30 },
          { timestamp: "2023-08-01", value: 40 },
          { timestamp: "2023-09-01", value: 77 },
       
        ]);
        break;
      default:
        setData([]);
        break;
    }
  };
  return (
    <div className='app-container'>
      <h1 className='app-heading'>Timeframe Selector with Recharts</h1>
      <TimeframeSelector onSelect={handleTimeframeSelect} />
      <div>
        {selectedTimeframe && (
          <Chart data={data} />
        )}
      </div>
    </div>
  );
};

export default App;
