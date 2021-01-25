import React, { Component } from 'react';
import './pyramid.css';

export default class CSSPyramid extends Component {
    render() {
        return (
             <div className="css-pyramid">
                 <div className="css-pyramid-side">front</div>
                 <div className="css-pyramid-side">back</div>
                 <div className="css-pyramid-side">left</div>
                 <div className="css-pyramid-side">right</div>
                 <div className="css-pyramid-side">bottom</div>
             </div>
        );
    }
}