import React from "react";
import { getMyContext } from "../context/AuthContext";
import { removeStroge } from "../service/authService";

const HomeLayout = () => {
  const { user } = getMyContext();

  return (
    <div>
      <div className="grid h-screen place-items-center">
        <div className="flex flex-col">
          Xos gəldin {user.username}
          <button className="mt-4" onClick={() => removeStroge()}>Cixis et</button>
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
