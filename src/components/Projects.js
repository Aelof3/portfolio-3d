import React, { Component } from 'react';

export default class Projects extends Component {
    render() {
        return (
            <section>
                <h2 id="projects"><img alt="h2 icon bullet" className="icon--paint" src="favicon.ico" /> Projects</h2>

                <div className="section-column">
                    <h3 id="javascript">Javascript</h3>
                    <ol id="javascript-projects">
                        <li>
                            <p>
                                <a href="https://github.com/Aelof3/planets/">Planet Hopping Game</a>
                            </p>
                            <ul>
                                <li>Wanted to learn a bit about 3D in browsers, as well as WebGL.</li>
                                <li>Uses three.js and cannon.js</li>
                                <li><a href="https://aelof3.github.io/planets/">Live Demo</a></li>
                            </ul>
                        </li>

                        <li>
                            <p>
                                <a href="https://github.com/Aelof3/DuckDrone/">A hard game of fighting physics with a duck</a>
                            </p>
                            <ul>
                                <li>Had an idea, and wanted to see if I could figure out a way to do it.</li>
                                <li>Uses three.js and cannon.js</li>
                                <li><a href="https://aelof3.github.io/DuckDrone/">Live Demo</a></li>
                            </ul>
                        </li>

                        <li>
                            <p>
                                <a href="https://github.com/Aelof3/threejs_maze_texture">3D Maze Texture Generator</a>
                            </p>
                            <ul>
                                <li>Created a maze generator using Three.js</li>
                                <li>Uses three.js</li>
                                <li><a href="https://aelof3.github.io/threejs_maze_texture/">Live Demo</a></li>
                            </ul>
                        </li>
                    </ol>
                </div>
            </section>
        );
    }
}