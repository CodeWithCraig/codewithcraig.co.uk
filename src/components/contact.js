import React from 'react'
import Facebook from '../images/facebook.svg'
import Twitter from '../images/twitter.svg'
import Youtube from '../images/youtube.svg'
import Github from '../images/github.svg'
import Email from '../images/email.svg'

const Contact = () => (
  <div id='contact' className='hero island'>
    <div className='island-item wrap'>
      <div className='content'>
        <div className='contact about grid grid--two'>
          <div className='grid-item'>
            <h1>Contact me</h1>
            <p>I'm available on all the major socials, well, <a href='https://www.facebook.com/CodeWithCraig'>Facebook</a> & <a href='https://twitter.com/CodeWithCraig'>Twitter</a>.</p>
            <p>I'll also be publishing a number of video tutorials on Youtube, so go ahead and subscribe if you're feeling kind: <a href='https://www.youtube.com/CodeWithCraig'>https://www.youtube.com/CodeWithCraig</a>.</p>
            <p>If you're not on any of the socials, but still want to get in touch, then drop me an email at <a href='mailto:code@craigharvie.me?subject=Hello!'>code@craigharvie.me</a></p>
          </div>
          <div className='about__image grid-item'>
            <div className='wow animated bounceInRight'>
              <ul className='socials grid grid--two grid--wrap grid--fixed'>
                <li className='grid-item'>
                  <a href='https://www.facebook.com/CodeWithCraig' title='@CodeWithCraig on Facebook'>
                    <img src={Facebook} alt='' />
                  </a>
                </li>
                <li className='grid-item'>
                  <a href='https://twitter.com/CodeWithCraig' title='@CodeWithCraig on Twitter'>
                    <img src={Twitter} alt='' />
                  </a>
                </li>
                <li className='grid-item'>
                  <a href='https://www.youtube.com/CodeWithCraig' title="Code With Craig's Youtube channel">
                    <img src={Youtube} alt='' />
                  </a>
                </li>
                <li className='grid-item'>
                  <a href='https://github.com/CodeWithCraig' title='@CodeWithCraig on GitHub'>
                    <img src={Github} alt='' />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Contact
