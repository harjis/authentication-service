import React from "react";

type Props = {
  accessToken: string;
  logout: () => Promise<void>;
};
const MainApp: React.FC<Props> = (props) => {
  return (
    <div>
      Main app here here! <button onClick={props.logout}>Logout</button>
    </div>
  );
};

export default MainApp;
