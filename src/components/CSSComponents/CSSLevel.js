import React, { Component } from 'react';
import './level.css';
import { platforms } from './level-platforms';

export default class CSSLevel extends Component {
    state = {
        size: "3vw",
        platforms: platforms.p1,
        txY: 10,
        txX: 0,
        txR: 0,
        tx: `rotateX(60deg) rotateY(0deg) translateY(100px) translateX(0px)`,
        keys: {
            up: false,
            down: false,
            left: false,
            right: false,
        },
        move: null
    }

    createPlatforms = () => {

        let plats = [];
        const platMatrix = this.state.platforms;

        platMatrix.forEach((platformArray,i)=>{
            platformArray.forEach((platform,idx)=>{
                if ( platform === " " ) return;
                const xcoord = idx;
                const ycoord = i;
                const txf = `translateX(calc((${xcoord - (platformArray.length / 2)}) * ${this.state.size})) translateY(calc((${ycoord - (platMatrix.length / 2)}) * ${this.state.size})) translateZ(0px)`;
                const styles = {
                    transform: txf,
                    //width: `calc(${this.state.size} - ${this.state.size}/10)`,
                    width: `${this.state.size}`,
                    //height: `calc(${this.state.size} - ${this.state.size}/10)`,
                    height: `${this.state.size}`,
                }
                const chk = <input type="checkbox" name="test123" key={`${idx}${i}${platform}${Math.random()}`} className="css-level-platform" style={styles} />
                const rad = <input type="radio" name="test123" key={`${idx}${i}${platform}${Math.random()}`} className="css-level-platform" style={styles} />

                const o = platform === "h" ? "horiz" : platform === "v" ? "vert" : "open";

                const w = platform === "b" ? "bot" : platform === "t" ? "top" : platform === "l" ? "left" : platform === "r" ? "right" : "open";

                const c = platform === "1" ? "one" : platform === "2" ? "two" : platform === "3" ? "three" : platform === "4" ? "four" : "open"
                const dv = <div key={`${idx}${i}${platform}${Math.random()}`} className={`css-level-platform plat-${o} wall-${w} corner-${c}`} style={styles} />

                const plat = dv;
                plats.push(plat);
            });
        });
        return plats;

    }

    render() {
        const xyStyle = {
            transform: `rotateX(-30deg) translateZ(${this.state.txY}px) translateX(0px)`,
        }
        const rotStyle = {
            transform: `rotateX(90deg) rotateZ(${this.state.txR}deg)`,
        }

        return (
            <div className="css-level"  style={xyStyle} >
                <div className="css-level-rotate" style={rotStyle}>
                    {this.createPlatforms()}
                </div>
            </div>
        );
    }
}