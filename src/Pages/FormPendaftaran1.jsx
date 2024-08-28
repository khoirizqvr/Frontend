import React from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom"; // Import useNavigate untuk navigasi


function FormPendaftaran1() {
  const navigate = useNavigate(); // Inisialisasi useNavigate
  return (
    <div className="bg-[#D24545] min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto mt-24 mb-3 px-4 py-8 flex justify-center">
        <div className="bg-white rounded-lg shadow-lg p-6 w-3/5">
          <div className="flex justify-between items-center border-b-2 border-black mb-6 pb-4">
            <h2 className="text-2xl font-bold">FORM PENDAFTARAN</h2>
            <span className="text-xl">1/2</span>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {/* Informasi Data Diri */}
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Informasi Data Diri
              </h3>
              <div className="border rounded p-4">
                <div className="mb-2">
                  <label>Nama</label>
                  <p className="font-semibold block">Syaiful Rizal Sidiq</p>
                </div>
                <div className="mb-2">
                  <label>Nomor Induk Mahasiswa</label>
                  <p className="font-semibold block">A11.2021.13849</p>
                </div>
                <div className="mb-2">
                  <label>Nomor Induk Kependudukan</label>
                  <p className="font-semibold block">3374093010010001</p>
                </div>
              </div>
            </div>

            {/* Kontak Pribadi */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Kontak Pribadi</h3>
              <div className="border rounded p-4">
                <div className="mb-2">
                  <label>Email</label>
                  <p className="font-semibold block">syaifulrizal504@gmail.com</p>
                </div>
                <div className="mb-2">
                  <label>No. Telp</label>
                  <p className="font-semibold block">0856-4340-8961</p>
                </div>
              </div>
            </div>

            {/* Pendidikan */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Pendidikan</h3>
              <div className="border rounded p-4">
                <div className="mb-2">
                  <label>Asal Universitas</label>
                  <p className="font-semibold block">Universitas Dian Nuswantoro</p>
                </div>
                <div className="mb-2">
                  <label>Jurusan</label>
                  <p className="font-semibold block">Teknik Informatika</p>
                </div>
              </div>
            </div>

            {/* Kesediaan */}
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Apakah kamu bersedia di tempatkan magang di seluruh kantor
                cabang?
              </h3>
              <div className="border rounded p-4">
                <label className="mr-4">
                  <input type="radio" name="kesediaan" value="ya" checked /> Ya
                </label>
                <label>
                  <input type="radio" name="kesediaan" value="tidak" /> Tidak
                </label>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex justify-center">
              <button 
              onClick={() => navigate("/formpendaftaran2")}
              className="bg-[#D24545] w-64 h-12 text-white font-semibold py-2 px-4 rounded-2xl hover:bg-red-600">
                Selanjutnya
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FormPendaftaran1;
