import React from 'react';
import ReactDOM from 'react-dom';

function Square(props) {
    return (
      <button className={props.value == 'X' ? "square" : "circle" } onClick={props.onClick}>
        {props.value}
      </button>
    );  
  }
  
  export default Square;