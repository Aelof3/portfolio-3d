import React, { Component } from 'react';
import './button.css';

export default class CSSButton extends Component {
    render() {
        const { text, href } = this.props;
        return (
             <a href={href} className="css-button arrow">{text}</a>
        );
    }
}