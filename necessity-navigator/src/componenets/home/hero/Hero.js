import React from 'react';
import './Hero.css';

const Hero = ({ scrollToServices }) => {
    return (
        <div className="hero">
            <img src="https://th.bing.com/th/id/OIG1.TUyIx4DH.voZM1X9lpaP?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="Hero" />
            <div className="heroText">
                <h1>Your One-Stop Solution for Essential Services</h1>
                <p>Find reliable information on healthcare, education, transport, and banking all in one place.</p>
                <button className="cta" onClick={scrollToServices}>Get Started</button>
            </div>
        </div>
    );
};

export default Hero;
