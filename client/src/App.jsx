import "./App.css";
import Root from "./components/root";
import Home from "./components/home";
import Auth from "./components/authentication";
import Offers from "./components/offers";
import Tournament from "./components/tournament";
import Slots from "./components/slots";
import Register from "./components/register";
import ForgotPassword from "./components/forgot";
import ResetPassword from "./components/reset";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/signin",
          element: <Auth />,
        },
        {
          path: "/offers",
          element: <Offers />,
        },
        {
          path: "/slots",
          element: <Slots />,
        },
        {
          path: "/tournaments",
          element: <Tournament />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/forgot",
          element: <ForgotPassword />,
        },
        {
          path: "/reset",
          element: <ResetPassword />,
        },
      ],
    },
  ]);
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
};

export default App;
