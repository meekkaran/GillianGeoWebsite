import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <img className="image"  src="./images/us.jpg"/>
            <h1> IAM A NATIONAL GEOGRAPHIC EXPLORER</h1>
            <p>Welcome to my hodophile world < br />Let's explore the places that i will travel </p>
            <div className="hero-btns">
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                   > 
                    GET STARTED
                </Button>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                   > 
                    WATCH MY VIDEOS <i className="far
                     fa-play-circle" />
                </Button>
            
            </div>
        </div>
    );
}

export default HeroSection
