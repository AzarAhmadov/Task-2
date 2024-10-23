import { useLocation, useNavigate } from "react-router-dom";
import { getMyContext } from "../context/AuthContext";
import { useEffect } from "react";

const GlobalContextProvider = ({ children }) => {
  const { user } = getMyContext();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, pathname]);

  return children;
};

export default GlobalContextProvider;
