import React from "react";
import { Button } from "@material-ui/core";
import { BlueLoginButton } from "./StyledButton";
import { from } from "apollo-boost";
const LoginButton = (props) => {
  return (
    <BlueLoginButton variant="contained" onClick={props.onClick}>
      ورود
    </BlueLoginButton>
  );
};
export default LoginButton;
