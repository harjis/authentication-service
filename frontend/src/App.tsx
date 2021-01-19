import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import { Security, LoginCallback } from "@okta/okta-react";
import { OktaAuth } from "@okta/okta-auth-js";

import { Frontpage } from "./components/Frontpage";
import { SecureRouteWithLogout } from "./components/SecureRouteWithLogout/SecureRouteWithLogout";
import { oktaClientId, oktaIssuer } from "./env";

const oktaAuth = new OktaAuth({
  issuer: oktaIssuer,
  clientId: oktaClientId,
  redirectUri: window.location.origin + "/login/callback",
});

const DummyComponent = () => <div>dummy</div>;

const App = () => {
  return (
    <Router>
      <Security oktaAuth={oktaAuth}>
        <Route path="/" exact={true} component={Frontpage} />
        <SecureRouteWithLogout path="/users" component={DummyComponent} />
        <Route path="/login/callback" component={LoginCallback} />
      </Security>
    </Router>
  );
};
export default App;
