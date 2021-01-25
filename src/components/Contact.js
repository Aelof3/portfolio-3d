import React, { Component } from 'react';

export default class Contact extends Component {
    render() {
        return (
            <section>
                <h2>Contact</h2>

                <form id="contact-form" action="https://formspree.io/xoqkgpgz" method="POST">
                    <div className="section-row">
                        <label className="label-input-text" htmlFor="user-name">Name:<input id="user-name" type="text" name="name" /></label>
                        <label className="label-input-text" htmlFor="user-email">Email:<input id="user-email" type="text" name="email" /></label>
                    </div>
                    <label htmlFor="user-message">Message:</label>
                    <textarea id="user-message" name="message"></textarea>
                    <button type="submit">Submit</button>
                </form>
            </section>
        );
    }
}