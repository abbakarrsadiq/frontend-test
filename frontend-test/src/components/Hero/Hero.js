import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Hero.css';
import Property1 from '../Hero/Image.png';
import Property2 from '../Hero/Image1.png';
import Property3 from '../Hero/Image2.png';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>SINC Partners is a service incubation company</h1>
        <p>
          Connecting experts in product development and growth marketing willing to offer their
          services to amazing startups in exchange for minute equity (usually 0.5% to 2%).
        </p>
        <button className="hero-button">SINC With Us</button>
      </div>
      <div className="hero-carousel">
        <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay>
          <div>
            <img src={Property1} alt="Slide 1" />
          </div>
          <div>
            <img src={Property2} alt="Slide 2" />
          </div>
          <div>
            <img src={Property3} alt="Slide 3" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Hero;
