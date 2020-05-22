import React from "react";
import { brandsContent } from "./BrandsList.module.scss";

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
