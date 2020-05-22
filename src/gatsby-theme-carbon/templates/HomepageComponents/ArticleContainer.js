import React from "react";
import { articleContent } from "./ArticleContainer.module.scss";
import { Row, Column } from "gatsby-theme-carbon";

export const ArticleContainer = ({
  text1,
  text2,
  children
}) => (
  <div className={articleContent}>
    <Row>
      <Column colMd={6} colLg={6}>
        <h1>{text1}</h1>
      </Column>
      <Column colMd={6} colLg={6}></Column>

      <Column colMd={12} colLg={12}>
        <h2>{text2}</h2>
      </Column>
    </Row>
    {children}
  </div>
);
