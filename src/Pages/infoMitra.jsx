import React from "react";
import Navbar from "../Components/navbar";
import Background from "../assets/Pictures/bgmitra.svg";
import Disdukcapil from "../assets/Pictures/disdukcapil2.svg";

function infoMitra() {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <img src={Background} alt="" className="w-full" />
      <div className="absolute inset-0 flex justify-between items-center mx-20">
        <div className="">
          <p className="text-white font-bold text-5xl pb-3">
            Belajar, Bertumbuh, dan{" "}
            <span className="text-[#FFCC4E]"> Berkontribusi</span>
          </p>
          <p className="text-white font-bold text-2xl">
            Bersama <span className="text-[#FFCC4E]">DISDUKCAPIL </span> Kota
            Semarang
          </p>
          <p className="text-white  text-xl">
            Dengan lowongan magang, kami siap membantu anda belajar lebih jauh
            tentang dunia kerja
          </p>
        </div>

        <img src={Disdukcapil} alt="" className="" />
      </div>

      {/* Button Pilihan Menu */}
      <div className=" absolute inset-0 bg-white mx-20  h-[100px] mt-[550px] shadow-lg rounded-lg flex justify-center space-x-10 py-5">
        <button className=" flex justify-center items-center py-5 w-64 border-2 border-[#D24545] font-bold rounded-xl text-2xl hover:bg-[#D24545] hover:text-white transition-colors duration-300">
          Profil
        </button>
        <button className=" flex justify-center items-center  py-5 w-64 border-2 border-[#D24545] font-bold rounded-xl text-2xl hover:bg-[#D24545] hover:text-white transition-colors duration-300">
          Bidang
        </button>
        <button className=" flex justify-center items-center py-5 w-64 border-2 border-[#D24545] font-bold rounded-xl text-2xl hover:bg-[#D24545] hover:text-white transition-colors duration-300">
          Pelayanan TPDK
        </button>
      </div>
    </div>
  );
}

export default infoMitra;
