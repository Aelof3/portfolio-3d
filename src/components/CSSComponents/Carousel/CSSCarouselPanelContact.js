import React, { Component } from 'react';
import img from '../../../images/contact.jpg';
import './contact.css';

export default class CSSCarouselPanelContact extends Component {
    render() {
        return (
             <form id="contact-form" action="https://formspree.io/xoqkgpgz" method="POST">
                 <img alt="" src={img} />
                <div className="contact-section-column">
                    <label className="label-input-text" htmlFor="user-name">Name:</label>
                    <input id="user-name" type="text" name="name" />
                </div>
                <div className="contact-section-column">
                    <label className="label-input-text" htmlFor="user-email">Email:</label>
                    <input id="user-email" type="email" name="email" />
                </div>
                <div className="contact-section-column">
                    <label htmlFor="user-message">Message:</label>
                    <textarea id="user-message" name="message"></textarea>
                </div>
                <button className="css-button arrow" type="submit">Submit</button>
            </form>
        );
    }
}