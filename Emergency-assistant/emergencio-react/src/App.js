import React, { useState, useEffect } from "react";
import AuthRoute, { AuthRoutes } from "./Auth/AuthenticatedRoute";
import MainPage from "./Pages/MainPage/MainPage";
import LoadingBackdrop from "./Components/utils/Loading";
import { useAuth0 } from "@auth0/auth0-react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import NavBar from "./Components/navbar/NavBar";
import { getTokenAndSetRole } from "./Auth/AuthUtils";
import NotFoundPage from "./Pages/ErrorPages/NotFound";
import "./App.css";
import { SnackBar } from "./Components/utils/SnackBar";
import ServerErrorPage from "./Pages/ErrorPages/ServerError";
import { useQuery } from "@apollo/react-hooks";
import { client } from "./GraphQL/Client";
import { getRoleByUserName } from "./GraphQL/Querries";
import FormsList from "./Pages/EmptyForms/FormsList";
import FormPage from "./Pages/EmptyForms/FormPage";
import FormsRecordsList from "./Pages/Reports/FormRecordsList";
import ReportsList from "./Pages/Reports/ReportsList";

const App = () => {
  const {
    isLoading,
    getAccessTokenSilently,
    isAuthenticated,
    user,
  } = useAuth0();
  const { loading, error, data } = useQuery(getRoleByUserName, {
    client,
    variables: { username: user ? user.email : "" },
  });

  const [role, setRole] = useState(localStorage.getItem("role"));
  useEffect(() => getTokenAndSetRole(getAccessTokenSilently, setRole), [
    isLoading,
    getAccessTokenSilently,
  ]);
  useEffect(() => {
    if (!isAuthenticated) setRole("", () => localStorage.setItem("role", ""));
  }, []);
  useEffect(() => {
    if (data && data.getRoleByUserName) {
      setRole(data.getRoleByUserName.role);
      localStorage.setItem("role", data.getRoleByUserName.role);
    }
  }, [loading, data]);
  return (
    <Router>
      <NavBar isAuthenticated={isAuthenticated} role={role} />
      <div className="App">
        <Switch>
          <Route exact path="/" component={MainPage} />
          {(role === "fieldagent" || role === "owner") && (
            <Route exact path="/fill-forms" component={FormsList} />
          )}
          {(role === "fieldagent" || role === "owner") && (
            <Route exact path="/fill-forms/:formId" component={FormPage} />
          )}
          {(role === "controller" || role === "owner") && (
            <Route exact path="/reports" component={ReportsList} />
          )}
          {(role === "controller" || role === "owner") && (
            <Route exact path="/reports/:formId" component={FormsRecordsList} />
          )}
          {(role === "controller" || role === "owner") && (
            <Route exact path="/reports/details/:formId" component={FormPage} />
          )}
          <Route path="/500" component={ServerErrorPage} />
          <Route path="/404" component={NotFoundPage} />
          {role !== "" && role && <Redirect to="/404" />}
        </Switch>
        <SnackBar />
        <LoadingBackdrop open={loading} />
      </div>
    </Router>
  );
};

export default App;
