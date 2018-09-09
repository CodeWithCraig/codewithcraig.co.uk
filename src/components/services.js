import React from 'react'

const Services = () => (
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
)

export default Services
