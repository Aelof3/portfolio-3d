import React, { Component } from 'react';
import CSSButton from '../Parts/CSSButton';
import img from '../../../images/maze.jpg';

export default class CSSCarouselPanelProjectMAZE extends Component {
    render() {
        return (
            <>
                <img alt="" src={img} />
                <p>
                    <a target="_blank" rel="noreferrer" href="https://github.com/Aelof3/threejs_maze_texture">Repository - https://github.com/Aelof3/threejs_maze_texture</a>
                </p>
                <ul>
                    <li><strong>Name:</strong>3D Maze Texture Generator</li>
                    <li><strong>Description:</strong>Maze texture generation application</li>
                    <li><strong>Why It Was Built:</strong>I Challenged myself to see if I could make it happen</li>
                    <li><strong>Technologies:</strong>Uses three.js</li>
                    <li><strong>Intended Audience:</strong>People looking to generate 3D maze textures for HTML canvas projects</li>
                </ul>
                <CSSButton href="https://aelof3.github.io/threejs_maze_texture/" text="Live Demo" />
            </>
        );
    }
}