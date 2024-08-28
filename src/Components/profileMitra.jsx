import React from "react";
import Tentang from "./Tentang";
import Visi from "../assets/Pictures/visi_misi.jpeg";

function profileMitra() {
  return (
    <div>
      <Tentang />
      <div className="">
        <div className=" bg-[#D24545] h-[200px] py-10 font-bold flex flex-col items-center justify-center text-center text-4xl text-white">
          <p>Visi dan Misi </p>
          <p>Dinas Kependudukan dan Pencatatan Sipil Kota Semarang</p>
        </div>
        <div className="flex justify-center py-10">
          <img src={Visi} alt="" className="w-auto h-auto" />
        </div>
        <div className=" bg-[#D24545] h-[400px] py-10 font-bold flex flex-col items-center justify-center text-center text-4xl text-white">
          <p>MOTTO </p>
          <p>Dinas Kependudukan dan Pencatatan Sipil Kota Semarang</p>
          <div className="py-20">" Mudah, Cepat, Akurat Tanpa Pungutan "</div>
        </div>
      </div>
    </div>
  );
}

export default profileMitra;
