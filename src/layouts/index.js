import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import OG from '../images/og.png';
import Header from '../components/header'
import '../sass/index.scss'

const getMetaTags = () => {
  return [
    { name: 'description', content: 'Dumfries & Galloway web development freelancer & tutor' },
    { name: 'keywords', content: 'code, with, craig' },
    { name: 'author', content: 'Code With Craig' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@CodeWithCraig' },
    { name: 'twitter:title', content: 'Code With Craig' },
    { name: 'twitter:description', content: 'Dumfries & Galloway web development freelancer & tutor' },
    { name: 'twitter:image', content: `https://code.craigharvie.me${OG}` },
    { property: 'og:title', content: 'Code With Craig' },
    { property: 'og:site_name', content: 'Code With Craig' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://code.craigharvie.me' },
    { property: 'og:description', content: 'Dumfries & Galloway web development freelancer & tutor' },
    { property: 'og:image', content: `https://code.craigharvie.me${OG}` },
    { property: 'og:site_name', content: 'Code With Craig' }
  ];
}

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={`${data.site.siteMetadata.title} | Dumfries & Galloway web development freelancer & tutor`}
      meta={getMetaTags()}
    />
    <div>
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
