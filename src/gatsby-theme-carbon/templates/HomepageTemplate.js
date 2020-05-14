import React from 'react';
import { HomepageBanner, HomepageCallout, Grid, Row, Column } from 'gatsby-theme-carbon';
import Carbon from '../../images/carbon.jpg';

import Layout from 'gatsby-theme-carbon/src/components/Layout';
import Main from 'gatsby-theme-carbon/src/components/Main';

import BackToTopBtn from 'gatsby-theme-carbon/src/components/BackToTopBtn';
import NextPrevious from 'gatsby-theme-carbon/src/components/NextPrevious';

import { mainContent, posts } from './Homepage.module.scss';


const Homepage = ({
  children,
  Banner,
  FirstCallout,
  SecondCallout,
  BlogSection,
  RequestDemoSection,
  QuoteSection,
  location,
  pageContext,
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
      {Banner}
      <Main className={mainContent}>
        <h1>
          Next Generation EDI for Cutting Edge Logistics
        </h1>
        <p>
          From 100% Complete Digital Workflow to Supporting Paper-based documents, the Freight Trust Platform works for 100% of your customers, even hazardous material shippments or ITAR Export Controlled Goods.
        </p>
        <a href="#">LEARN MORE ABOUT OUR EDI SERVICE</a>
      </Main>

      <div className={posts}>
        {BlogSection}
      </div>

      {RequestDemoSection}
      {QuoteSection}
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
