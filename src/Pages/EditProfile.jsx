import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Navbar from "../Components/navbar";
import Footer from "../Components/Footer";
import Profile from "../assets/Pictures/man.svg";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

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
    kotaDomisili: "",
    alamatDomisili: "",
    kotaKTP: "",
    alamatKTP: "",
    jurusan: "Teknik Informatika",
    ipk: "",
    semester: "",
    namaPembimbing: "",
    noTelpPembimbing: "",
    emailPembimbing: "",
    fotoProfil: null,
    croppedImage: null,
  });

  const [provinsiList, setProvinsiList] = useState([]);
  const [kotaListDomisili, setKotaListDomisili] = useState([]);
  const [kotaListKTP, setKotaListKTP] = useState([]); // State baru untuk menyimpan Kota/Kabupaten KTP
  const [cropper, setCropper] = useState(null);
  const [showCropper, setShowCropper] = useState(false);
  const imageInputRef = useRef(null);

  useEffect(() => {
    // Fetch data provinsi dari API
    axios
      .get("https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json")
      .then((response) => {
        setProvinsiList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching provinces data:", error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "provinsiDomisili") {
      const selectedProvince = provinsiList.find(
        (provinsi) => provinsi.name === value
      );
      if (selectedProvince) {
        fetchKota(selectedProvince.id, 'domisili');
      }
    } else if (name === "provinsiKTP") {
      const selectedProvince = provinsiList.find(
        (provinsi) => provinsi.name === value
      );
      if (selectedProvince) {
        fetchKota(selectedProvince.id, 'ktp');
      }
    }
  };

  const fetchKota = (provinceId, type) => {
    axios
      .get(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${provinceId}.json`)
      .then((response) => {
        if (type === 'domisili') {
          setKotaListDomisili(response.data);
        } else if (type === 'ktp') {
          setKotaListKTP(response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching regencies data:", error);
      });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, fotoProfil: file });
      setShowCropper(true); // Show cropper after selecting image
    }
  };

  const handleCancelCrop = () => {
    setShowCropper(false);
    setFormData({ ...formData, fotoProfil: null, croppedImage: null });
  };

  const handleCrop = () => {
    if (cropper && typeof cropper.getCroppedCanvas === "function") {
      const croppedCanvas = cropper.getCroppedCanvas();
      if (croppedCanvas) {
        const croppedImage = croppedCanvas.toDataURL();
        setFormData({ ...formData, croppedImage });
        setShowCropper(false);
      } else {
        console.error("Failed to get cropped canvas.");
      }
    } else {
      console.error("Cropper is not initialized or invalid.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission, e.g., send data to the server
  };

  const imageUrl = formData.fotoProfil
    ? URL.createObjectURL(formData.fotoProfil)
    : Profile;

  return (
    <div className="bg-[#D24545] min-h-screen flex flex-col">
      <Navbar />
      <div className="w-[1100px] mx-auto bg-[#f6f6f6] rounded-2xl my-10 pb-6">
        <h1 className="text-3xl font-semibold text-center my-12">Edit Profil</h1>
        <form onSubmit={handleSubmit} className="px-6">
          {/* Grid Layout untuk Foto Profil dan Kontak Pribadi */}
          <div className="flex my-8">
            <div className="relative justify-center mx-16">
              <img
                src={formData.croppedImage || imageUrl}
                alt="Foto Profil"
                className="w-[285px] object-cover rounded-full"
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                ref={imageInputRef}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              {/* Icon pencil-square ditempatkan di pojok kanan bawah gambar */}
              <div className="absolute bottom-0 right-0 transform translate-x-[-5px] translate-y-[-25px] bg-white p-1 rounded-full shadow-md cursor-pointer">
                <PencilSquareIcon className="h-10 text-gray-600" />
              </div>
            </div>
            {/* Informasi Kontak Pribadi */}
            <div className="border rounded p-4 w-[750px]">
              <label className="font-semibold block mb-2">Kontak Pribadi</label>
              <div className="mb-4">
                <label className="block mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block mb-2">No. Telp</label>
                <input
                  type="text"
                  name="noTelp"
                  value={formData.noTelp}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                />
              </div>
            </div>
          </div>

          {showCropper && (
            <div className="border rounded p-4 mb-4">
              <label className="font-semibold block mb-2">
                Crop Foto Profil
              </label>
              <Cropper
                src={imageUrl}
                style={{ height: 400, width: "100%" }}
                initialAspectRatio={1}
                aspectRatio={1}
                guides={false}
                onInitialized={(instance) => {
                  setCropper(instance);
                }}
              />

              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  onClick={handleCancelCrop}
                  className="bg-red-600 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleCrop}
                  className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Crop
                </button>
              </div>
            </div>
          )}

          {/* Informasi Data Pribadi */}
          <div className="border rounded p-4">
            <label className="font-semibold block mb-2">
              Informasi Data Pribadi
            </label>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-2">Nomor Induk Mahasiswa</label>
                <input
                  type="text"
                  name="nim"
                  value={formData.nim}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block mb-2">Nomor Induk Kependudukan</label>
                <input
                  type="text"
                  name="nik"
                  value={formData.nik}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block mb-2">Tempat Lahir</label>
                <input
                  type="text"
                  name="tempatLahir"
                  value={formData.tempatLahir}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block mb-2">Tanggal Lahir</label>
                <input
                  type="date"
                  name="tanggalLahir"
                  value={formData.tanggalLahir}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              {/* Alamat Domisili */}
              <div>
                <label className="font-semibold block mb-2">
                  Alamat Domisili Tinggal
                </label>
                <div className="mt-2">
                  <label className="block mb-2">Provinsi</label>
                  <select
                    name="provinsiDomisili"
                    value={formData.provinsiDomisili}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2"
                  >
                    <option value="">Pilih Provinsi</option>
                    {provinsiList.map((provinsi) => (
                      <option key={provinsi.id} value={provinsi.name}>
                        {provinsi.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mt-2">
                  <label className="block mb-2">Kota/Kabupaten</label>
                  <select
                    name="kotaDomisili"
                    value={formData.kotaDomisili}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2"
                  >
                    <option value="">Pilih Kota/Kabupaten</option>
                    {kotaListDomisili.map((kota) => (
                      <option key={kota.id} value={kota.name}>
                        {kota.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mt-2">
                  <label className="block mb-2">Alamat Domisili</label>
                  <input
                    type="text"
                    name="alamatDomisili"
                    value={formData.alamatDomisili}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
              </div>

              {/* Alamat KTP */}
              <div>
                <label className="font-semibold block mb-2">
                  Alamat Domisili KTP
                </label>
                <div className="mt-2">
                  <label className="block mb-2">Provinsi</label>
                  <select
                    name="provinsiKTP"
                    value={formData.provinsiKTP}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2"
                  >
                    <option value="">Pilih Provinsi</option>
                    {provinsiList.map((provinsi) => (
                      <option key={provinsi.id} value={provinsi.name}>
                        {provinsi.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mt-2">
                  <label className="block mb-2">Kota/Kabupaten</label>
                  <select
                    name="kotaKTP"
                    value={formData.kotaKTP}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2"
                  >
                    <option value="">Pilih Kota/Kabupaten</option>
                    {kotaListKTP.map((kota) => (
                      <option key={kota.id} value={kota.name}>
                        {kota.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mt-2">
                  <label className="block mb-2">Alamat KTP</label>
                  <input
                    type="text"
                    name="alamatKTP"
                    value={formData.alamatKTP}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 my-8">
            {/* Informasi Akademik */}
            <div className="border rounded p-4">
              <label className="font-semibold block mb-2">
                Informasi Akademik
              </label>
              <div className="">
                <div>
                  <label className="block mb-2">Jurusan</label>
                  <input
                    type="text"
                    name="jurusan"
                    value={formData.jurusan}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
                <div className="mt-4">
                  <label className="block mb-2">IPK</label>
                  <input
                    type="text"
                    name="ipk"
                    value={formData.ipk}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
              </div>

              <div className="mt-4">
                <div>
                  <label className="block mb-2">Semester</label>
                  <input
                    type="text"
                    name="semester"
                    value={formData.semester}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
              </div>
            </div>
            {/* Pembimbing */}
            <div className="border rounded p-4">
              <label className="font-semibold block mb-2">Pembimbing</label>
              <div>
                <label className="block mb-2">Nama Pembimbing</label>
                <input
                  type="text"
                  name="namaPembimbing"
                  value={formData.namaPembimbing}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              <div className="mt-4">
                <div>
                  <label className="block mb-2">No. Telp Pembimbing</label>
                  <input
                    type="text"
                    name="noTelpPembimbing"
                    value={formData.noTelpPembimbing}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
                <div className="mt-4">
                  <label className="block mb-2">Email Pembimbing</label>
                  <input
                    type="email"
                    name="emailPembimbing"
                    value={formData.emailPembimbing}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-red-600 text-white flex flex-row justify-center px-32 py-3 rounded-xl"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default EditProfilePage;