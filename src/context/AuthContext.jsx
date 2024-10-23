import React, { createContext, useContext, useEffect, useState } from "react";

export const authContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const save = localStorage.getItem("user");
    return save ? JSON.parse(save) : null;
  });

  const values = {
    user,
    setUser,
  };

  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export const getMyContext = () => useContext(authContext);

export default AuthContextProvider;
