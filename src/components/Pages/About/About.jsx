import React from 'react';
import { AboutTitle, AboutWrapper } from './AboutElements';
const About = () => {
  return (
    <>
      <AboutWrapper>
        <AboutTitle>About This App</AboutTitle>
        <p>
          React App that calls the unsplash.js API to display Images from
          unsplash !
        </p>
      </AboutWrapper>
    </>
  );
};
export default About;
