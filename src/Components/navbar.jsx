import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"; // Install @heroicons/react for icons

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to check if a button is active
  const isActive = (path) => location.pathname === path;

  return (
    <div className="fixed z-50 w-full bg-white shadow-lg">
      {/* Sidebar for Mobile */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 md:hidden transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      >
        <div className="w-64 h-full bg-white p-5 flex flex-col">
          <button
            className="text-[#D24545] self-end"
            onClick={() => setIsSidebarOpen(false)}
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
          <div className="mt-10 space-y-4">
            <button
              className={`block w-full px-5 py-2 text-left ${
                isActive("/") ? "text-[#D24545] font-bold" : "text-[#919191]"
              }`}
              onClick={() => {
                navigate("/");
                setIsSidebarOpen(false);
              }}
            >
              Beranda
            </button>
            <button
              className={`block w-full px-5 py-2 text-left ${
                isActive("/mitra") ? "text-[#D24545] font-bold" : "text-[#919191]"
              }`}
              onClick={() => {
                navigate("/mitra");
                setIsSidebarOpen(false);
              }}
            >
              Tentang Kami
            </button>
            <button
              className={`block w-full px-5 py-2 text-left ${
                isActive("/infopendaftaran") ? "text-[#D24545] font-bold" : "text-[#919191]"
              }`}
              onClick={() => {
                navigate("/infopendaftaran");
                setIsSidebarOpen(false);
              }}
            >
              Info Pendaftaran
            </button>
            <button
              className={`block w-full px-5 py-2 text-left ${
                isActive("/daftarmagang") ? "text-[#D24545] font-bold" : "text-[#919191]"
              }`}
              onClick={() => {
                navigate("/daftarmagang");
                setIsSidebarOpen(false);
              }}
            >
              Daftar Magang
            </button>
            <button
              className="block w-full px-8 py-2 mt-4 bg-[#D24545] text-xl rounded-lg text-white font-bold hover:bg-[#b83636] hover:shadow-lg transform hover:scale-105 transition duration-300"
              onClick={() => navigate("/login")}
            >
              Masuk
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="text-[#D24545] font-bold text-2xl">
          PRAJAGAMER
        </div>

        {/* Menu Toggle Button for Mobile */}
        <button
          className="md:hidden text-[#D24545] p-2"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>

        {/* Navbar Links for Desktop */}
        <div className="hidden md:flex md:items-center md:space-x-6 text-xl">
          <button
            className={`px-5 py-2 ${
              isActive("/") ? "text-[#D24545] font-bold" : "text-[#919191]"
            }`}
            onClick={() => navigate("/")}
          >
            Beranda
          </button>
          <button
            className={`px-5 py-2 ${
              isActive("/mitra") ? "text-[#D24545] font-bold" : "text-[#919191]"
            }`}
            onClick={() => navigate("/mitra")}
          >
            Tentang Kami
          </button>
          <button
            className={`px-5 py-2 ${
              isActive("/infopendaftaran") ? "text-[#D24545] font-bold" : "text-[#919191]"
            }`}
            onClick={() => navigate("/infopendaftaran")}
          >
            Info Pendaftaran
          </button>
          <button
            className={`px-5 py-2 ${
              isActive("/daftarmagang") ? "text-[#D24545] font-bold" : "text-[#919191]"
            }`}
            onClick={() => navigate("/daftarmagang")}
          >
            Daftar Magang
          </button>
        </div>

        {/* Login Button for Desktop */}
        <button
          className="hidden md:block px-8 py-2 bg-[#D24545] text-xl rounded-lg text-white font-bold hover:bg-[#b83636] hover:shadow-lg transform hover:scale-105 transition duration-300"
          onClick={() => navigate("/login")}
        >
          Masuk
        </button>
      </div>
    </div>
  );
};

export default Navbar;
