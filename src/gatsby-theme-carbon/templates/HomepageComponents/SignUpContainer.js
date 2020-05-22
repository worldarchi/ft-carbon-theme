import React from "react";
import { signupContent, signupForm, signupRow } from "./SignUpContainer.module.scss";
import { Row, Column } from "gatsby-theme-carbon";
import { Button, TextInput } from "carbon-components-react";

export const SignUpContainer = ({
  title,
  subTitle
}) => (
  <div className={signupContent}>
    <h1>{title}</h1>
    <h2>{subTitle}</h2>
        
    <div className={signupForm}>
      <h3>Sign up for a free account</h3>
      <Row>
        <Column colMd={12} colLg={6} className={signupRow}>
          <TextInput placeholder="First Name" labelText="" id="first-name" />
        </Column>
        <Column colMd={12} colLg={6} className={signupRow}>
          <TextInput placeholder="Last Name" labelText="" id="last-name" />
        </Column>

        <Column colMd={12} colLg={12} className={signupRow}>
          <TextInput placeholder="Email address" labelText="" id="email" />
        </Column>

        <Column colMd={12} colLg={12} className={signupRow}>
          <TextInput placeholder="Create password" labelText="" id="password" />
        </Column>

        <Column colMd={12} colLg={12} className={signupRow}>
          <Button>Register</Button>
        </Column>
      </Row>
    </div>
  </div>
);
