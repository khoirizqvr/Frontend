import "./App.css";
import React from "react";
import Beranda from "./Pages/Beranda";
import Login from "./Pages/login";
import Register from "./Pages/Register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import InfoMitra from "./Pages/infoMitra";
import FormPendaftaran1 from "./Pages/FormPendaftaran1";
import FormPendaftaran2 from "./Pages/FormPendaftaran2";
import DaftarMagang from "./Pages/DaftarMagang";
import ProfileUser from "./Pages/ProfileUser";
import EditProfile from "./Pages/EditProfile";
import InfoPendaftaran from "./Pages/InfoPendaftaran";

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
    {
      path: "infopendaftaran",
      element: <InfoPendaftaran />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
