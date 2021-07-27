import React from 'react';
import '../styles/AqiData.css';

const TableData = ({city, data}) => {
  return (
    <div className="table-data">
      <div className="city">{city}</div>
      <div className="aqi-data"  style={{backgroundColor: data.color}}>{data.aqi}</div>
    </div>
  );
}

export default TableData;
