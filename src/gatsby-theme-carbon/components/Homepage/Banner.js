import React from 'react';
import { Row, Column } from 'gatsby-theme-carbon';

import { column, row, grid } from './Banner.module.scss';

const HomepageBanner = ({ image, position, renderText }) => (
  <div className={grid} position={position}>
    <Row className={row}>
      <Column className={column} colMd={5} colLg={5}>{renderText()}</Column>
      <Column className={column} colMd={1} colLg={1}></Column>
      <Column className={column} colMd={6} colLg={6}>
        {
          image &&
          <img alt="img" src={image}/>
        }
      </Column>
    </Row>
  </div>
);

export default HomepageBanner;
