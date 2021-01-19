import React from "react";

import MainApp from "./components/MainApp";

function App() {
  const logout = () => {
    console.log("Logout here!");
    return Promise.resolve();
  };
  return <MainApp accessToken="fake_token" logout={logout} />;
}

export default App;
