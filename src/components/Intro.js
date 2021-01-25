import React, { Component } from 'react';

export default class Intro extends Component {
    render() {
        return (
            <section>
                <h3 id="intro"><img alt="h2 icon bullet" className="icon--paint" src="favicon.ico" /> Intro</h3>
                <blockquote>
                    <p>My name is Richard Folea</p>
                    <p>I am a self taught software developer as well as self taught and OSCP certified ethical hacker</p>
                    <p>I live just north of Atlanta, GA</p>
                    <p>My interests include anything that involves critical thinking and problem solving. I am a firm believer
                        in the idea that nothing is impossible, with the right mindset and attitude</p>
                </blockquote>
            </section>
        );
    }
}