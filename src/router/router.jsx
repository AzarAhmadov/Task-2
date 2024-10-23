import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import { Login, Register } from "../pages/Auth";
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
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
]);

export default router;
