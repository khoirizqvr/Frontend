import React from 'react';
import Navbar from '../Components/navbar'; // Mengimpor komponen navbar
import Background from '../assets/Pictures/bg-daftarmagang.svg';

const DaftarMagang = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Navbar dipastikan memiliki posisi tetap di atas */}
      <div className="relative z-30">
        <Navbar />
      </div>
      
      {/* Background sebagai latar belakang */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${Background})` }}
      />
      
      {/* Konten utama halaman dengan posisi khusus */}
      <div className="absolute inset-0 flex justify-center items-center text-white text-left">
  <div>
    <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-4">Pendaftaran Magang</h1>
    <p className="text-2xl md:text-3xl lg:text-4xl mb-8">Mari Bergabung Bersama Kami!</p>
    <button className="px-6 py-3 bg-white text-red-600 rounded-lg text-lg font-semibold shadow-md hover:bg-gray-200 transition">
      Daftar Magang
    </button>
  </div>
</div>


    </div>
  );
};

export default DaftarMagang;
