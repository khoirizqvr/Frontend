import React from "react";
import Univ from "../assets/Pictures/univ.svg"


function mitra() {
  return (
    <div className="py-10">
      <div className="text-center text-5xl font-bold flex-col pb-10 ">Instansi Pendidikan ternama di indonesia telah berkejasama dengan <span className="text-[#D24545]">Disdukcapil Kota Semarang</span> </div>
      <div><img src={Univ} alt="" /></div>
    </div>
  );
}

export default mitra;
