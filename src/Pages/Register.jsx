import React from "react";
import backgroundImage from "../assets/Pictures/disdukcapil.png";

const Register = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-between bg-gray-100">
      {/* Header Section */}
      <div className="w-full bg-gradient-to-t from-red-500 to-red-700 text-white py-16 relative rounded-b-3xl">
        <img
          src={backgroundImage}
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
        <div className="bg-transparent rounded-lg p-8 w-full max-w-4xl flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
          {/* Input Section */}
          <div className="flex-1">
            <form className="space-y-4">
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
                  className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D24545]"
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
                  className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D24545]"
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
                  className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D24545]"
                  placeholder="NIK"
                />
              </div>

              {/* Password */}
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-left"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D24545]"
                  placeholder="Password"
                />
              </div>

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
                  className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D24545]"
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
                  className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D24545]"
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
                  className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D24545]"
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
                  className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D24545]"
                  placeholder="Jurusan"
                />
              </div>
            </form>
          </div>

          {/* Upload Section */}
          <div className="flex-1">
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
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#D24545]"
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
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#D24545]"
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
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#D24545]"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-red-700 text-white py-3 rounded-md hover:bg-red-800 transition duration-300 mt-8"
            >
              Daftar
            </button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="w-full bg-red-700 text-white py-6 flex flex-col justify-center items-center">
        <p className="text-center text-lg">
          Daftarkan Dirimu{" "}
          <span className="font-bold text-yellow-400">Sekarang</span> Dan
          Bergabung 
        </p>
        <p className="text-center text-lg">
        Bersama Kami Untuk Mencari{" "}
        <span className="font-bold text-yellow-400">Pengalaman!</span>
        </p>
      </div>
    </div>
  );
};

export default Register;
