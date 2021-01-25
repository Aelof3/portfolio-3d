import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
             <header className="header">
                 <h1 id="title">Richard Folea - Portfolio</h1>
                <span class="credits left">Project maintained by <a href="https://github.com/Aelof3">Aelof3</a></span>
                <nav>
                    <ul>
                        <li><a href="#intro">Intro</a></li>
                        <li><a href="#aboutme">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact-form">Contact</a></li>
                    </ul>
                </nav>
             </header>
        );
    }
}