import React, { useState } from "react";
import axios from "axios";
import Photo from "../assets/Pictures/disdukcapil.png";
import Logo from "../assets/Pictures/logodisdukcapil.png";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid"; // Import icons for eye

const LoginAdmin = () => {
  const [nip, setNip] = useState("");
  const [password, setPassword] = useState("");
  const [nipError, setNipError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    let hasError = false;

    if (!nip || nip.trim() === "") {
      setNipError("NIP tidak boleh kosong");
      hasError = true;
    }

    if (!password || password.trim() === "") {
      setPasswordError("Password tidak boleh kosong");
      hasError = true;
    }
    if (hasError) return;

    try {
      // Login request
      const loginResponse = await axios.post(
        "http://localhost:5000/api/admin/login",
        {
          nip,
          password,
        }
      );

      // Simpan token ke local storage
      const token = loginResponse.data.token;
      localStorage.setItem("token", token);

      // Setelah login, fetch data admin berdasarkan email
      const adminResponse = await axios.get(
        "http://localhost:5000/api/admins",
        {
          headers: {
            Authorization: `Bearer ${token}`, // Gunakan token untuk authorization
          },
          params: { nip }, // Kirim email sebagai parameter
        }
      );

      // Logging respons API admin
      console.log("Admin Response Data:", adminResponse.data);

      // Simpan adminName ke local storage
      const adminName =
        adminResponse.data.adminName || adminResponse.data.name || "Admin";
      localStorage.setItem("adminName", adminName);

      // Redirect ke dashboard admin
      window.location.href = "/admin";
    } catch (err) {
      console.error(
        "Login failed:",
        err.response ? err.response.data : err.message
      );
      setError(
        err.response
          ? err.response.data.error
          : "An error occurred during login."
      );
    }
  };

  return (
    <div className="flex lg:h-screen lg:w-screen">
      {/* Bagian Gambar untuk Desktop */}
      <div
        className="hidden lg:flex lg:w-3/4 h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${Photo})` }}
      >
        <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-40">
          <h1 className="text-white text-3xl font-bold">
            Mudah, Cepat, Akurat Tanpa Pungutan
          </h1>
        </div>
      </div>

      {/* Bagian Formulir */}
      <div
        className="relative flex lg:hidden w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${Photo})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      <div className="absolute lg:relative z-10 flex justify-center items-center bg-white lg:bg-transparent py-5 md:rounded-md md:h-[500px] md:w-[500px] lg:w-3/6 mt-48 md:mt-52 lg:mt-32 lg:ml-0 md:ml-32">
        <div className="max-w-md w-full px-8">
          {/* Container for logo and text */}
          <div className="flex items-center mb-6">
            <img src={Logo} alt="Logo" className="h-16 mr-4" />
            <div>
              <h2 className="text-3xl font-bold text-left text-gray-800">
                <span className="text-black">Masuk Akun</span>
                <span style={{ color: "#D24545" }}> Admin</span>
              </h2>
              <p className="font-bold text-left text-gray-800">
                Silahkan Masuk Ke Akun Anda
              </p>
            </div>
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-left">{error}</p>}

          <form onSubmit={handleLogin} noValidate>
            <div className="mb-4">
              <label htmlFor="nip" className="block text-gray-700 text-left">
                NIP
              </label>
              <input
                type="text"
                id="nip"
                className={`w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D24545]
                  ${nipError ? "border-red-500" : "border-gray-300"}`}
                placeholder="NIP"
                value={nip}
                onChange={(e) => setNip(e.target.value)}
                required
              />
              {nipError && (
                <p className="text-red-500 text-sm mt-[5px]">{nipError}</p>
              )}
            </div>
            <div className="mb-6 relative">
              <label
                htmlFor="password"
                className="block text-gray-700 text-left"
              >
                Password
              </label>
              <div className="relative w-full">
                <input
                  type={showPassword ? "text" : "password"} // Show password as text if showPassword is true
                  id="password"
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D24545] pr-12
                    ${passwordError ? "border-red-500" : "border-gray-300"}`}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {/* Toggle button for show/hide password */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)} // Toggle the showPassword state
                  className="absolute inset-y-0 right-0 p-4 flex items-center text-gray-500"
                >
                  {showPassword ? (
                    <EyeSlashIcon className="w-5 h-5" /> // Icon when password is shown
                  ) : (
                    <EyeIcon className="w-5 h-5" /> // Icon when password is hidden
                  )}
                </button>
                <div className="absolute -bottom-6 text-red-500 text-sm">
                  {passwordError && <p>{passwordError}</p>}
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="w-full p-3 bg-[#D24545] text-white font-bold rounded-lg hover:bg-red-700 transition mt-4"
            >
              Masuk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginAdmin;
