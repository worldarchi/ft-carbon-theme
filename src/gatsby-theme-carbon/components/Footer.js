import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';
import { footerContent, footerText, footerRow } from './Footer.module.scss';
import {
  Row,
  Column,
} from "gatsby-theme-carbon";

const Content = ({ buildTime }) => (
  <>
    <p>
      The <code>Content</code> component receives a <code>buildTime</code> prop
      that to display your site's build time: {buildTime}
    </p>
    <p>
      By importing the <strong>Footer</strong> component from
      gatsby-theme-carbon, we can supply our own props.
    </p>
    <p>
      The default export from a shadowed component will replace that component
      in the theme.
    </p>
    <p>
      <a href="https://www.gatsbyjs.org/docs/themes/api-reference/#component-shadowing">
        More about component shadowing
      </a>
    </p>
  </>
);

const links = {
  firstCol: [
    { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
    { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
    { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
  ],
  secondCol: [
    { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
    { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
    { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
    { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
  ],
};

const CustomFooter = () => <div className={footerContent}>
  <Row className={footerRow}>
    <Column colMd={2} colLg={2}>
      <h1>FREIGHT TRUST</h1>
    </Column>
    <Column className={footerText} colMd={4} colLg={4}>
      <h3>Latest Blog post</h3>
      <h2>Ready to get started</h2>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </Column>
    <Column colMd={2} colLg={2}>
      <h5>NETWORK</h5>
      <a>Block Explorer</a>
      <a>Block Explorer</a>
      <a>Block Explorer</a>
      <a>Block Explorer</a>
      <a>Block Explorer</a>
      <a>Block Explorer</a>
      <h6>@ 2010 - 2020  Privacy - Terms</h6>
    </Column>
    <Column colMd={2} colLg={2}>
      <h5>DOCUMENTS</h5>
      <a>Block Explorer</a>
      <a>Block Explorer</a>
      <a>Block Explorer</a>
      <a>Block Explorer</a>
      <a>Block Explorer</a>
      <a>Block Explorer</a>
    </Column>
  </Row>
</div>;

export default CustomFooter;
