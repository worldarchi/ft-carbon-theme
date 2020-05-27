import React from "react";
import {
  footerContent,
  footerContentDefault,
  footerRow,
  footerLinkCol,
  footerButtonCol,
  footerLastRow,
  footerFollowSection,
} from "./Footer.module.scss";
import { Button } from "carbon-components-react";
import { Row, Column } from "gatsby-theme-carbon";
import cx from 'classnames';

const CustomFooter = ({homepage}) => (
  <div className={footerContent} className={cx(footerContent, { [footerContentDefault]: !homepage })}>
    <Row className={footerRow}>
      <Column colMd={5} colLg={5} colXl={5}>
        <h1>FREIGHT TRUST</h1>
      </Column>
      <Column colMd={5} colLg={5} colXl={6}>
        <div className={footerLinkCol}>
          <div>
            <h5>Lorem Ipsum</h5>
            <a href="#">Block Explorer</a>
            <a href="#">Block Explorer</a>
            <a href="#">Block Explorer</a>
          </div>
          <div>
            <h5>Lorem Ipsum</h5>
            <a href="#">Block Explorer</a>
            <a href="#">Block Explorer</a>
            <a href="#">Block Explorer</a>
          </div>
          <div>
            <h5>Lorem Ipsum</h5>
            <a href="#">Block Explorer</a>
            <a href="#">Block Explorer</a>
            <a href="#">Block Explorer</a>
          </div>
        </div>
      </Column>
      <Column
        colSm={12}
        colMd={2}
        colLg={2}
        colXl={1}
        className={footerButtonCol}
      >
        <div>
          <Button>Register</Button>
        </div>
        <div>
          <Button kind="tertiary">Log In</Button>
        </div>
      </Column>
    </Row>

    <Row className={footerLastRow}>
      <Column colMd={9} colLg={9}>
        <p>© Photo, Inc. 2019. We love our users!</p>
      </Column>
      <Column colMd={3} colLg={3}>
        <div className={footerFollowSection}>
          <p>Follow us:</p>
        </div>
      </Column>
    </Row>
  </div>
);

export default CustomFooter;
