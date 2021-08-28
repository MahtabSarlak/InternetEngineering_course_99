import React from "react";
import "./MainPage.css";
import { StyledButton } from "../../Components/styledcomponents/StyledButton";
import LoginButton from "../../Components/styledcomponents/LoginButton";
import LogoutButton from "../../Components/styledcomponents/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

import { Link } from "react-router-dom";
import { Divider } from "@material-ui/core";
export default function ProfileCard(props) {
  const { user } = props;
  const { name, picture, email } = user;
  return (
    <div
      style={{ width: "100%" }}
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <img
        src={picture}
        alt="Profile"
        className=" rounded-circle img-fluid profile-picture mb-3"
      />
      <Divider style={{ width: "100%" }}></Divider>
      <div className=" mt-3 profile-text ">{name}</div>
    </div>
  );
}
