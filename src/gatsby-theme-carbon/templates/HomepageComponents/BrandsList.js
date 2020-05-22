import React from "react";
import { brandsContent } from "./BrandsList.module.scss";

export const BrandsList = ({
  title,
  content,
  children
}) => (
  <div className={brandsContent}>
    <h1>
      {title}
    </h1>
    <p>
      {content}
    </p>
    {children}
  </div>
);
