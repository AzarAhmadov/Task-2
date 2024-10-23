import React, { createContext, useContext, useState } from "react";

export const authContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || ""
  );

  const values = {
    user,
    setUser,
  };

  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export const getMyContext = () => useContext(authContext);

export default AuthContextProvider;
