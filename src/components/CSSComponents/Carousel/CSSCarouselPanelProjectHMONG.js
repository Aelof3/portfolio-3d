import React, { Component } from 'react';
import CSSButton from '../Parts/CSSButton';
import img from '../../../images/spacedrepetition.jpg';

export default class CSSCarouselPanelProjectHMONG extends Component {
    render() {
        return (
             <>
                <img alt="" src={img} />
                <p>
                    <a href="https://github.com/Aelof3/spaced-repetition">Repository - https://github.com/Aelof3/spaced-repetition</a>
                </p>
                <ul>
                    <li><strong>Name:</strong>Spaced Repetition - Learning Hmong</li>
                    <li><strong>Description:</strong>Full stack language (Hmong) learning application</li>
                    <li><strong>Why It Was Built:</strong>Created for my second capstone project with Thinkful</li>
                    <li><strong>Technologies (front end):</strong>React and CSS</li>
                    <li><strong>Technologies (back end):</strong>Node, Express, and Postgresql</li>
                    <li><strong>Intended Audience:</strong>People interested in learning 20 new Hmong words</li>
                </ul>
                <CSSButton href="https://spaced-repetition-eight.vercel.app/" text="Live Demo" />
             </>
        );
    }
}