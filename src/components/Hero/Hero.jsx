import React from 'react';
import './Hero.scss';
import Image1 from '../../Images/test.jpg';
const Hero = () => {
  return (
    <>
      <div className="hero-wrapper">
          <img src={Image1} alt="" className="image" />

      </div>
    </>
  );
};
export default Hero;
