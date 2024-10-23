import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getMyContext } from "../context/AuthContext";

const GlobalContextProvider = ({ children }) => {
  const { user } = getMyContext();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (!user && pathname !== "/login") {
      navigate("/login");
    }
  }, [user, pathname, navigate]);

  return children;
};

export default GlobalContextProvider;
