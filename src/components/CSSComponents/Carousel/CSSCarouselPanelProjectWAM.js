import React, { Component } from 'react';
import CSSButton from '../Parts/CSSButton';
import img from '../../../images/wam.jpg';

export default class CSSCarouselPanelProjectWAM extends Component {
    render() {
        return (
            <>
                <img alt="" src={img} />
                <p>
                    <a href="https://github.com/Aelof3/wam">Repository - https://github.com/Aelof3/wam</a>
                </p>
                <ul>
                    <li><strong>Name:</strong>Whack-A-Mole 3D</li>
                    <li><strong>Description:</strong>Full stack whack-a-mole online application</li>
                    <li><strong>Why It Was Built:</strong>My first capstone project for Thinkful</li>
                    <li><strong>Technologies (front end):</strong>React and CSS 3D transforms</li>
                    <li><strong>Technologies (back end):</strong>Node, Express, and Postgresql</li>
                    <li><strong>Intended Audience:</strong>Players of all ages!</li>
                </ul>
                <CSSButton href="https://aelof3.github.io/wam/" text="Live Demo" />
            </>
        );
    }
}