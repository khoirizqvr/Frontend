import "./App.css";
import React from "react";
import Beranda from "./Pages/Beranda";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import "./index.css";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Beranda />,
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
