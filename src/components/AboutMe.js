import React, { Component } from 'react';

export default class AboutMe extends Component {
    render() {
        return (
            <section>
                <h2 id="aboutme"><img alt="h2 icon bullet" className="icon--paint" src="favicon.ico" />About Me</h2>

                <div className="section-row">
                    <div className="section-column">
                        <fieldset id="aboutme-info">
                            <legend><h3>Info</h3></legend>
                            <p>I am a learning enthusiast. I enjoy picking up new skills and brain teasers. If I do not know something,
                                I will obsess until I get to the point where I can explain a subject matter to an elementary school
                                student. Anything less is not good enough.</p>
                            <p>My passions include:</p>
                            <ul>
                                <li>Software Development</li>
                                <li>Ethical Hacking and Bug Bounty hunting</li>
                                <li>Helping others in an effort to pursue knowledge</li>
                                <li>Spending time with my girlfriend and dog</li>
                            </ul>
                            <p>Software Languages:</p>
                            <ul>
                                <li>Javascript / HTML / CSS, C#, Java, Python, Ruby, C++, Bash shell scripting, Go</li>
                            </ul>
                        </fieldset>
                    </div>

                    <div className="section-column">
                        <fieldset id="certification">
                            <legend><h3>Certification</h3></legend>
                            <ul>
                                <li className="cert">
                                    <div data-iframe-width="150" data-iframe-height="270"
                                        data-share-badge-id="25db4f5e-c6eb-406a-a661-7529a44d5d46"
                                        data-share-badge-host="https://www.youracclaim.com"></div>
                                    <script async
                                        src="//cdn.youracclaim.com/assets/utilities/embed.js"></script>
                                </li>
                            </ul>
                        </fieldset>
                    </div>
                </div>
            </section>
        );
    }
}