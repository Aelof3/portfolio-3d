import React, { Component } from 'react';
import './intro.css';
import loc from '../../../images/location.jpg';
import me from '../../../images/me.jpg';

export default class CSSCarouselPanelIntro extends Component {
    render() {
        return (
            <div className="intro-wrap">
                <img alt="" src={me} />
                <ul>
                    <li><strong>NAME:</strong>Richard Folea</li>
                    <li><strong>DESCRIPTION:</strong>I am a self taught software developer as well as self taught and OSCP certified ethical hacker</li>
                    <li>
                        <div className="intro-wrap-list-content-column">
                            <p><strong>LOCATION:</strong>I live just north of Atlanta, GA</p>
                            <img alt="" src={loc} className="intro-location-image" />
                        </div>
                    </li>
                    <li>
                        <div className="intro-wrap-list-content-column">
                            <p><strong>INTERESTS:</strong></p>
                            <ul className="intro-wrap-list-content-interests">
                                <li>
                                    <svg className="icon icon-keyboard" id="icon-keyboard" viewBox="0 0 36 32">
                                        <path d="M34 4h-32c-1.1 0-2 0.9-2 2v20c0 1.1 0.9 2 2 2h32c1.1 0 2-0.9 2-2v-20c0-1.1-0.9-2-2-2zM20 8h4v4h-4v-4zM26 14v4h-4v-4h4zM14 8h4v4h-4v-4zM20 14v4h-4v-4h4zM8 8h4v4h-4v-4zM14 14v4h-4v-4h4zM4 8h2v4h-2v-4zM4 14h4v4h-4v-4zM6 24h-2v-4h2v4zM24 24h-16v-4h16v4zM32 24h-6v-4h6v4zM32 18h-4v-4h4v4zM32 12h-6v-4h6v4z"></path>
                                    </svg>
                                    <p>Software Development</p>
                                </li>
                                <li>
                                    <svg className="icon icon-terminal" id="icon-terminal" viewBox="0 0 32 32">
                                        <path d="M0 2v28h32v-28h-32zM30 28h-28v-24h28v24zM28 6h-24v20h24v-20zM14 16h-2v2h-2v2h-2v-2h2v-2h2v-2h-2v-2h-2v-2h2v2h2v2h2v2zM22 20h-6v-2h6v2z"></path>
                                    </svg>
                                    <p>Ethical Hacking</p>
                                </li>
                                <li>
                                    <svg className="icon icon-books" id="icon-books" viewBox="0 0 36 32">
                                        <path d="M7 4h-6c-0.55 0-1 0.45-1 1v22c0 0.55 0.45 1 1 1h6c0.55 0 1-0.45 1-1v-22c0-0.55-0.45-1-1-1zM6 10h-4v-2h4v2z"></path>
                                        <path d="M17 4h-6c-0.55 0-1 0.45-1 1v22c0 0.55 0.45 1 1 1h6c0.55 0 1-0.45 1-1v-22c0-0.55-0.45-1-1-1zM16 10h-4v-2h4v2z"></path>
                                        <path d="M23.909 5.546l-5.358 2.7c-0.491 0.247-0.691 0.852-0.443 1.343l8.999 17.861c0.247 0.491 0.852 0.691 1.343 0.443l5.358-2.7c0.491-0.247 0.691-0.852 0.443-1.343l-8.999-17.861c-0.247-0.491-0.852-0.691-1.343-0.443z"></path>
                                    </svg>
                                    <p>Learning</p>
                                </li>
                            </ul>
                        </div>
                    </li>

                </ul>
            </div>
        );
    }
}