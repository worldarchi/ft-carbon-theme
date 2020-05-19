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

export const SnapContent = () => (
  <div className={snapContent}>
    <Row>
      <Column colMd={6} colLg={6}>
        <h1>Lorem Ipsum snap photos and share like never before</h1>
      </Column>
      <Column colMd={6} colLg={6}></Column>

      <Column colMd={6} colLg={6}>
        <SnapCard
          heading="Lorem Ipsum"
          buttonText="Lorem Ipsum"
          content="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est."
        />
      </Column>
      <Column colMd={6} colLg={6}>
        <SnapCard
          heading="Lorem Ipsum"
          buttonText="Lorem Ipsum"
          content="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est."
        />
      </Column>

      <Column colMd={6} colLg={6}>
        <SnapCard
          heading="Lorem Ipsum"
          buttonText="Lorem Ipsum"
          content="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est."
        />
      </Column>
      <Column colMd={6} colLg={6}>
        <SnapCard
          heading="Lorem Ipsum"
          buttonText="Lorem Ipsum"
          content="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est."
        />
      </Column>
    </Row>
  </div>
);
