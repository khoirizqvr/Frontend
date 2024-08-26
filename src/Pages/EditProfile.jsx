import React, { useState } from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/Footer";

const EditProfilePage = () => {
  const [formData, setFormData] = useState({
    nama: "Virnika Shefira Gina Morissa",
    universitas: "Universitas Dian Nuswantoro",
    email: "Syaifulrizal504@gmail.com",
    noTelp: "0856-4340-8961",
    nim: "A11.2021.13849",
    nik: "3374093010010001",
    tempatLahir: "",
    tanggalLahir: "",
    provinsiDomisili: "",
    kotaDomisili: "",
    alamatDomisili: "",
    provinsiKTP: "",
    kotaKTP: "",
    alamatKTP: "",
    jurusan: "Teknik Informatika",
    ipk: "",
    semester: "",
    namaPembimbing: "",
    noTelpPembimbing: "",
    emailPembimbing: "",
    fotoProfil: null, // Tambahkan state untuk foto profil
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, fotoProfil: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission, e.g., send data to the server
  };

  return (
    <div className="bg-[#D24545] min-h-screen flex flex-col">
      <Navbar />
      <div className="w-[1100px] mx-auto bg-[#f6f6f6] rounded-2xl mt-10 mb-10 pb-6">
        <h1 className="text-3xl font-semibold text-center my-6">Edit Profil</h1>
        <form onSubmit={handleSubmit} className="px-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Edit Foto Profil */}
          <div className="col-span-2 text-center">
            <div className="flex justify-center mb-4">
              <div className="relative">
                <img
                  src={
                    formData.fotoProfil
                      ? URL.createObjectURL(formData.fotoProfil)
                      : "default-profile.png" // Ganti dengan URL atau path ke gambar default
                  }
                  alt="Foto Profil"
                  className="w-32 h-32 object-cover rounded-full mx-auto"
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Informasi Kontak Pribadi */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Kontak Pribadi</h3>
            <div className="border rounded p-4 bg-gray-100">
              <div className="mb-2">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-2">
                <label>No. Telp</label>
                <input
                  type="text"
                  name="noTelp"
                  value={formData.noTelp}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>

            <h3 className="text-lg font-semibold mb-2 mt-4">Informasi Data Pribadi</h3>
            <div className="border rounded p-4 bg-gray-100">
              <div className="flex justify-between mb-2">
                <div className="w-1/2">
                  <label>Nomor Induk Mahasiswa</label>
                  <input
                    type="text"
                    name="nim"
                    value={formData.nim}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div className="w-1/2">
                  <label>Nomor Induk Kependudukan</label>
                  <input
                    type="text"
                    name="nik"
                    value={formData.nik}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
              </div>

              <div className="flex justify-between mb-2">
                <div className="w-1/2">
                  <label>Tempat Lahir</label>
                  <input
                    type="text"
                    name="tempatLahir"
                    value={formData.tempatLahir}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div className="w-1/2">
                  <label>Tanggal Lahir</label>
                  <input
                    type="date"
                    name="tanggalLahir"
                    value={formData.tanggalLahir}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
              </div>

              <div className="mb-2">
                <label>Provinsi Domisili</label>
                <input
                  type="text"
                  name="provinsiDomisili"
                  value={formData.provinsiDomisili}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-2">
                <label>Kota/Kabupaten Domisili</label>
                <input
                  type="text"
                  name="kotaDomisili"
                  value={formData.kotaDomisili}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-2">
                <label>Alamat Domisili</label>
                <input
                  type="text"
                  name="alamatDomisili"
                  value={formData.alamatDomisili}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>

              <div className="mb-2 mt-4">
                <label>Provinsi KTP</label>
                <input
                  type="text"
                  name="provinsiKTP"
                  value={formData.provinsiKTP}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-2">
                <label>Kota/Kabupaten KTP</label>
                <input
                  type="text"
                  name="kotaKTP"
                  value={formData.kotaKTP}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-2">
                <label>Alamat KTP</label>
                <input
                  type="text"
                  name="alamatKTP"
                  value={formData.alamatKTP}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>
          </div>

          {/* Informasi Pendidikan dan Pembimbing */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Pendidikan</h3>
            <div className="border rounded p-4 bg-gray-100">
              <div className="mb-2">
                <label>Asal Universitas</label>
                <input
                  type="text"
                  name="universitas"
                  value={formData.universitas}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  readOnly
                />
              </div>
              <div className="mb-2">
                <label>Jurusan</label>
                <input
                  type="text"
                  name="jurusan"
                  value={formData.jurusan}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-2">
                <label>IPK</label>
                <input
                  type="text"
                  name="ipk"
                  value={formData.ipk}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-2">
                <label>Semester Yang Sedang Ditempuh</label>
                <input
                  type="text"
                  name="semester"
                  value={formData.semester}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>

            <h3 className="text-lg font-semibold mb-2 mt-4">Pembimbing</h3>
            <div className="border rounded p-4 bg-gray-100">
              <div className="mb-2">
                <label>Nama Pembimbing</label>
                <input
                  type="text"
                  name="namaPembimbing"
                  value={formData.namaPembimbing}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-2">
                <label>No. Telp Pembimbing</label>
                <input
                  type="text"
                  name="noTelpPembimbing"
                  value={formData.noTelpPembimbing}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-2">
                <label>Email Pembimbing</label>
                <input
                  type="email"
                  name="emailPembimbing"
                  value={formData.emailPembimbing}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>

            <div className="flex justify-center mt-3 mb-6">
              <button
                type="submit"
                className="bg-red-600 w-full h-14 text-white font-semibold px-6 py-2 rounded-lg hover:bg-red-700"
              >
                Simpan Perubahan
              </button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default EditProfilePage;
