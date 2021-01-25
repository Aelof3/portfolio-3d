import React, { Component } from 'react';
import './cube.css';

export default class CSSCube extends Component {
    render() {
        return (
             <div className="css-cube">
                 <div className="css-cube-side">front</div>
                 <div className="css-cube-side">back</div>
                 <div className="css-cube-side">left</div>
                 <div className="css-cube-side">right</div>
                 <div className="css-cube-side">bottom</div>
                 <div className="css-cube-side">top</div>
             </div>
        );
    }
}