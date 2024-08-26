import React from "react";
import ProfileBackground from "../assets/Pictures/Profile.png";
import Photoprofile from "../assets/Pictures/Profile.png";
import Navbar from "../Components/navbar";
import Footer from "../Components/Footer";

const ProfilePage = () => {
  return (
    <div className="bg-[#D24545] min-h-screen flex flex-col">
      <Navbar />
      <div className="w-[1100px] mx-auto bg-[#f6f6f6] rounded-2xl mt-10 mb-10 pb-6">        
        <div className="relative">
          <img
            src={ProfileBackground}
            alt="Background"
            className="w-full h-56 object-cover rounded-t-2xl"
          />
          <div
            className="absolute"
            style={{ transform: "translate(50px, -120px)" }}
          >
            <img
              className="w-60 rounded-full"
              src={Photoprofile}
              alt="Profile"
            />
          </div>
        </div>

        {/* Profile Information */}
        <div
          className="absolute"
          style={{ transform: "translate(320px, 25px)" }}
        >
          <h1 className="text-2xl font-semibold">
            Virnika Shefira Gina Morissa
          </h1>
          <p className="text-gray-500">Universitas Dian Nuswantoro</p>
        </div>

        {/* Main Content */}
        <div className="mt-[150px] px-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Column */}
          <div>
            {/* Contact Info */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Kontak Pribadi</h3>
              <div className="border rounded p-4 bg-gray-100">
                <div className="mb-2">
                  <label>Email</label>
                  <p className="font-semibold block">
                    Syaifulrizal504@gmail.com
                  </p>
                </div>
                <div className="mb-2">
                  <label>No. Telp</label>
                  <p className="font-semibold block">0856-4340-8961</p>
                </div>
              </div>
            </div>

            {/* Personal Data Info */}
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Informasi Data Pribadi
              </h3>
              <div className="border rounded p-4 bg-gray-100">
                {/* Nomor Induk Mahasiswa dan Nomor Induk Kependudukan */}
                <div className="flex justify-between mb-2">
                  <div className="w-1/2">
                    <label>Nomor Induk Mahasiswa</label>
                    <p className="font-semibold">A11.2021.13849</p>
                  </div>
                  <div className="w-1/2">
                    <label>Nomor Induk Kependudukan</label>
                    <p className="font-semibold">3374093010010001</p>
                  </div>
                </div>

                {/* Tempat dan Tanggal Lahir */}
                <div className="flex justify-between mb-2">
                  <div className="w-1/2">
                    <label>Tempat Lahir</label>
                    <p className="font-semibold">-</p>
                  </div>
                  <div className="w-1/2">
                    <label>Tanggal Lahir</label>
                    <p className="font-semibold">-</p>
                  </div>
                </div>

                {/* Alamat Domisili */}
                <p className="font-semibold block">Alamat Domisili</p>
                <div className="flex justify-between mb-2">
                  <div className="w-1/2">
                    <label>Provinsi</label>
                    <p className="font-semibold">-</p>
                  </div>
                  <div className="w-1/2">
                    <label>Kota/Kab</label>
                    <p className="font-semibold">-</p>
                  </div>
                </div>
                <div className="w-1/2 mb-2">
                  <label>Alamat Domisili</label>
                  <p className="font-semibold">-</p>
                </div>

                {/* Alamat Domisili KTP */}   
                <div className="mb-2">
                  <p className="font-semibold block">Alamat Domisili KTP</p>
                </div>
                <div className="flex justify-between mb-2">
                  <div className="w-1/2">
                    <label>Provinsi</label>
                    <p className="font-semibold">-</p>
                  </div>
                  <div className="w-1/2">
                    <label>Kota/Kab</label>
                    <p className="font-semibold">-</p>
                  </div>
                </div>
                <div className="w-1/2 mb-2">
                  <label>Alamat Domisili</label>
                  <p className="font-semibold">-</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Education Info */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Pendidikan</h3>
              <div className="border rounded p-4 bg-gray-100">
                <div className="mb-2">
                  <label>Asal Universitas</label>
                  <p className="font-semibold block">
                    Universitas Dian Nuswantoro
                  </p>
                </div>
                <div className="mb-2">
                  <label>Jurusan</label>
                  <p className="font-semibold block">Teknik Informatika</p>
                </div>
                <div className="mb-2">
                  <label>IPK</label>
                  <p className="font-semibold block">-</p>
                </div>
                <div className="mb-2">
                  <label>Semester Yang Sedang di Tempuh</label>
                  <p className="font-semibold block">-</p>
                </div>
              </div>
            </div>

            {/* Supervisor Info */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Pembimbing</h3>
              <div className="border rounded p-4 bg-gray-100">
                <div className="mb-2">
                  <label>Nama Pembimbing</label>
                  <p className="font-semibold block">-</p>
                </div>
                <div className="mb-2">
                  <label>No. Telp Pembimbing</label>
                  <p className="font-semibold block">-</p>
                </div>
                <div className="mb-2">
                  <label>Email Pembimbing</label>
                  <p className="font-semibold block">-</p>
                </div>
              </div>
            </div>

            {/* Update Button */}
            <div className="flex justify-center mt-3  mb-6">
              <button className="bg-red-600 w-full h-14 text-white font-semibold px-6 py-2 rounded-lg hover:bg-red-700">
                Update Profile
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;