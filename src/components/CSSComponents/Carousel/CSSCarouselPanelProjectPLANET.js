import React, { Component } from 'react';
import CSSButton from '../Parts/CSSButton';
import img from '../../../images/planets.jpg';

export default class CSSCarouselPanelProjectPLANET extends Component {
    render() {
        return (
             <>
                <img alt="" src={img} />
                <p>
                    <a href="https://github.com/Aelof3/planets/">Repository - https://github.com/Aelof3/planets/</a>
                </p>
                <ul>
                    <li><strong>Name:</strong>Planet Hopper</li>
                    <li><strong>Description:</strong>Planet hopping game that uses gravity in a unique way</li>
                    <li><strong>Why It Was Built:</strong>Wanted to learn a bit about 3D in browsers, as well as WebGL.</li>
                    <li><strong>Technologies:</strong>Uses three.js and cannon.js</li>
                    <li><strong>Intended Audience:</strong>Anybody interested in killing some time with a web based game</li>
                </ul>
                <CSSButton href="https://aelof3.github.io/planets/" text="Live Demo" />
             </>
        );
    }
}