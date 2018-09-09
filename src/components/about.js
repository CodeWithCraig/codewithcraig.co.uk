import React from 'react'
import Me from '../images/me.jpg';

const About = () => (
  <div id='about' className='hero hero--green island'>
    <div className='island-item wrap'>
      <div className='content'>
        <div className='about grid grid--reversed-on-mobile grid--two'>
          <div className='grid-item'>
            <h1>About me</h1>
            <p>Hello! I'm Craig.</p>
            <p>I live in Moffat, Scotland - working as a Senior Software Engineer for the <a href='https://bbc.co.uk'>BBC</a>.</p>
            <p>I've been developing websites for more than 5 years now and can honestly say I love it more now than I ever have.</p>
            <p><b>Code With Craig</b> was set up to help get more people from Dumfries & Galloway involved in Software Engineering (and hopefully discover some talented people to work with).</p>
            <p>
              <a className='button button--white' href='#tutoring'>Find out more</a>
            </p>
          </div>
          <div className='about__image grid-item'>
            <div className='about__image-wrapper wow animated bounceInRight'>
              <img src={Me} alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default About
