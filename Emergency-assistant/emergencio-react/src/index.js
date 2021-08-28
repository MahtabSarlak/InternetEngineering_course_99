import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import AuthWrapper from "./Auth/AuthProviderWrapper";

ReactDOM.render(
  <Router>
    <AuthWrapper>
      <App />
    </AuthWrapper>
  </Router>,
  document.getElementById("root")
);
