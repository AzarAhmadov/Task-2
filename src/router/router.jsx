import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import AuthContextProvider from "../context/AuthContext";
import GlobalContextProvider from "../provider/GlobalContextProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <GlobalContextProvider>
        <HomeLayout />
      </GlobalContextProvider>
    ),
  },

  {
    path: "Login",
    element: (
      <AuthContextProvider>
        <Login />
      </AuthContextProvider>
    ),
  },
  {
    path: "register",
    element: <Register />,
  },
]);

export default router;
