import React from "react";
import {
  footerContent,
  footerContentDefault,
  footerRow,
  footerLinkCol,
  footerButtonCol,
  footerLastRow,
  footerDiectoryRow,
  footerFollowSection,
} from "./Footer.module.scss";
import { Button } from "carbon-components-react";
import { Row, Column } from "gatsby-theme-carbon";
import cx from 'classnames';

const CustomFooter = ({homepage}) => (
  <div className={cx(footerContent, { [footerContentDefault]: !homepage })}>
    <Row className={footerRow}>
      <Column colMd={3} colLg={3} colXl={3} className={footerLinkCol}>
        <h1>FREIGHT TRUST</h1>
      </Column>
      <Column colMd={7} colLg={7} colXl={8}>
        <div className={footerLinkCol}>
          <div>
            <h5>Product</h5>
            <a href="/freight">EDI/API Logs and Metrics</a>
            <a href="/freight">EDI/API Monitoring</a>
            <a href="/freight">Embedded Logs</a>
            <a href="/freight">GraphQL Analytics</a>
            <a href="/freight">Extensions</a>
            <a href="/freight">Infrastructure</a>
            <a href="/freight">Customs and Tariffs</a>
            <a href="/freight">IFTA and SAFER</a>
          </div>
          <div>
            <h5>Corporate</h5>
            <a href="/freight">About Us</a>
            <a href="/freight">Press</a>
            <a href="/freight">Customers</a>
            <a href="/freight">Careers</a>
            <a href="/freight">Blog</a>
            <a href="/freight">System Status</a>
            <a href="/freight">Security & Compliance</a>
          </div>
          <div>
            <h5>Solutions</h5>
            <a href="/freight">Trucking</a>
            <a href="/freight">Maritime</a>
            <a href="/freight">Intermodal</a>
            <a href="/freight">NVOCCs</a>
          </div>
          <div>
            <h5>Resources</h5>
            <a href="/freight">Documentation</a>
            <a href="/freight">Open Source</a>
            <a href="/freight">Developer Relations</a>
            <a href="/freight">API Engineering</a>
            <a href="/freight">API Security</a>
            <a href="/freight">Customer Success</a>
            <a href="/freight">Network Stats</a>
            <a href="/freight">Block Explorer</a>
            <a href="/freight">Smart Contract Addresses</a>
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

    <Row className={footerDiectoryRow}>
      <Column colMd={6} colLg={6}>
        <p>Address: 1424 4TH ST, STE 214 PMB 1513, SANTA MONICA, California, US, 90401</p>
        <p>LEI: 254900C9UJMDGJ0ILK56</p>
        <p>tel:(628) 222 - 5915</p>
        <p>fax:(818) 457 - 5660</p>
      </Column>
      <Column colMd={2} colLg={2}></Column>
      <Column colMd={2} colLg={2}>
        <a href="https://twitter.com/freighttrustnet">Twitter</a>
        <a href="#top">Linkedin</a>
        <a href="#top">Medium</a>
        <a href="https://t.me/freighttrust">Telegram</a>
      </Column>
      <Column colMd={2} colLg={2}>
        <a href="https://github.com/freight-chain">Github</a>
        <a href="#top">Gitlab</a>
        <a href="#top">Docker</a>
      </Column>
    </Row>

    <Row className={footerLastRow}>
      <Column colMd={6} colLg={6}>
        <div className={footerFollowSection}>
          <span>Terms of Service</span>
          <span>Privacy Policy</span>
          <span>Security</span>
        </div>
      </Column>
      <Column colMd={6} colLg={6}>
        <div className={footerFollowSection}>
          <p>(C) 2020 FreightTrust and Clearing Corporation</p>
        </div>
      </Column>
    </Row>
  </div>
);

export default CustomFooter;
