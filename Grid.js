import React from 'react';
import Cell from './Cell';
import './Grid.css';

const Grid = ({ participants }) => {
  const rows = [9, 10, 11, 12, 12, 12];
  let cellCount = 0;

  return (
    <div className="grid">
      {rows.map((cellsInRow, rowIndex) => 
        Array.from({ length: cellsInRow }).map((_, i) => {
          if (cellCount >= 60) return null;
          const isActive = (rowIndex + i) % 2 === 0;
          const participant = participants[cellCount] || {};
          cellCount++;
          return (
            <Cell 
              key={cellCount} 
              isActive={isActive} 
              participant={participant} 
            />
          );
        })
      )}
    </div>
  );
};

export default Grid;
