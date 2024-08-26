import "./App.css";
import React from "react";
import Beranda from "./Pages/Beranda";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import "./index.css";
import InfoMitra from "./Pages/infoMitra";
import ProfileMitra from "./Components/profileMitra";

import FormPendaftaran1 from "./Pages/FormPendaftaran1";
import FormPendaftaran2 from "./Pages/FormPendaftaran2";
import DaftarMagang from "./Pages/DaftarMagang";
import ProfileUser from "./Pages/ProfileUser";
import EditProfile from "./Pages/EditProfile";

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
    {
      path: "daftarmagang",
      element: <DaftarMagang />,
    },
    {
      path: "formpendaftaran1",
      element: <FormPendaftaran1 />,
    },
    {
      path: "formpendaftaran2",
      element: <FormPendaftaran2 />,
    },
    {
      path: "profileuser",
      element: <ProfileUser />,
    },
    {
      path: "editprofile",
      element: <EditProfile />,
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
