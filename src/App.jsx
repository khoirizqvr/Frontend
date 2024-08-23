import "./App.css";
import React from "react";
import Beranda from "./Pages/Beranda";
import Login from "./Pages/login";
import Register from "./Pages/Register";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import "./index.css";
import InfoMitra from "./Pages/infoMitra";
import ProfileMitra from "./Components/profileMitra";


export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Beranda />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "register",
      element: <Register />,
    },
    {
      path: "mitra",
      element: <InfoMitra />,
    },
    {
      path: "profileMitra",
      element: <ProfileMitra />,
    },

    // {
    //   path: "/",
    //   element: <Beranda/>,
    // },
  ]);
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
