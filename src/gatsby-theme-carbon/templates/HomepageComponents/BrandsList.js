import React, { Children } from "react";
import { brandsContent } from "./BrandsList.module.scss";
import { Button } from "carbon-components-react";
import { Row, Column } from "gatsby-theme-carbon";

export const BrandsList = ({
  captionText,
  contentText,
  children
}) => (
  <div className={brandsContent}>
    <h1>
      {captionText}
    </h1>
    <p>
      {contentText}
    </p>
    {children}
  </div>
);
