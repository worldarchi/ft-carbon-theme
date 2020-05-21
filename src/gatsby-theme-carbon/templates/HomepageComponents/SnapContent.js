import React from "react";
import { snapCard, snapContent } from "./SnapContent.module.scss";
import { Button } from "carbon-components-react";
import { Row, Column } from "gatsby-theme-carbon";

export const SnapCard = (props) => (
  <div className={snapCard}>
    <h2>{props.heading}</h2>
    <p>{props.content}</p>
    <Button href="a" kind="tertiary">
      {props.buttonText}
    </Button>
  </div>
);

export const SnapContent = ({
  captionText,
  children
}) => (
  <div className={snapContent}>
    <Row>
      <Column colSm={12} colMd={6} colLg={6}>
        <h1>{captionText}</h1>
      </Column>
      <Column colSm={12} colMd={6} colLg={6}></Column>
    </Row>
    {children}
  </div>
);
