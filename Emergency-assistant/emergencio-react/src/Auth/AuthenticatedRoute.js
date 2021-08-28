import React from "react";
import { Route } from "react-router-dom";
import FormsList from "../Pages/EmptyForms/FormsList";
import FormPage from "../Pages/EmptyForms/FormPage";
import FormsRecordsList from "../Pages/Reports/FormRecordsList";
import ReportsList from "../Pages/Reports/ReportsList";

export const AuthRoutes = (props) => {
  const { role } = props;
  return (
    <div>
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
    </div>
  );
};
