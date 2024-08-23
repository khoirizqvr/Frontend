import "./App.css";
import React from "react";
import Beranda from "./Pages/Beranda";
import Login from "./Pages/login";
import Register from "./Pages/Register";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import "./index.css";
import FormPendaftaran1 from "./Pages/FormPendaftaran1";
import FormPendaftaran2 from "./Pages/FormPendaftaran2";
import DaftarMagang from "./Pages/DaftarMagang";

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
