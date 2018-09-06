import React from 'react'
import Link from 'gatsby-link'
import Logo from '../images/logo.png';

const Header = () => (
  <header className='header'>
    <Link to="/">
      <img src={Logo} alt='' />
    </Link>
  </header>
)

export default Header
