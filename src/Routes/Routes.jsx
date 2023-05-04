import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Shop from "../Pages/routpage/Shop";
import Privet from "../Pages/routpage/Privet";
import Login from "../Pages/routpage/Login";
import Register from "../Pages/routpage/Register";
import ProtectRout from "./ProtectRout";
import PageDetails from "../Pages/routpage/PageDetails";
import About from "../Pages/routpage/About";
import Error from "../Error/Error";
import Update from "../Pages/routpage/Update";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/shop",
        element: <Shop></Shop>,
        children: [
          {
            path: ":id",
            element: (
              <ProtectRout>
                <PageDetails></PageDetails>
              </ProtectRout>
            ),
            loader: ({ params }) =>
              fetch(
                `https://parectice-project-server-abujafor1924.vercel.app/chef/${params.id}`
              ),
          },
        ],
      },
      {
        path: "/privet",
        element: (
          <ProtectRout>
            <Privet></Privet>
          </ProtectRout>
        ),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/update",
        element: (
          <ProtectRout>
            <Update></Update>
          </ProtectRout>
        ),
      },
    ],
  },
]);

export default router;
