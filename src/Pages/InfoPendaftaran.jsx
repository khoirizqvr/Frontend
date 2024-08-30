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
          <img src={Info} alt="" className="max-sm:h-screen max-sm:w-full max-sm:object-cover max-sm:object-right lg:w-full"  />
          <div className="absolute inset-y-1/2 right-0 transform -translate-y-1/2 text-left lg:p-4 mr-10">
            <p className="text-3xl md:text-2xl lg:text-5xl font-bold text-white flex-col text-center pl-8">
              Informasi Pendaftaran Magang
            </p>
            <p className="text-2xl md:text-xl lg:text-3xl font-semibold text-white text-center pl-8 py-5 ">
              Panduan Lengkap
            </p>
          </div>
        </div>

        {/* Content Informasi */}
        <div className="text-center">
          <p className="text-[#D24545] text-2xl md:text-4xl lg:text-5xl font-bold py-5 md:py-8 lg:py-10">
            Info Penting Pendaftaran <span className="max-sm:flex justify-center text-black">Magang</span>
          </p>
          <img
            src={InfoOprec}
            alt=""
            className="mx-auto px-2 md:px-5 lg:px-7 "
          />
          <p className="text-[#D24545] text-2xl md:text-4xl lg:text-5xl font-bold py-10 md:py-15 lg:py-20">
            <span className="max-sm:flex justify-center text-black">Tata Cara</span> Pendaftaran Magang
          </p>
          <img
            src={TataCara}
            alt=""
            className="mx-auto px-4 md:px-8 lg:px-10 w-full max-w-xl md:max-w-4xl lg:max-w-7xl pb-5 md:pb-8 lg:pb-10"
          />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default InfoPendaftaran;
