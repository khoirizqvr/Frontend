import "./App.css";
import React from "react";
import Beranda from "./Pages/Beranda";
import Login from "./Pages/Login";
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
import DashboardAdmin from "./Pages_Admin/DashboardAdmin";
import HasilDaftarMagang from "./Pages_Admin/hasilDaftarMagang";
import UpdateInfo from "./Pages_Admin/updateInfo";
import AkunAdmin from "./Pages_Admin/akunAdmin";
import ModalTambahAdmin from "./ComponentsAdmin/modalTambahAdmin";
import LoginAdmin from "./Pages_Admin/loginAdmin";

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
    {
      path: "admin",
      element: <DashboardAdmin />,
    },
    {
      path: "hasildaftarmagang",
      element: <HasilDaftarMagang />,
    },
    {
      path: "updateinfo",
      element: <UpdateInfo />,
    },
    {
      path: "adminakun",
      element: <AkunAdmin />,
    },
    {
      path: "tambahadmin",
      element: <ModalTambahAdmin />,
    },
    {
      path: "loginadmin",
      element: <LoginAdmin />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
