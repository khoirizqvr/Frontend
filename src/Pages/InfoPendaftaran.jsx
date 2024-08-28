import React from "react";
import Info from "../assets/Pictures/infoPendaf.svg";
import Navbar from "../Components/navbar";
import InfoOprec from "../assets/Pictures/infooprec.svg";
import TataCara from "../assets/Pictures/tatacara.svg";
import Footer from "../Components/Footer";

function InfoPendaftaran() {
  return (
    <div>
      <div>
        <Navbar />
        <div className="relative">
          <img src={Info} alt="" className="w-full" />
          <div className="absolute inset-y-1/2 right-0 transform -translate-y-1/2 text-left p-4 mr-20 ">
            <p className="text-5xl font-bold text-white">
              Informasi Pendaftaran Magang
            </p>
            <p className="text-3xl font-semibold text-white">Panduan Lengkap</p>
          </div>
        </div>

        {/* Content Informasi */}
        <div className="text-center">
          <p className="text-[#D24545] text-5xl font-bold py-10 ">
            Info Penting Pendaftaran <span className="text-black">Magang</span>
          </p>
          <img src={InfoOprec} alt="" className="mx-auto" />
          <p className="text-[#D24545] text-5xl font-bold py-20 ">
            <span className="text-black">Tata Cara</span> Pendaftaran Magang
          </p>
          <img src={TataCara} alt="" className="mx-auto" />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default InfoPendaftaran;
