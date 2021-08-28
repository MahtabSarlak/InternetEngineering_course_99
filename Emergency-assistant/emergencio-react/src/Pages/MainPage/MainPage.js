import React from "react";
import "./MainPage.css";
import { StyledButton } from "../../Components/styledcomponents/StyledButton";
import LoginButton from "../../Components/styledcomponents/LoginButton";
import LogoutButton from "../../Components/styledcomponents/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import ProfileCard from "./ProfileCard";
import { Link } from "react-router-dom";
export default function MainPage(props) {
  const {
    isLoading,
    user,
    loginWithRedirect,
    isAuthenticated,
    logout,
  } = useAuth0();
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div className="centerize main-card d-flex flex-column justify-content-center align-items-center ">
        <div className="d-flex flex-column justify-content-center align-items-center ">
          {!isAuthenticated ? (
            <div
              style={{ width: "100%" }}
              className="d-flex flex-column justify-content-center align-items-center "
            >
              <div className=" mb-3 profile-text ">
                برای استفاده از برنامه لطفاً وارد شوید
              </div>
              <LoginButton onClick={loginWithRedirect} />
            </div>
          ) : (
            <div
              style={{ width: "100%" }}
              className="d-flex flex-column justify-content-center align-items-center "
            >
              <ProfileCard user={user}></ProfileCard>
              <LogoutButton logout={logout} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
