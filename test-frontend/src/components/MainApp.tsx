import React from "react";
import { Route, Link, BrowserRouter } from "react-router-dom";

import MainContent from "./MainContent";
import OtherContent from "./OtherContent";

type Props = {
  accessToken: string;
  logout: () => Promise<void>;
};
const MainApp: React.FC<Props> = (props) => {
  return (
    <BrowserRouter>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>
          <button onClick={props.logout}>Logout</button>
        </div>
        <Link to="/other_route">Other main app route</Link>

        <Link to="/">Main route</Link>
      </div>

      <br />
      <Route path="/" exact>
        <MainContent />
      </Route>
      <Route path="/other_route">
        <OtherContent />
      </Route>
    </BrowserRouter>
  );
};

export default MainApp;
