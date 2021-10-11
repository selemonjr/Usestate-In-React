import React from 'react';
import ReactDOM from 'react-dom';
import Array from './Array';
import './index.css';
import Title from './Title';
const Setup = () => {
  return(
    <div className="setup">
    <Title/>
    <Array/>
    </div>
  )
}
ReactDOM.render(<Setup/>,document.getElementById("root"))