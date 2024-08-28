import React from "react";
import Navbar from "../Components/navbar";
import Tentang from "../Components/Tentang";
import Logo from "../assets/Pictures/logodisdukcapil.png";
import Beranda1 from "../assets/Pictures/beranda.svg";
import fotoBeranda from "../assets/Pictures/fotoberanda.svg";
import Footer from "../Components/Footer";
import Mitra from "../Components/mitra";
import { useNavigate } from "react-router-dom";

const Beranda = () => {
  const navigate = useNavigate();
  return (
    <div>
      <img src={Beranda1} alt="" className="w-full mt-[-100px]" />
      <div className="absolute inset-0">
        <Navbar />
      </div>

      <div className=" flex justify-center mt-64 py-10 absolute inset-0">
        <img
          src={Logo}
          alt="Logo"
          className="h-[90px] mr-4 flex items-center"
        />
        <div className="flex items-center flex-col">
          <div className="text-5xl text-white font-semibold">
            Program Kerja dan Magang Merdeka
          </div>
          <div className="text-2xl pt-3 text-white font-semibold">
            Dinas Kependudukan dan Pencacatan Sipil Kota Semarang{" "}
          </div>
          <button
            className="mt-20 bg-white text-[#D24545] py-2 px-20 text-2xl font-semibold rounded-xl border-[#D24545] shadow-xl"
            onClick={() => navigate("/daftarmagang")}
          >
            Daftar Magang
          </button>
        </div>
      </div>
      <Tentang />
      <div className="bg-gradient-to-l from-[#A94438] to-[#D24545] flex h-[250px] px-20">
        <div className="flex items-end">
          <img src={fotoBeranda} alt="" className="h-[350px] object-cover" />
        </div>
        <div className="flex justify-center flex-col pl-10 font-semibold">
          <p className="text-3xl text-white">
            Kesempatan Terbaik untuk{" "}
            <span className="text-[#FFF382]">Mahasiswa</span> yang Sedang
            Mencari <span className="text-[#FFF382]">Pengalaman </span>Bekerja
          </p>
          <p className="text-xl text-white py-3">
            Segera Daftarkan dirimu sekarang!
          </p>
          <div className="flex justify-center">
            <button
              className="mt-5 bg-white text-[#D24545] w-[400px] py-2 px-20 text-2xl font-semibold rounded-xl border-[#D24545] shadow-xl"
              onClick={() => navigate("/daftarmagang")}
            >
              Daftar Magang
            </button>
          </div>
        </div>
      </div>
      <Mitra />
      <Footer />
    </div>
  );
};

export default Beranda;
