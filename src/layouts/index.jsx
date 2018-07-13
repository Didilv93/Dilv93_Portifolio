import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const IndexLayout = ({ children }) => (
  <div>
    <Helmet
      title="Portfólio"
      htmlAttributes={{ lang: 'pt-br', dir: 'ltr' }}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
      link={[
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Lato',
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
