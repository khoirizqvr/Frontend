import React from 'react';

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-[#f6f6f6]">
      {/* Container for profile */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 mt-10">
        {/* Profile Header */}
        <div className="relative">
          <img
            src="https://your-image-link-here.png"
            alt="Background"
            className="w-full h-40 object-cover rounded-t-lg"
          />
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-24">
            <img
              className="w-32 h-32 rounded-full border-4 border-white"
              src="https://your-profile-pic-link-here.png"
              alt="Profile"
            />
          </div>
        </div>

        {/* Profile Information */}
        <div className="flex flex-col items-center mt-16">
          <h1 className="text-2xl font-semibold">Virnika Shefira Gina Morissa</h1>
          <p className="text-gray-500">Universitas Dian Nuswantoro</p>
        </div>

        {/* Contact and Personal Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Contact Info */}
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Kontak Pribadi</h2>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p>Email: Syaifulrizal504@gmail.com</p>
              <p>No. Telp: 0856-4340-8961</p>
            </div>
          </div>

          {/* Education Info */}
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Pendidikan</h2>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p>Asal Universitas: Universitas Dian Nuswantoro</p>
              <p>Jurusan: Teknik Informatika</p>
              <p>IPK: -</p>
              <p>Semester Yang Sedang di Tempuh: -</p>
            </div>
          </div>

          {/* Personal Data Info */}
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Informasi Data Pribadi</h2>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p>Nomor Induk Mahasiswa: A11.2021.13849</p>
              <p>Nomor Induk Kependudukan: 3374093010010001</p>
              <p>Alamat Domisili: -</p>
              <p>Provinsi: -</p>
              <p>Kota/Kab: -</p>
            </div>
          </div>

          {/* Supervisor Info */}
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Pembimbing</h2>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p>Nama Pembimbing: -</p>
              <p>No. Telp Pembimbing: -</p>
              <p>Email Pembimbing: -</p>
            </div>
          </div>
        </div>

        {/* Update Button */}
        <div className="flex justify-center mt-8">
          <button className="bg-red-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-red-700">
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
