import React from "react";

const Logind = () => {
  return (
    <div className="flex h-screen">
      {/* Left side (Image Section) */}
      <div className="hidden md:flex w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('/path-to-your-image.png')" }}>
        <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-40">
          <h1 className="text-white text-3xl font-bold">Mudah, Cepat, Akurat Tanpa Pungutan</h1>
        </div>
      </div>

      {/* Right side (Form Section) */}
      <div className="flex w-full md:w-1/2 justify-center items-center bg-white p-8">
        <div className="max-w-md w-full">
          <div className="flex items-center justify-center mb-8">
            <img src="/path-to-logo.png" alt="Logo" className="h-12" />
          </div>
          <h2 className=" bg-red-500 text-3xl font-bold text-center text-gray-800 mb-6">Masuk Akun</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input type="email" id="email" className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600" placeholder="Email" />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700">Password</label>
              <input type="password" id="password" className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600" placeholder="Password" />
              <a href="#" className="text-sm text-red-600 hover:underline float-right mt-2">Lupa Password?</a>
            </div>
            <button className="w-full p-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition">Masuk</button>
          </form>
          <p className="mt-6 text-center text-gray-600">
            Belum punya akun? <a href="#" className="text-red-600 hover:underline">Daftar sekarang</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Logind;
