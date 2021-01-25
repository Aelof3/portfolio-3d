import React, { Component } from 'react';
import CSSButton from '../Parts/CSSButton';
import img from '../../../images/magic8ball.jpg';

export default class CSSCarouselPanelProjectMAGIC8BALL extends Component {
    render() {
        return (
             <>
                <img alt="" src={img} />
                <p>
                    <a href="https://github.com/Aelof3/magic8ball">Magic 8 Ball - Online</a>
                </p>
                <ul>
                    <li>Created a full stack magic 8 ball application</li>
                    <li>Uses React and CSS 3D transforms for the front end</li>
                    <li>Uses Node, Express, and Postgresql for the back end</li>
                </ul>
                <CSSButton href="https://magic-8.vercel.app/" text="Live Demo" />
             </>
        );
    }
}