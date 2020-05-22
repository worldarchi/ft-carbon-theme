import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import Carbon from '../../images/carbon.jpg';

import Layout from 'gatsby-theme-carbon/src/components/Layout';
import Main from 'gatsby-theme-carbon/src/components/Main';

import BackToTopBtn from 'gatsby-theme-carbon/src/components/BackToTopBtn';

import { mainContent } from './Homepage.module.scss';

const Homepage = ({
  pageContext,
  children,
}) => {
  const { frontmatter = {}, titleType } = pageContext;
  const { title, description, keywords } = frontmatter;
  return (
    <Layout
      pageTitle={title}
      pageDescription={description}
      pageKeywords={keywords}
      titleType={titleType}
      homepage
      theme="dark"
    >

      <Main className={mainContent}>{children}</Main>

      <BackToTopBtn />
    </Layout>
  );
};
Homepage.defaultProps = {
  Banner: (
    <HomepageBanner
      renderText={() => (
        <h1>
          Carbon
          <br />
          Design System
        </h1>
      )}
      image={Carbon}
    />
  ),
  FirstCallout: <HomepageCallout />,
  SecondCallout: (
    <HomepageCallout color="inverse01" backgroundColor="#061f80" />
  ),
};

export default Homepage;
