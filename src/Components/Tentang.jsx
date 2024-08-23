import React from "react";
import Kantor from "../assets/Pictures/kantor.svg";

function Tentang() {
  return (
    <div className="py-10">
      <div className="text-5xl font-bold px-20 ">
        <div>Tentang Disdukcapil</div>
        <div className="text-[#D24545]">Kota Semarang</div>
      </div>
      <div className="flex justify-center items-start gap-20 px-20">
      <div className="text-justify pt-10 text-2xl">
        Dinas Kependudukan dan Pencatatan Sipil (Disdukcapil) Kota Semarang
        merupakan salah satu Organisasi Perangkat Daerah Kota Semarang yang
        bertanggung jawab melaksanakan urusan pemerintahan daerah terkait
        pelayanan administrasi kependudukan dan pencatatan sipil. Tugas pokok
        ini dilaksanakan berdasarkan prinsip otonomi daerah dan tugas
        pembantuan, memastikan pelayanan kepada masyarakat dalam hal
        administrasi kependudukan berjalan efektif dan sesuai ketentuan.
      </div>
      <img src={Kantor} alt="" className="" />
      </div>
      
    </div>
  );
}

export default Tentang;
