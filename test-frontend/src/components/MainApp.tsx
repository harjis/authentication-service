import React from "react";
import { Route, Link, BrowserRouter } from "react-router-dom";

import MainContent from "./MainContent";
import OtherContent from "./OtherContent";
import { fetchHome, Home } from "../api/home";
import { setAccessToken } from "../stores/AuthStore";

type Props = {
  accessToken: string;
  logout: () => Promise<void>;
};
const MainApp: React.FC<Props> = (props) => {
  setAccessToken(props.accessToken);
  const [dataFromBackend, setDataFromBackend] = React.useState<Home | null>(
    null
  );
  React.useEffect(() => {
    const load = async () => {
      const data = await fetchHome();
      setDataFromBackend(data);
    };
    load();
  }, []);
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
      {dataFromBackend !== null
        ? dataFromBackend.test
        : "Data not received yet"}
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
