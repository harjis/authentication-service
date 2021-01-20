import React from "react";

type Props = {
  accessToken: string | null;
  logout: () => Promise<void>;
};
const DummyMainApp: React.FC<Props> = (props) => {
  return (
    <div>
      Dummy app here! <button onClick={props.logout}>Logout</button>
    </div>
  );
};

export default DummyMainApp;
