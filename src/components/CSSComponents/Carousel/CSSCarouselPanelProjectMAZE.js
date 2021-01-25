import React, { Component } from 'react';
import CSSButton from '../Parts/CSSButton';
import img from '../../../images/maze.jpg';

export default class CSSCarouselPanelProjectMAZE extends Component {
    render() {
        return (
            <>
                <img alt="" src={img} />
                <p>
                    <a href="https://github.com/Aelof3/threejs_maze_texture">3D Maze Texture Generator - https://github.com/Aelof3/threejs_maze_texture</a>
                </p>
                <ul>
                    <li>Created a maze generator using Three.js</li>
                    <li>Uses three.js</li>
                </ul>
                <CSSButton href="https://aelof3.github.io/threejs_maze_texture/" text="Live Demo" />
            </>
        );
    }
}