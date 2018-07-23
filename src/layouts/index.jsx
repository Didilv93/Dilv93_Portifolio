import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Favicon from '../../static/img/icons/favicon.png'

const IndexLayout = ({ children }) => (
  <div>
    <Helmet
      title="Portfólio"
      htmlAttributes={{ lang: 'pt-br', dir: 'ltr' }}
      meta={[
        { name: 'description', content: 'Portfólio' },
        { name: 'keywords', content: 'sample, something' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0'}
      ]}
      link={[
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Lato',
        },
        {
          rel: 'shortcut icon',
          href: Favicon,
        }
      ]}
    />
    {children()}
  </div>
);

IndexLayout.propTypes = {
  children: PropTypes.func.isRequired,
};

export default IndexLayout;
