module.exports = {
  siteMetadata: {
    title: 'Code With Craig',
  },
  plugins: [
  	'gatsby-plugin-react-helmet',
  	'gatsby-plugin-sass',
  	{
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Karla\:400,700`,
          `Spectral\:400,700`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/images/favicon.png"
      }
    }
  ]
}
