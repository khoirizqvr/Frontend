import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto bg-white">
      <div className=" py-5 flex justify-between items-center px-20 border-b-2 shadow-lg">
        <div className=" text-[#D24545] font-bold text-2xl">PRAJAGAMER</div>
        <div className=" gap-20 text-xl  ">
          <button
            className="px-5 text-[#D24545] font-bold"
            onClick={() => navigate("/")}
          >
            Beranda
          </button>
          <button
            className="px-5 text-[#919191]"
            onClick={() => navigate("/mitra")}
          >
            Tentang Kami
          </button>
          <button className="px-5 text-[#919191]">Info Pendaftaran</button>
          <button className="px-5 text-[#919191]">Daftar Magang</button>
        </div>
        <button className=" px-8 py-2 bg-[#D24545] text-xl rounded-lg text-white font-bold">
          Masuk
        </button>
      </div>
    </div>
  );
};

export default Navbar;
