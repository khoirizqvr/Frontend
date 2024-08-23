import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate untuk navigasi
import { ArrowLeftIcon } from "@heroicons/react/24/solid"; // Import Heroicon
import Navbar from "../Components/navbar";
import Footer from "../Components/Footer";

function FormPendaftaran2() {
  const navigate = useNavigate(); // Inisialisasi useNavigate

  return (
    <div className="bg-[#D24545] min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex justify-center">
        <div className="bg-white rounded-lg shadow-lg p-6 w-full md:w-3/5">
          <div className="mb-6">
            {/* Tombol Kembali */}
            <button
              onClick={() => navigate("/formpendaftaran1")} // Ganti dengan link tujuan
              className="text-red-600 font-semibold flex items-center mb-4"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Kembali
            </button>
            <div className="flex justify-between items-center border-b-2 border-black pb-4">
              <h2 className="text-2xl font-bold">Daftar Ke Lowongan</h2>
              <span className="text-xl">2/2</span>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Dokumen Pendukung</h3>

              {/* Surat Rekomendasi */}
              <div className="border rounded p-4 mb-4">
                <label className="font-semibold block mb-2">
                  Surat Rekomendasi/ Permohonan
                </label>
                <p className="text-gray-500 text-sm mb-4">
                  Silahkan unggah surat kamu
                </p>
                <div className="flex items-center">
                  <label className="bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-l cursor-pointer hover:bg-gray-300">
                    Choose File
                    <input type="file" className="hidden" />
                  </label>
                  <span className="bg-white text-gray-500 py-2 px-4 border border-l-0 rounded-r flex-1">
                    Upload Surat Rekomendasi / Permohonan
                  </span>
                </div>
                <p className="text-gray-400 text-xs mt-2">
                  Unggah dalam format PDF dengan ukuran maksimal 5 MB.
                </p>
              </div>

              {/* Curriculum Vitae */}
              <div className="border rounded p-4 mb-4">
                <label className="font-semibold block mb-2">
                  Curriculum Vitae
                </label>
                <p className="text-gray-500 text-sm mb-4">
                  Silahkan unggah CV terbaru kamu
                </p>
                <div className="flex items-center">
                  <label className="bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-l cursor-pointer hover:bg-gray-300">
                    Choose File
                    <input type="file" className="hidden" />
                  </label>
                  <span className="bg-white text-gray-500 py-2 px-4 border border-l-0 rounded-r flex-1">
                    Upload CV
                  </span>
                </div>
                <p className="text-gray-400 text-xs mt-2">
                  Unggah dalam format PDF dengan ukuran maksimal 5 MB.
                </p>
              </div>

              {/* Link Portofolio (Opsional) */}
              <div className="border rounded p-4 mb-4">
                <label className="font-semibold block mb-2">
                  Link Portofolio (Opsional)
                </label>
                <p className="text-gray-500 text-sm mb-2">
                  Silahkan unggah link portofolio kamu
                </p>
                <input
                  type="text"
                  placeholder="Upload link portofolio kamu"
                  className="w-full border rounded px-3 py-2"
                />
              </div>

              {/* Durasi Magang */}
              <div className="border rounded p-4 mb-4">
                <label className="font-semibold block mb-2">
                  Durasi Magang
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Tanggal Mulai
                    </label>
                    <input
                      type="date"
                      className="w-full border rounded px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Tanggal Selesai
                    </label>
                    <input
                      type="date"
                      className="w-full border rounded px-3 py-2"
                    />
                  </div>
                </div>
              </div>

              {/* Checkbox Syarat dan Ketentuan */}
              <div className="mt-4">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-red-600"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    Saya Menyetujui{" "}
                    <a href="#" className="text-blue-500">
                      Syarat dan Ketentuan
                    </a>
                  </span>
                </label>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex justify-center">
              <button className="bg-[#D24545] w-64 h-12 text-white font-semibold py-2 px-4 rounded-2xl hover:bg-red-600">
                Kirim
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FormPendaftaran2;
