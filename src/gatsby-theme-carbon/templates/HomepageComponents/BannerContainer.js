import React from "react";
import {
  Row,
  Column,
} from "gatsby-theme-carbon";
import { Button } from "carbon-components-react";
import { banner, bannerContainer } from "./BannerContainer.module.scss";

const BannerText = ({ title, content, buttonLabel }) => (
  <div className={banner}>
    <h1>{title}</h1>
    <p>
      {content}
    </p>
    <Button href="#" kind="secondary">
      {buttonLabel}
    </Button>
  </div>
);

export const BannerContainer = ({
  children,
  title,
  content,
  buttonLabel,
}) => (
  <div className={bannerContainer}>
    <Row>
      <Column colSm={12} colMd={6} colLg={6}>
        <BannerText
          title={title}
          content={content}
          buttonLabel={buttonLabel}
        />
      </Column>
      <Column colSm={12} colMd={6} colLg={6}>
        {children}
      </Column>
    </Row>
  </div>
);