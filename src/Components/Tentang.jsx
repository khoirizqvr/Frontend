import React from "react";
import Kantor from "../assets/Pictures/kantor.svg";

function Tentang() {
  return (
    <div className="py-10">
      <div className="text-5xl flex justify-between items-start mx-20 gap-20 ">
        <div className="w-3/4">
          <div className="font-bold ">Tentang Disdukcapil</div>
          <div className="text-[#D24545] font-bold ">Kota Semarang</div>
          <div className="text-justify py-10 text-2xl">
            Dinas Kependudukan dan Pencatatan Sipil (Disdukcapil) Kota Semarang
            merupakan salah satu Organisasi Perangkat Daerah Kota Semarang yang
            bertanggung jawab melaksanakan urusan pemerintahan daerah terkait
            pelayanan administrasi kependudukan dan pencatatan sipil. Tugas
            pokok ini dilaksanakan berdasarkan prinsip otonomi daerah dan tugas
            pembantuan, memastikan pelayanan kepada masyarakat dalam hal
            administrasi kependudukan berjalan efektif dan sesuai ketentuan.
          </div>
        </div>
        <div className="">
          <img src={Kantor} alt="" className="w-[370px]" />
        </div>
      </div>
    </div>
  );
}

export default Tentang;
