import React, { Component } from 'react';
import CSSButton from '../Parts/CSSButton';
import img from '../../../images/wam.jpg';

export default class CSSCarouselPanelProjectWAM extends Component {
    render() {
        return (
            <>
                <img alt="" src={img} />
                <p>
                    <a href="https://github.com/Aelof3/wam">CSS3D Whack-a-Mole game</a>
                </p>
                <ul>
                    <li>Created a full stack whack-a-mole online application</li>
                    <li>Uses React and CSS 3D transforms for the front end</li>
                    <li>Uses Node, Express, and Postgresql for the back end</li>
                </ul>
                <CSSButton href="https://aelof3.github.io/wam/" text="Live Demo" />
            </>
        );
    }
}