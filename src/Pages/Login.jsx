import React from "react";
import Photo from "../assets/Pictures/disdukcapil.png";
import Logo from "../assets/Pictures/logodisdukcapil.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen w-screen">
      {/* Sisi Kiri (Bagian Gambar) */}
      <div
        className="hidden md:flex w-3/4 bg-cover bg-center"
        style={{ backgroundImage: `url(${Photo})` }}
      >
        <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-40">
          <h1 className="text-white text-3xl font-bold">
            Mudah, Cepat, Akurat Tanpa Pungutan
          </h1>
        </div>
      </div>

      {/* Sisi Kanan (Bagian Formulir) */}
      <div className="flex w-full md:w-1/2 justify-center items-center bg-white">
        <div className="max-w-md w-full px-8">
          {/* Container for logo and text */}
          <div className="flex items-center mb-6">
            <img src={Logo} alt="Logo" className="h-16 mr-4" />
            <div>
              <h2 className="text-3xl font-bold text-left text-gray-800">
                <span className="text-black">Masuk</span>{" "}
                <span style={{ color: "#D24545" }}>Akun</span>
              </h2>
              <p className="font-bold text-left text-gray-800">
                Silahkan Masuk Ke Akun Anda Untuk Mendaftar
              </p>
            </div>
          </div>

          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-left">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D24545]"
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
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
              <a
                href="#"
                className="text-sm text-[#D24545] hover:underline float-right mt-2 mb-12"
              >
                Lupa Password?
              </a>
            </div>
            <button className="w-full p-3 bg-[#D24545] text-white font-bold rounded-lg hover:bg-red-700 transition">
              Masuk
            </button>
          </form>
          <p className="mt-6 text-center text-gray-600">
            Belum punya akun?{" "}
            <button
              className="text-[#D24545] hover:underline"
              onClick={() => navigate("/register")}
            >
              Daftar sekarang
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
