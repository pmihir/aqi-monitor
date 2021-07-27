import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import '../styles/AqiData.css';
import chartUtils from '../utils/chartUtils';
import Legends from './Legends';
import { LEGENDS, options } from '../constants/chart';
import TableData from './TableData';
const ws = new WebSocket('wss://city-ws.herokuapp.com/');

const AqiData = () => {
  const [data, setData] = useState(null);
  const [aqiTableData, setAqiTableData] = useState({});
  useEffect(() => {
    ws.onopen = () => {
      console.log('Connection Estblished');
    };
    ws.onmessage = (e) => {
      const value = JSON.parse(e.data);
      const [tableData, chartData] = chartUtils(value);
      setData(chartData);
      setAqiTableData(tableData);
    };
    return () => {
      ws.close = () => {
        console.log('Connection is Closed');
      };
    };
  }, []);

  useEffect(() => {
    console.log('AQI Data has changed');
  }, [aqiTableData]);

  return (
    <div>
      <h2 className="aqi-header">AQI Live Monitoring</h2>
      <div className="wrapper">
        <div className="table-data-wrapper">
          <p className="top-cities">Top 12 Cities</p>
          {/* {JSON.stringify(aqiTableData)} */}
          {Object.entries(aqiTableData).map(([key, value]) => (
            <TableData city={key} data={value} />
          ))}
        </div>
        <div className="chart-data-wrapper">
          <div className="data-legends">
            {LEGENDS.map((legend) => (
              <Legends color={legend.color} text={legend.text} />
            ))}
          </div>
          {data && <Bar data={data} options={options} className="bar-data" />}
        </div>
      </div>
    </div>
  );
};

export default AqiData;
