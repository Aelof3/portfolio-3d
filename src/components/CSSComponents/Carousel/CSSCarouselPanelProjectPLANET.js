import React, { Component } from 'react';
import CSSButton from '../Parts/CSSButton';
import img from '../../../images/planets.jpg';

export default class CSSCarouselPanelProjectPLANET extends Component {
    render() {
        return (
             <>
                <img alt="" src={img} />
                <p>
                    <a href="https://github.com/Aelof3/planets/">Planet Hopping Game</a>
                </p>
                <ul>
                    <li>Wanted to learn a bit about 3D in browsers, as well as WebGL.</li>
                    <li>Uses three.js and cannon.js</li>
                </ul>
                <CSSButton href="https://aelof3.github.io/planets/" text="Live Demo" />
             </>
        );
    }
}