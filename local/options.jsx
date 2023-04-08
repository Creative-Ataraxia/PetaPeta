import React from 'react';

function ButtonRow(props) {
  return (
    <div>
      {props.rows.map((row, index) => (
        <div key={index}>
          {row.map((button, index) => (
            <button key={index}>{button}</button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ButtonRow;



