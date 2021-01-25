import React, { Component } from 'react';
import './carousel.css';
import CSSCarouselControlsLabels from './CSSCarouselControlsLabels';

export default class CSSCarouselPanel extends Component {
    render() {
        return (
            <div className="css-carousel-panel">
                <h2 className="css-carousel-panel-header">
                    {this.props.header}
                </h2>
                <div className="css-carousel-panel-content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}