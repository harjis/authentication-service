import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

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
        <div>Main app here!</div>
      </Route>
      <Route path="/other_route">
        <div>Main app too but other route!</div>
      </Route>
    </BrowserRouter>
  );
};

export default MainApp;
