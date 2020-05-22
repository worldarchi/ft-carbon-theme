import React from "react";
import { articleContent } from "./ArticleContainer.module.scss";
import { Row, Column } from "gatsby-theme-carbon";

export const ArticleContainer = ({
  title,
  subTitle,
  children
}) => (
  <div className={articleContent}>
    <Row>
      <Column colMd={6} colLg={6}>
        <h1>{title}</h1>
      </Column>
      <Column colMd={6} colLg={6}></Column>

      <Column colMd={12} colLg={12}>
        <h2>{subTitle}</h2>
      </Column>
    </Row>
    {children}
  </div>
);
