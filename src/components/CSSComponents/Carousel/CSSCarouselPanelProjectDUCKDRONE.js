import React, { Component } from 'react';
import CSSButton from '../Parts/CSSButton';
import img from '../../../images/duckdrone.jpg';

export default class CSSCarouselPanelProjectDUCKDRONE extends Component {
    render() {
        return (
            <>
                <img alt="" src={img} />
                <p>
                    <a href="https://github.com/Aelof3/DuckDrone/">A hard game of fighting physics with a duck</a>
                </p>
                <ul>
                    <li>Had an idea, and wanted to see if I could figure out a way to do it.</li>
                    <li>Uses three.js and cannon.js</li>
                </ul>
                <CSSButton href="https://aelof3.github.io/DuckDrone/" text="Live Demo" />
            </>
        );
    }
}