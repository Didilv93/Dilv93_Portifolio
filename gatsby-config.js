module.exports = {
  siteMetadata: {
    title: 'Portfolio',
  },
  plugins: [
    // 'gatsby-plugin-netlify-cms',
    'gatsby-plugin-sass',
    'gatsby-plugin-typography',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-json',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data/`,
      },
    },
  ],
}
