import React from 'react';

const Legends = ({color, text}) => {
  return (
    <div style={{display: 'flex', alignItems: 'center', marginRight: '1rem'}}>
      <div style={{width: 15, height: 15, backgroundColor: color}}>
      </div>
      <span style={{marginLeft: '0.5rem'}}>{text}</span>
    </div>
  );
}

export default Legends;
