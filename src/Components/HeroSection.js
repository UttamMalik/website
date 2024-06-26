import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    const title = "ADVENTURE AWAITS";
  return (
      <div className='hero-container'>
          {/*<video src='/videos/video-1.mp4' autoPlay loop muted />*/}
          <img src='/images/home.jpg'/>
          {/*<h1>ADVENTURE AWAITS</h1>*/}
          {/*<h1 className='flip'>ADVENTURE AWAITS</h1>*/}
          <h1>
              {title.split("").map((char, index) => (
                  <span key={index} className='flip-char' style={{animationDelay: `${index * 0.5}s`}}>
            {char}
          </span>
              ))}
          </h1>
          <p>What are you waiting for?</p>
          <div className='hero-btns'>
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
                  onClick={console.log('hey')}
              >
                  WATCH TRAILER <i className='far fa-play-circle'/>
              </Button>
          </div>
      </div>
  );
}

export default HeroSection;
