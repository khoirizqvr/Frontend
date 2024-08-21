import React, { useState } from "react";
import HeaderImage from "../assets/Pictures/disdukcapil.png";
import BackgroundImage from "../assets/Pictures/logodisdukcapil.png";
import Photo from "../assets/Pictures/gambargaya.png";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen w-full flex flex-col justify-between bg-gray-100 relative">
      {/* Background Image */}
      <div className="absolute inset-0 flex justify-center items-center z-0">
        <img
          src={BackgroundImage}
          alt="Background"
          className="w-[600px] h-[600px] object-center opacity-20"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col">
        {/* Header Section */}
        <div className="w-full bg-gradient-to-t from-red-500 to-red-700 text-white py-16 relative rounded-b-3xl">
          <img
            src={HeaderImage}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover opacity-10"
          />
          <h2 className="text-5xl font-bold text-center text-gray-800 mb-4">
            <span className="text-black">Registrasi</span>{" "}
            <span className="text-white">Akun</span>
          </h2>
          <p className="text-center text-lg relative z-10">
            Daftar Akun Anda Untuk Dapat Mendaftar Magang
          </p>
        </div>

        {/* Form Section */}
        <div className="flex-1 flex justify-center items-center px-4 py-8">
          <div className="bg-transparent rounded-lg p-8 w-full max-w-4xl flex flex-col space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Input Section - Left Side */}
              <div className="flex flex-col space-y-4">
                {/* Nama Lengkap */}
                <div className="mb-4">
                  <label
                    htmlFor="namaLengkap"
                    className="block text-gray-700 text-left"
                  >
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="namaLengkap"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D24545]"
                    placeholder="Nama Lengkap"
                  />
                </div>

                {/* NIM */}
                <div className="mb-4">
                  <label
                    htmlFor="nim"
                    className="block text-gray-700 text-left"
                  >
                    NIM
                  </label>
                  <input
                    type="text"
                    id="nim"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D24545]"
                    placeholder="NIM"
                  />
                </div>

                {/* NIK */}
                <div className="mb-4">
                  <label
                    htmlFor="nik"
                    className="block text-gray-700 text-left"
                  >
                    NIK
                  </label>
                  <input
                    type="text"
                    id="nik"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D24545]"
                    placeholder="NIK"
                  />
                </div>

                {/* Password */}
                <div className="mb-4 relative">
                  <label
                    htmlFor="password"
                    className="block text-gray-700 text-left"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D24545] pr-12"
                      placeholder="Password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500"
                    >
                      {showPassword ? (
                        <EyeSlashIcon className="w-5 h-5" />
                      ) : (
                        <EyeIcon className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Input Section - Right Side */}
              <div className="flex flex-col space-y-4">
                {/* Email */}
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 text-left"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D24545]"
                    placeholder="Email"
                  />
                </div>

                {/* No. Telp */}
                <div className="mb-4">
                  <label
                    htmlFor="noTelp"
                    className="block text-gray-700 text-left"
                  >
                    No. Telp
                  </label>
                  <input
                    type="text"
                    id="noTelp"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D24545]"
                    placeholder="No. Telp"
                  />
                </div>

                {/* Asal Universitas */}
                <div className="mb-4">
                  <label
                    htmlFor="asalUniversitas"
                    className="block text-gray-700 text-left"
                  >
                    Asal Universitas
                  </label>
                  <input
                    type="text"
                    id="asalUniversitas"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D24545]"
                    placeholder="Asal Universitas"
                  />
                </div>

                {/* Jurusan */}
                <div className="mb-4">
                  <label
                    htmlFor="jurusan"
                    className="block text-gray-700 text-left"
                  >
                    Jurusan
                  </label>
                  <input
                    type="text"
                    id="jurusan"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D24545]"
                    placeholder="Jurusan"
                  />
                </div>
              </div>
            </div>

            {/* Upload Section */}
            <div className="space-y-4">
              <div className="mb-4">
                <label
                  htmlFor="uploadFoto"
                  className="block text-gray-700 text-left"
                >
                  Upload Foto
                </label>
                <input
                  type="file"
                  id="uploadFoto"
                  className="p-2.5 mt-2 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#D24545]"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="uploadCV"
                  className="block text-gray-700 text-left"
                >
                  Upload CV
                </label>
                <input
                  type="file"
                  id="uploadCV"
                  className="p-2.5 mt-2 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#D24545]"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="uploadTranskrip"
                  className="block text-gray-700 text-left"
                >
                  Upload Transkrip Nilai
                </label>
                <input
                  type="file"
                  id="uploadTranskrip"
                  className="p-2.5 mt-2 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#D24545]"
                />
              </div>
            </div>

            {/* Register Button */}
            <div className="text-center">
              <button className="w-full bg-red-500 text-white py-3 rounded-lg focus:outline-none hover:bg-red-600">
                Daftar
              </button>
            </div>

            {/* Already Have Account */}
            <div className="text-center">
              <p className="text-gray-600">
                Sudah Punya Akun?{" "}
                <a href="/login" className="text-red-500 hover:underline">
                  Masuk Sekarang
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="bg-red-700 text-white h-[250px] flex items-end mt-10">
          <div className="grid grid-cols-2 w-full mx-36">
            <div className="flex items-end">
              <img src={Photo} alt="Photo" className="h-96" />
            </div>
            <div className="flex flex-col justify-center items-center text-4xl pt-10 mt-20">
              <p>
                Daftarkan Dirimu{" "}
                <span className="font-bold text-yellow-400">Sekarang</span> Dan
                Bergabung
              </p>
              <p>
                Bersama Kami Untuk Mencari{" "}
                <span className="font-bold text-yellow-400">Pengalaman</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
