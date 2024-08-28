import React, { useState } from "react";
import Navbar from "../Components/navbar";
import Background from "../assets/Pictures/bgmitra.svg";
import Disdukcapil from "../assets/Pictures/disdukcapil2.svg";
import Mitra from "../Components/profileMitra";
import Bidang from "../Components/Bidang";
import LayananTPDK from "../Components/layananTPDK";
import Footer from "../Components/Footer";

function InfoMitra() {
  const [activeComponent, setActiveComponent] = useState("Profil");

  const renderComponent = () => {
    switch (activeComponent) {
      case "Profil":
        return <Mitra />;
      case "Bidang":
        return <Bidang />;
      case "Pelayanan TPDK":
        return <LayananTPDK />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <img src={Background} alt="" className="w-full" />
      <div className="absolute inset-0 flex justify-between items-center mx-20 mb-40">
        <div>
          <p className="text-white font-bold text-5xl pb-3">
            Belajar, Bertumbuh, dan{" "}
            <span className="text-[#FFCC4E]"> Berkontribusi</span>
          </p>
          <p className="text-white font-bold text-2xl">
            Bersama <span className="text-[#FFCC4E]">DISDUKCAPIL </span> Kota
            Semarang
          </p>
          <p className="text-white text-xl">
            Dengan lowongan magang, kami siap membantu anda belajar lebih jauh
            tentang dunia kerja
          </p>
        </div>
        <img src={Disdukcapil} alt="" />
      </div>

      {/* Button Pilihan Menu */}
      <div className="absolute inset-0 bg-white mx-20 h-[100px] mt-[460px] shadow-lg rounded-lg flex justify-center space-x-10 py-5">
        <button
          className={`flex justify-center items-center py-5 w-64 border-2 font-bold rounded-xl text-2xl transition-colors duration-300 ${
            activeComponent === "Profil"
              ? "bg-[#D24545] text-white"
              : "border-[#D24545] hover:bg-[#D24545] hover:text-white"
          }`}
          onClick={() => setActiveComponent("Profil")}
        >
          Profil
        </button>
        <button
          className={`flex justify-center items-center py-5 w-64 border-2 font-bold rounded-xl text-2xl transition-colors duration-300 ${
            activeComponent === "Bidang"
              ? "bg-[#D24545] text-white"
              : "border-[#D24545] hover:bg-[#D24545] hover:text-white"
          }`}
          onClick={() => setActiveComponent("Bidang")}
        >
          Bidang
        </button>
        <button
          className={`flex justify-center items-center py-5 w-64 border-2 font-bold rounded-xl text-2xl transition-colors duration-300 ${
            activeComponent === "Pelayanan TPDK"
              ? "bg-[#D24545] text-white"
              : "border-[#D24545] hover:bg-[#D24545] hover:text-white"
          }`}
          onClick={() => setActiveComponent("Pelayanan TPDK")}
        >
          Pelayanan TPDK
        </button>
      </div>

      {/* Detail */}
      <div className="mt-28">{renderComponent()}</div>
      <Footer/>
    </div>
  );
}

export default InfoMitra;
