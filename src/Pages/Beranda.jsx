import React from "react";
import Navbar from "../Components/navbar";
import Tentang from "../Components/Tentang";
import Logo from "../assets/Pictures/logodisdukcapil.png";
import Beranda1 from "../assets/Pictures/beranda.svg";
import fotoBeranda from "../assets/Pictures/fotoberanda.svg"

const Beranda = () => {
  return (
    <div >
      <img src={Beranda1} alt="" className="w-full mt-[-100px]"/>
      <div className="absolute inset-0"> <Navbar /></div>
     
     
      <div className=" flex justify-center mt-64 py-10 absolute inset-0">
        <img
          src={Logo}
          alt="Logo"
          className="h-[90px] mr-4 flex items-center"
        />
        <div className="flex items-center flex-col">
          <div className="text-5xl text-white font-semibold">
            Program Kerja Magang Merdeka
          </div>
          <div className="text-2xl pt-3 text-white font-semibold">
            Dinas Kependudukan dan Pencacatan Sipil Kota Semarang{" "}
          </div>
          <button className="mt-20 bg-white text-[#D24545] py-2 px-20 text-2xl font-semibold rounded-xl border-[#D24545] shadow-xl">
            Daftar Magang
          </button>
        </div>
      </div>
      <Tentang />
      <div className="bg-gradient-to-l from-[#A94438] to-[#D24545] flex h-[200px]">
        <div>
        <img src={fotoBeranda} alt="" className="h-[400px]"/>
        </div>
        <div className="text-3xl flex justify-center flex-col ">
          <p className="text-white">
            Kesempatan Terbaik untuk Mahasiswa yang Sedang Mencari Pengalaman
          </p>
          <p className="text-white">Daftarkan dirimu sekarang ! </p>
          <button className="mt-10 bg-white text-[#D24545] py-2 px-20 text-2xl font-semibold rounded-xl border-[#D24545] shadow-xl">
            Daftar Magang
          </button>
        </div>
       
      </div>
    </div>
  );
};

export default Beranda;
