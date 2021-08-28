import React, { useState, useEffect } from "react";
import LoginButton from "../styledcomponents/LoginButton";
import LogoutButton from "../styledcomponents/LogoutButton";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { MdHome, MdLocationOn } from "react-icons/md";
import { FaListAlt } from "react-icons/fa";
import { GoReport } from "react-icons/go";
import { useMediaQuery } from "react-responsive";
import "./NavBar.css";
let isPortrait;
const useColBarStyles = makeStyles({
  root: {
    width: "100%",
    maxHeight: "30%",
    backgroundColor: "rgba(22, 40, 65, 00)",
    flex: 1,
    flexDirection: "column",
  },
});
const useRowBarStyles = makeStyles({
  root: {
    width: "100%",
    maxHeight: "30%",
    backgroundColor: "rgba(22, 40, 65, 00)",
    flex: 1,
    flexDirection: "row",
  },
});
const useActionStyles = makeStyles({
  root: {
    color: "gray",
    "&$selected": {
      color: "white",
    },
  },
  selected: {},
});
const NavBar = (props) => {
  const { isAuthenticated, role } = props;
  isPortrait = useMediaQuery({ maxAspectRatio: "4/3" });
  const history = useHistory();
  let location = useLocation();
  const [pageNav, setPageNav] = useState(0);
  useEffect(() => {
    setPageNav(getDefaultPage(location.pathname));
  }, [location.pathname]);
  const actionClasses = useActionStyles();
  const barRowClasses = useRowBarStyles();
  const barColClasses = useColBarStyles();
  return (
    <div className="d-flex header-nav">
      <BottomNavigation
        value={pageNav}
        onChange={(event, newValue) => {
          setPageNav(newValue);
          goToPage(newValue, history);
        }}
        showLabels
        className={isPortrait ? barRowClasses.root : barColClasses.root}
      >
        {getHomeButton(actionClasses)}
        {(role === "fieldagent" || role === "owner") &&
          getEmptyFormsButton(actionClasses)}
        {(role === "controller" || role === "owner") &&
          getControlFormsButton(actionClasses)}
      </BottomNavigation>
    </div>
  );
};

const getHomeButton = (classes) => {
  return (
    <BottomNavigationAction
      classes={classes}
      label={<div>خانه</div>}
      icon={<MdHome />}
    />
  );
};

const getEmptyFormsButton = (classes) => {
  return (
    <BottomNavigationAction
      classes={classes}
      label={<div>لیست فرم‌‌ها</div>}
      icon={<FaListAlt />}
    />
  );
};

const getControlFormsButton = (classes) => {
  return (
    <BottomNavigationAction
      classes={classes}
      label={<div>گزارش‌های مأموران</div>}
      icon={<GoReport />}
    />
  );
};

const goToPage = (newValue, history) => {
  switch (newValue) {
    case 0:
      history.push("/");
      break;
    case 1:
      history.push("/fill-forms");
      break;
    case 2:
      history.push("/reports");
      break;
    default:
  }
};

const getDefaultPage = (pathname) => {
  console.log(pathname);
  switch (pathname) {
    case "/":
      return 0;
    case "/fill-forms":
      return 1;
    case "/reports":
      return 2;
    default:
  }
};
export default NavBar;
