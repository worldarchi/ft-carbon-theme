import React from "react";
import { articleContent } from "./ArticleContainer.module.scss";
import { Row, Column, ArticleCard } from "gatsby-theme-carbon";
import blueStripeImg from "../../../images/large-image.png"

export const ArticleContainer = () => (
  <div className={articleContent}>
    <Row>
      <Column colMd={6} colLg={6}>
        <h1>Lorem Ipsum snap photos and share like never before</h1>
      </Column>
      <Column colMd={6} colLg={6}></Column>

      <Column colMd={12} colLg={12}>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</h2>
      </Column>

      <Column colMd={4} colLg={4}>
        <ArticleCard
          subTitle="lorem ipsum"
          title="Lorem Ipsum"
          color="dark"
        >
          <img src={blueStripeImg} alt="blue stripe" />
        </ArticleCard>
      </Column>
      <Column colMd={4} colLg={4}>
        <ArticleCard
          subTitle="lorem ipsum"
          title="Lorem Ipsum"
          color="dark"
        >
          <img src={blueStripeImg} alt="blue stripe" />
        </ArticleCard>
      </Column>
      <Column colMd={4} colLg={4}>
        <ArticleCard
          subTitle="lorem ipsum"
          title="Lorem Ipsum"
          color="dark"
        >
          <img src={blueStripeImg} alt="blue stripe" />
        </ArticleCard>
      </Column>
    </Row>
  </div>
);
