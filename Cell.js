import React from 'react';
import './Cell.css';

const Cell = ({ isActive, participant }) => {
  return (
    <div className={`cell ${isActive ? 'active' : ''}`}>
      {participant.number && (
        <>
          <img 
            className="photo" 
            src={`https://picsum.photos/200?random=${participant.number}`} 
            alt={participant.name} 
          />
          <div className="number">{participant.number}</div>
          <div className="name">{participant.name}</div>
        </>
      )}
    </div>
  );
};

export default Cell;
