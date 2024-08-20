import React from "react";
import Navbar from "../Components/navbar";

const Beranda = () => {
  return (
    <div className="absolute inset-0 bg-gradient-to-tl from-[#A94438] to-[#D24545]">
      <Navbar />
      <div className="flex items-center flex-col my-52 py-10 ">
        <div className="text-5xl text-white font-semibold">
          Program Kerja Magang Merdeka
        </div>
        <div className="text-2xl pt-3 text-white font-semibold">
          Dinas Kependudukan dan Pencacatan Sipil Kota Semarang{" "}
        </div>
      </div>
    </div>
  );
};

export default Beranda;
