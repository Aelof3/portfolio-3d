import React, { Component } from 'react';
import CSSButton from '../Parts/CSSButton';
import img from '../../../images/magic8ball.jpg';

export default class CSSCarouselPanelProjectMAGIC8BALL extends Component {
    render() {
        return (
             <>
                <img alt="" src={img} />
                <p>
                    <a href="https://github.com/Aelof3/magic8ball">Repository - https://github.com/Aelof3/magic8ball</a>
                </p>
                <ul>
                    <li><strong>Name:</strong>Magic 8 Ball - Online</li>
                    <li><strong>Description:</strong>Full stack magic 8 ball application</li>
                    <li><strong>Why It Was Built:</strong>My third capstone project with Thinkful</li>
                    <li><strong>Technologies (front end):</strong>React and CSS 3D transforms</li>
                    <li><strong>Technologies (back end):</strong>Node, Express, and Postgresql</li>
                    <li><strong>Intended Audience:</strong>People looking for a cheap fortune</li>
                </ul>
                <CSSButton href="https://magic-8.vercel.app/" text="Live Demo" />
             </>
        );
    }
}