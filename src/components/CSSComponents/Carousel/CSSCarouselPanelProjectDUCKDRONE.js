import React, { Component } from 'react';
import CSSButton from '../Parts/CSSButton';
import img from '../../../images/duckdrone.jpg';

export default class CSSCarouselPanelProjectDUCKDRONE extends Component {
    render() {
        return (
            <>
                <img alt="" src={img} />
                <p>
                    <a target="_blank" rel="noreferrer" href="https://github.com/Aelof3/DuckDrone/">Repository - https://github.com/Aelof3/DuckDrone</a>
                </p>
                <ul>
                    <li><strong>Name:</strong>DuckDrone</li>
                    <li><strong>Description:</strong> A hard game of fighting physics with a duck</li>
                    <li><strong>Why It Was Built:</strong>Had an idea, and wanted to see if I could figure out a way to do it.</li>
                    <li><strong>Technologies:</strong>Uses three.js and cannon.js</li>
                    <li><strong>Intended Audience:</strong>Everyone looking to kill some time.</li>
                </ul>
                <CSSButton href="https://aelof3.github.io/DuckDrone/" text="Live Demo" />
            </>
        );
    }
}