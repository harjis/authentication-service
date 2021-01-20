import React, { Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { LoginCallback, Security, SecureRoute } from "@okta/okta-react";
import { OktaAuth } from "@okta/okta-auth-js";

import { oktaClientId, oktaIssuer } from "./env";
import { RemoteApp } from "./components/RemoteApp";

const oktaAuth = new OktaAuth({
  issuer: oktaIssuer,
  clientId: oktaClientId,
  redirectUri: window.location.origin + "/login/callback",
});

const App = () => {
  return (
    <Router>
      <Security oktaAuth={oktaAuth}>
        {/*TODO the wildcard here is pretty wild*/}
        <SecureRoute path={["/", "*"]} exact>
          <Suspense fallback={<div>Loading Main app...</div>}>
            <RemoteApp />
          </Suspense>
        </SecureRoute>
        <Route path="/login/callback">
          <LoginCallback />
        </Route>
      </Security>
    </Router>
  );
};
export default App;
