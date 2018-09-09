import React from 'react'
import Code from '../images/code.png';

const Tutoring = () => (
  <div id='tutoring' className='hero island'>
    <div className='island-item wrap'>
      <div className='content'>
        <div className='about grid grid--two'>
          <div className='about__image grid-item'>
            <div className='about__image-wrapper wow animated bounceInLeft'>
              <img src={Code} alt='' />
            </div>
          </div>
          <div className='grid-item'>
            <h1>Tutoring</h1>
            <p>Want to learn how to code? I would love to teach you!</p>
            <p>I have been mentoring junior developers for over 3 years and in that time I have developed a number of good techniques for teaching inexperienced programmers new weapons (I like to think of my skills as weapons..).</p>
            <p>Here is what you can expect:</p>
            <ul>
              <li>
                <p>Exposure to cutting edge technology (that we are using at the BBC!).</p>
              </li>
              <li>
                <p>Super laid back sessions (including via Skype if you don't want to travel).</p>
              </li>
              <li>
                <p>Fun projects we can work on together.</p>
              </li>
            </ul>
            <p>
              <a className='button' href='mailto:code@craigharvie.me?subject=Tutoring'>Get in touch</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Tutoring
