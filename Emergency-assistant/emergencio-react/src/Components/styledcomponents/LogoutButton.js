import React from "react";
import { Button } from "@material-ui/core";
const LogoutButton = (props) => {
  return (
    <Button
      className=" mt-4 "
      variant="contained"
      onClick={() =>
        props.logout({
          returnTo: window.location.origin,
        })
      }
    >
      خروج
    </Button>
  );
};
export default LogoutButton;
