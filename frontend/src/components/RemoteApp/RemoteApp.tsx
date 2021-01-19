import React from "react";
import { useOktaAuth } from "@okta/okta-react";

import * as AuthStore from "../../stores/AuthStore";
import { RemoteComponent } from "../RemoteComponent/RemoteComponent";

export const RemoteApp: React.FC = () => {
  const { oktaAuth } = useOktaAuth();
  const token = oktaAuth.getAccessToken();
  if (token) {
    AuthStore.setAccessToken(token);
  }

  const logout = async () => {
    AuthStore.setAccessToken(null);
    await oktaAuth.signOut("/");
  };

  return (
    <RemoteComponent
      module="./MainApp"
      relativePath="/main_app_mf"
      remoteComponentProps={{
        accessToken: AuthStore.getAccessToken(),
        logout,
      }}
      scope="main_frontend"
    />
  );
};
