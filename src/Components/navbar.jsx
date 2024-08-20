import React from "react";

const Navbar = () => {
  return (
    <div className="container mx-auto">
      <div className=" border-black flex justify-between px-5">
      <div className=" flex items-center justify-center">PrajaGamer</div>
      <div className="p-2 gap-4 bg-yellow-300">
       <button className="px-2">Beranda</button>
       <button className="px-2">Tentang Kami</button>
       <button className="px-2">Info Pendaftaran</button>
       <button className="px-2">Daftar Magang</button>
      </div>
      <button className=" p-2 bg-[#D24545] rounded-sm">Masuk</button>
    </div>
    </div>
  );
};

export default Navbar;
