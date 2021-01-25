import React, { Component } from 'react';
import CSSButton from '../Parts/CSSButton';
import img from '../../../images/spacedrepetition.jpg';

export default class CSSCarouselPanelProjectHMONG extends Component {
    render() {
        return (
             <>
                <img alt="" src={img} />
                <p>
                    <a href="https://github.com/Aelof3/spaced-repetition">Spaced Repetition Language Learning App - https://github.com/Aelof3/spaced-repetition</a>
                </p>
                <ul>
                    <li>Created a full stack language (Hmong) learning application</li>
                    <li>Uses React and CSS for the front end</li>
                    <li>Uses Node, Express, and Postgresql for the back end</li>
                </ul>
                <CSSButton href="https://spaced-repetition-eight.vercel.app/" text="Live Demo" />
             </>
        );
    }
}