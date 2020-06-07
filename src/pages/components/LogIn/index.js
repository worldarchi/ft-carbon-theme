import React from "react";
import { loginContent, loginForm, loginRow } from "./LogIn.module.scss";
import { Row, Column } from "gatsby-theme-carbon";
import { Button, TextInput } from "carbon-components-react";

const LogInContainer = () => (
  <div className={loginContent}>
    <div className={loginForm}>
      <h3>Sign in with your email and password</h3>
      <Row>
        <Column colMd={12} colLg={12} className={loginRow}>
          <TextInput placeholder="Email" labelText="" id="email" />
        </Column>
        <Column colMd={12} colLg={12} className={loginRow}>
          <TextInput.PasswordInput
            hidePasswordLabel="Hide password"
            id="password"
            invalidText="Password is required"
            placeholder="Password"
            showPasswordLabel="Show password"
          />
        </Column>

        <Column colMd={12} colLg={12} className={loginRow}>
          <Button>Log In</Button>
        </Column>
      </Row>
    </div>
  </div>
);

export default LogInContainer;