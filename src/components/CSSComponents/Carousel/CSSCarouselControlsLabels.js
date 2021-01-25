import React, { Component } from 'react';

export default class CSSCarouselControlsLabels extends Component {
    render() {
        return (
            <div className="css-carousel-controls-labels">
                <label htmlFor="panel-1" >Intro</label>
                <label htmlFor="panel-2" >About</label>
                <label htmlFor="panel-3" >Project: Whack-A-Mole 3D</label>
                <label htmlFor="panel-4" >Project: Duck Drone</label>
                <label htmlFor="panel-5" >Project: Maze Texture</label>
                <label htmlFor="panel-6" >Project: Planet Hopper</label>
                <label htmlFor="panel-7" >Project: Spaced Repetition</label>
                <label htmlFor="panel-8" >Project: Magic 8 Ball</label>
                <label htmlFor="panel-9" >Contact</label>
            </div>
        );
    }
}