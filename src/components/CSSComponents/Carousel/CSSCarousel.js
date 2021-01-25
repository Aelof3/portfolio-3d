import React, { Component } from 'react';
import CSSCarouselPanel from './CSSCarouselPanel';
import CSSCarouselPanelAbout from './CSSCarouselPanelAbout';
import CSSCarouselPanelContact from './CSSCarouselPanelContact';
import CSSCarouselPanelIntro from './CSSCarouselPanelIntro';
import CSSCarouselPanelProjectDUCKDRONE from './CSSCarouselPanelProjectDUCKDRONE';
import CSSCarouselPanelProjectHMONG from './CSSCarouselPanelProjectHMONG';
import CSSCarouselPanelProjectMAGIC8BALL from './CSSCarouselPanelProjectMAGIC8BALL';
import CSSCarouselPanelProjectMAZE from './CSSCarouselPanelProjectMAZE';
import CSSCarouselPanelProjectPLANET from './CSSCarouselPanelProjectPLANET';
import CSSCarouselPanelProjectWAM from './CSSCarouselPanelProjectWAM';

export default class CSSCarousel extends Component {
   render() {
      return (
         <div className="css-carousel">
            <div className="css-carousel-wrap">
               <CSSCarouselPanel header="Intro" >
                  <CSSCarouselPanelIntro />
               </CSSCarouselPanel>

               <CSSCarouselPanel header="About" >
                  <CSSCarouselPanelAbout />
               </CSSCarouselPanel>

               <CSSCarouselPanel header="Whack-a-Mole" >
                  <CSSCarouselPanelProjectWAM />
               </CSSCarouselPanel>

               <CSSCarouselPanel header="DuckDrone" >
                  <CSSCarouselPanelProjectDUCKDRONE />
               </CSSCarouselPanel>

               <CSSCarouselPanel header="Maze Texture" >
                  <CSSCarouselPanelProjectMAZE />
               </CSSCarouselPanel>

               <CSSCarouselPanel header="Planet Hopper" >
                  <CSSCarouselPanelProjectPLANET />
               </CSSCarouselPanel>

               <CSSCarouselPanel header="Spaced Repetition - Hmong" >
                  <CSSCarouselPanelProjectHMONG />
               </CSSCarouselPanel>

               <CSSCarouselPanel header="Magic 8 Ball" >
                  <CSSCarouselPanelProjectMAGIC8BALL />
               </CSSCarouselPanel>

               <CSSCarouselPanel header="Contact" >
                  <CSSCarouselPanelContact />
               </CSSCarouselPanel>
            </div>
         </div>
      );
   }
}