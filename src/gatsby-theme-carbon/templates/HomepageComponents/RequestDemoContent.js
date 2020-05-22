import React from "react";
import {
  Row,
  Column,
} from "gatsby-theme-carbon";
import {
  requestDemoContent,
  requestDemoRow,
  requestDemoActions,
} from "./RequestDemoContent.module.scss";

export const RequestDemoContent = ({
  text1,
  text2,
  children
}) => (
  <div className={requestDemoContent}>
    <Row className={requestDemoRow}>
      <Column colSm={12} colMd={6} colLg={6}>
        <h1>{text1}</h1>
        <h2>{text2}</h2>
      </Column>
      <Column className={requestDemoActions} colSm={12} colMd={6} colLg={6}>
        {children}
      </Column>
    </Row>
  </div>
);