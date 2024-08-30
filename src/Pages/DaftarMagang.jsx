import React from "react";
import Navbar from "../Components/navbar";
import Background from "../assets/Pictures/bg-daftarmagang.svg";
import { useNavigate } from "react-router-dom";

const DaftarMagang = () => {
  const navigate = useNavigate();
  return (
    <div className="relative h-screen w-full">
      {/* Navbar dipastikan memiliki posisi tetap di atas */}
      <div className="relative z-30">
        <Navbar />
      </div>

      {/* Background sebagai latar belakang */}
      <div
        className="absolute inset-0 bg-cover bg-center md:h-screen md:w-full md:bg-right max-sm:bg-left"
        style={{ backgroundImage: `url(${Background})` }}
      />

      {/* Konten utama halaman dengan posisi khusus */}
      <div className="absolute inset-0 mt-48 lg:mt-0 lg:flex lg:justify-center items-center text-white text-left">
        <div className="lg:text-left md:px-20 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-4 ">
            Pendaftaran Magang
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl lg:mb-8">
            Mari Bergabung Bersama Kami!
          </p>
          <div className="justify-center md:mt-16 mt-16">
            <button
              className="px-10 py-4 lg:px-20 lg:py-6 bg-white text-red-600 rounded-lg text-2xl font-semibold shadow-md hover:bg-gray-200 transition"
              onClick={() => navigate("/formpendaftaran1")}
            >
              Daftar Magang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DaftarMagang;
