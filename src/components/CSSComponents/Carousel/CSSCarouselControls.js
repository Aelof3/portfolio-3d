import React, { Component } from 'react';
import './controls.css';

export default class CSSCarouselControls extends Component {
    render() {
        return (
            <div className="css-carousel-controls">
                <input type="radio" id="panel-1" name="panel" value="1" defaultChecked="true"/>
                <input type="radio" id="panel-2" name="panel" value="2" />
                <input type="radio" id="panel-3" name="panel" value="3" />
                <input type="radio" id="panel-4" name="panel" value="4" />
                <input type="radio" id="panel-5" name="panel" value="5" />
                <input type="radio" id="panel-6" name="panel" value="6" />
                <input type="radio" id="panel-7" name="panel" value="7" />
                <input type="radio" id="panel-8" name="panel" value="8" />
                <input type="radio" id="panel-9" name="panel" value="9" />
                {this.props.children}
            </div>
        );
    }
}