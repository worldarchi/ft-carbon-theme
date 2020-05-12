import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

const links = [
  {
    title: 'Twitter',
    href: 'https://twitter.com/freighttrustnet',
  },
  {
    title: 'Github',
    href: 'https://github.com/freight-chain',
  },
  {
    title: 'Telegram',
    href: 'https://t.me/freighttrust',
  },
  {
    title: 'Request more Information',
    href: '/guides/configuration',
  },
];

// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = () => <ResourceLinks shouldOpenNewTabs links={links} />;

export default CustomResources;
