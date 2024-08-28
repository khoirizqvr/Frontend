import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Function to check if a button is active
  const isActive = (path) => location.pathname === path;

  return (
    <div
      className="fixed z-50
     container mx-auto bg-white w-full"
    >
      <div className=" py-5 flex justify-between items-center px-20 border-b-2 shadow-lg">
        <div className=" text-[#D24545] font-bold text-2xl">PRAJAGAMER</div>
        <div className=" gap-20 text-xl  ">
          <button
            className={`px-5 ${
              isActive("/") ? "text-[#D24545] font-bold" : "text-[#919191]"
            }`}
            onClick={() => {
              navigate("/");
            }}
          >
            Beranda
          </button>
          <button
            className={`px-5 ${
              isActive("/mitra") ? "text-[#D24545] font-bold" : "text-[#919191]"
            }`}
            onClick={() => {
              navigate("/mitra");
            }}
          >
            Tentang Kami
          </button>
          <button
            className={`px-5 ${
              isActive("/infopendaftaran")
                ? "text-[#D24545] font-bold"
                : "text-[#919191]"
            }`}
            onClick={() => {
              navigate("/infopendaftaran");
            }}
          >
            Info Pendaftaran
          </button>
          <button
            className={`px-5 ${
              isActive("/daftarmagang")
                ? "text-[#D24545] font-bold"
                : "text-[#919191]"
            }`}
            onClick={() => {
              navigate("/daftarmagang");
            }}
          >
            Daftar Magang
          </button>
        </div>
        <button
          className=" px-8 py-2 bg-[#D24545] text-xl rounded-lg text-white font-bold hover:bg-[#b83636] hover:shadow-lg transform hover:scale-105 transition duration-300 "
          onClick={() => navigate("/login")}
        >
          Masuk
        </button>
      </div>
    </div>
  );
};

export default Navbar;
