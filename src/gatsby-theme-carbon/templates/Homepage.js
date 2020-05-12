import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from './HomepageTemplate';
import { calloutLink, banner, rowText, mainContent } from './Homepage.module.scss';

import Carbon from '../../images/carbon.jpg';
import Freight1 from '../../images/freight1.png';

const FirstLeftText = () => <span className={rowText}>
  <h1>Start simplifying your EDI Services</h1>
  <p>Freight Trucking partners and companies can proactively schedule shipment pickups and deliveries, digitally confirm pickups and deliveries, and provide digital proof of deliveries (PODs) & even sign 100% digitally without any use of paper bills of lading.</p>
</span>;

const FirstRightText = () => (
  <div>
    <img src={Freight1} alt="freight1" />
  </div>
);

const SecondLeftText = () => <div>
  <img src={Freight1} alt="freight1" />
</div>;

const SecondRightText = () => (
  <span className={rowText}>
    <h1>Clear and Transparent Pricing</h1>
    <p>Freight Trust Platform is designed to create a seamless communication workflow. Think of it as a Control Tower, EDI and TMS rolled into one.</p>
  </span>
);

const BannerText = () => <div className={banner}><h1>Next Generation EDI</h1>
  <h3 style={{textAlign:'center', marginBottom: 50}}>Digital Freight Management</h3>
  <p style={{width: 600, margin: 'auto'}}>From an Industry Exclusive Automated Detention Claims & Same-day Invoicing to Automated Price Quoting and Dispatching, enable a seamless communications platform that integrates with your Transportation Management System, Accounting, Dispatching, ELD, & more.</p>
  <a href="#">GET STARTED TODAY</a>
</div>;

const MainContent = () => <div className={mainContent}></div>

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Carbon} />,
  FirstCallout: (
    <HomepageCallout
      backgroundColor="#16a085"
      color="white"
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  ),
  SecondCallout: (
    <HomepageCallout
      leftText={SecondLeftText}
      rightText={SecondRightText}
      color="white"
      backgroundColor="#061f80"
    />
  ),
};


// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
