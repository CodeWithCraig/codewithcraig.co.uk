import React from 'react';
import Link from 'gatsby-link';
import Logo from '../images/logo.png';
import Down from '../images/down.png';
import Me from '../images/me.jpg';
import Code from '../images/code.png';

export default class IndexPage extends React.Component {
  componentDidMount() {
    try {
      const WOW = require('wowjs').WOW;
      new WOW().init();
    } catch (e) {}
  }

  render() {
    return (
      <div>
        <div id='home' className='hero hero--fixed'>
          <img className='logo' src={Logo} alt='' />
          <a className='hero__more wow animated bounce' href='#about'>
            <img src={Down} alt='' />
          </a>
        </div>
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
                  <p>Want to learn how to code? I'd love to teach you!</p>
                  <p>I've been mentoring junior developers for over 3 years which has given me a number of good techniques for teaching inexperienced programmers new weapons (I like to think of my skills as weapons..).</p>
                  <p>Here's what you can expect:</p>
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
        <div id='services' className='hero hero--green island'>
          <div className='island-item wrap'>
            <div className='services content'>
              <h1>Services</h1>
              <p>If you're interested in working together on a website for your business, then let's definitely have a chat!</p>
              <div className='grid grid--three'>
                <div className="pricing wow animated pulse">
                  <div className="pricing__item">
                    <h3 className="pricing__title">Basic</h3>
                    <p className="pricing__sentence">Single static page</p>
                    <div className="pricing__price"><span className="pricing__currency">£</span>15<span className="pricing__period">/ hr</span></div>
                    <ul className="pricing__feature-list">
                      <li className="pricing__feature"><span className="icon icon--chart-bars"></span>Basic single page website</li>
                      <li className="pricing__feature"><span className="icon icon--chart-bars"></span>Hosting setup provided</li>
                      <li className="pricing__feature"><span className="icon icon--bubble"></span>Free in-hours support (9-5)</li>
                    </ul>
                    <p className='pricing__footnote'>* Price subject to consultation</p>
                    <a className="pricing__action button">Get in touch</a>
                  </div>
                  <div className="pricing__item pricing__item--featured">
                    <h3 className="pricing__title">Standard</h3>
                    <p className="pricing__sentence">Dynamic site with <br /> server & database</p>
                    <div className="pricing__price"><span className="pricing__currency">£</span>20<span className="pricing__period">/ hr</span></div>
                    <ul className="pricing__feature-list">
                      <li className="pricing__feature"><span className="icon icon--bubble"></span>Multi page website</li>
                      <li className="pricing__feature"><span className="icon icon--chart-bars"></span>Server & database setup</li>
                      <li className="pricing__feature"><span className="icon icon--rocket"></span>Free in-hours support (9-5)</li>
                    </ul>
                    <p className='pricing__footnote'>* Monthly server costs not included</p>
                    <a className="pricing__action button">Get in touch</a>
                  </div>
                  <div className="pricing__item">
                    <h3 className="pricing__title">Enterprise</h3>
                    <p className="pricing__sentence">For larger ventures</p>
                    <div className="pricing__price"><span className="pricing__currency">£</span>??<span className="pricing__period">/ hr</span></div>
                    <ul className="pricing__feature-list">
                      <li className="pricing__feature"><span className="icon icon--chart-bars"></span>Costs depend on complexity</li>
                      <li className="pricing__feature"><span className="icon icon--bubble"></span>Requires consultation</li>
                      <li className="pricing__feature"><span className="icon icon--rocket"></span>Free support</li>
                    </ul>
                    <p className='pricing__footnote'>* Price subject to consultation</p>
                    <a className="pricing__action button">Get in touch</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
