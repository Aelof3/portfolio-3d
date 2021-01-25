import React, { Component } from 'react';
import './about.css';

export default class CSSCarouselPanelAbout extends Component {
    render() {
        return (
            <div className="about-wrap">
                <ul>
                    <li>
                        <div className="about-wrap-list-content">
                            <h3>Info</h3>
                            <p>I am a learning enthusiast. I enjoy picking up new skills and brain teasers. If I do not know something,
                                I will obsess until I get to the point where I can explain a subject matter to an elementary school
                                student. Anything less is not good enough.</p>
                            <p>Coding is a great example of something that I can always learn more about. This is probably why I enjoy it so much.</p>
                            <p>I am also a fiend for debugging, and well known among friends for being the go-to guy for help. I like to spend as much
                                time as I can helping fresh coding minds, and watching their ambition grow.</p>
                        </div>
                    </li>
                    <li>
                        <div className="about-wrap-list-content">
                            <h3>My passions include:</h3>
                            <ul>
                                <li>Software Development</li>
                                <li>Ethical Hacking and Bug Bounty hunting</li>
                                <li>Helping others in an effort to pursue knowledge</li>
                                <li>Spending time with my girlfriend and dog</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className="about-wrap-list-content">
                            <h3>Software Languages:</h3>
                            <ul>
                                <li>React, Node, Express, SQL, HTML / CSS, JS, C#, Java, Python, Ruby, C++, BASH, Go</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className="about-wrap-list-content">
                            <h3>Certification</h3>
                            <a className="css-button arrow cert-url" href="https://www.youracclaim.com/badges/25db4f5e-c6eb-406a-a661-7529a44d5d46/public_url">Link to Certification</a>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}