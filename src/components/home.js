import React from 'react'
import Logo from '../images/logo.png'
import Down from '../images/down.png';

const Home = () => (
  <div id='home' className='hero hero--fixed'>
    <img className='logo' src={Logo} alt='' />
    <a className='hero__more wow animated bounce' href='#about'>
      <img src={Down} alt='' />
    </a>
  </div>
)

export default Home
