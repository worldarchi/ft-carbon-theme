import React from "react";
import {
  Row,
  Column,
} from "gatsby-theme-carbon";
import { Button } from "carbon-components-react";
import { banner, bannerContainer } from "./BannerContainer.module.scss";

const BannerText = ({ captionText, contentText, buttonText }) => (
  <div className={banner}>
    <h1>{captionText}</h1>
    <p>
      {contentText}
    </p>
    <Button href="#" kind="secondary">
      {buttonText}
    </Button>
  </div>
);

export const BannerContainer = ({
  children,
  captionText,
  contentText,
  buttonText,
}) => (
  <div className={bannerContainer}>
    <Row>
      <Column colSm={12} colMd={6} colLg={6}>
        <BannerText
          captionText={captionText}
          contentText={contentText}
          buttonText={buttonText}
        />
      </Column>
      <Column colSm={12} colMd={6} colLg={6}>
        {children}
      </Column>
    </Row>
  </div>
);