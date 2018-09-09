import React from 'react';
import Link from 'gatsby-link';
import Home from '../components/home';
import About from '../components/about';
import Tutoring from '../components/tutoring';
import Services from '../components/services';
import Contact from '../components/contact';

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
        <Home />
        <About />
        <Tutoring />
        <Services />
        <Contact />
      </div>
    );
  }
}
