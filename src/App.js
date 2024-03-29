import React, { Component } from 'react';
import './App.css';

import Background from './components/Background/Background';
import CSSCarousel from './components/CSSComponents/Carousel/CSSCarousel';
import CSSCarouselControls from './components/CSSComponents/Carousel/CSSCarouselControls';
import CSSCarouselControlsLabels from './components/CSSComponents/Carousel/CSSCarouselControlsLabels';

export default class App extends Component {
  render(){
    return (
      <div className="App">
        <Background />
        <CSSCarouselControls>
          <CSSCarousel />
          <CSSCarouselControlsLabels />
        </CSSCarouselControls>
      </div>
    );
  }
}