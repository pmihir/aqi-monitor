import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2'; 
import chartUtils from '../utils/chartUtils';
import Legends from './Legends';
import { LEGENDS, options } from '../constants/chart';
const ws = new WebSocket('wss://city-ws.herokuapp.com/');

const AqiData = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    ws.onopen = () => {
      console.log("Connection Estblished");
    }
    ws.onmessage = (e) => {
      const value = JSON.parse(e.data);
      console.log(value);
      setData(chartUtils(value));
    }
    return () => {
      ws.close = () => {
        console.log("Connection is Closed");
      }
    }
  }, []);

  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        {LEGENDS.map((legend) => <Legends color={legend.color} text={legend.text} />)}
      </div>
      {data && 
        <Bar data={data} options={options} />
        }
    </div>
  );
}

export default AqiData;
