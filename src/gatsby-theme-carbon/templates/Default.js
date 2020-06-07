import React from 'react';

import Layout from 'gatsby-theme-carbon/src/components/Layout';
import PageHeader from 'gatsby-theme-carbon/src/components/PageHeader';
import Main from 'gatsby-theme-carbon/src/components/Main';
import {mainContent} from './Default.module.scss';

const Default = ({ pageContext, children, location, Title }) => {
  const { frontmatter = {}, titleType } = pageContext;
  const { tabs, title, theme, description, keywords } = frontmatter;

  return (
    <Layout
      tabs={tabs}
      homepage={false}
      theme={theme}
      pageTitle={title}
      pageDescription={description}
      pageKeywords={keywords}
      titleType={titleType}
    >
      <PageHeader title={Title ? <Title /> : title} label="label" tabs={tabs} />
      <Main className={mainContent}>
        {children}
      </Main>
    </Layout>
  );
};

export default Default;
