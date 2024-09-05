import React, { useState } from "react";
import HeaderAdmin from "../ComponentsAdmin/HeaderAdmin";
import * as XLSX from "xlsx";

const PAGE_SIZE = 10;

function HasilDaftarMagang() {
  // Data peserta
  const pesertaData = [
    {
      id: 1,
      nama: "John Doe",
      nim: "123456789",
      nik: "9876543210123456",
      email: "johndoe@example.com",
      noTelp: "081234567890",
      asalPendidikan: "Universitas A",
      jurusan: "Teknik Informatika",
      ketersediaanPenempatan: "Setuju",
      suratRekomendasi: "Lihat File",
      cv: "Lihat File",
      portofolio: "Lihat File",
      durasiAwal: "2024-09-01",
      durasiAkhir: "2024-12-01",
      menyetujuiSnK: "Iya",
      tanggalPendaftaran: "2024-09-01",
      statusLamaran: "Diterima",
    },
    {
      id: 2,
      nama: "Jane Smith",
      nim: "987654321",
      nik: "1234567890123456",
      email: "janesmith@example.com",
      noTelp: "081298765432",
      asalPendidikan: "Universitas B",
      jurusan: "Sistem Informasi",
      ketersediaanPenempatan: "Tidak Setuju",
      suratRekomendasi: "Lihat File",
      cv: "Lihat File",
      portofolio: "Lihat File",
      durasiAwal: "2024-09-05",
      durasiAkhir: "2024-12-05",
      menyetujuiSnK: "Tidak",
      tanggalPendaftaran: "2024-09-01",
      statusLamaran: "Diproses",
    },
    {
      id: 3,
      nama: "Alice Johnson",
      nim: "654321987",
      nik: "5678901234567890",
      email: "alicejohnson@example.com",
      noTelp: "081376543210",
      asalPendidikan: "Universitas C",
      jurusan: "Manajemen Informatika",
      ketersediaanPenempatan: "Setuju",
      suratRekomendasi: "Lihat File",
      cv: "Lihat File",
      portofolio: "Lihat File",
      durasiAwal: "2024-09-10",
      durasiAkhir: "2024-12-10",
      menyetujuiSnK: "Iya",
      tanggalPendaftaran: "2024-09-01",
      statusLamaran: "Ditolak",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleExportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(pesertaData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Data Pelamar Magang");
    XLSX.writeFile(wb, "Data_Pelamar_Magang.xlsx");
  };

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const currentData = pesertaData.slice(startIndex, startIndex + PAGE_SIZE);
  const totalPages = Math.ceil(pesertaData.length / PAGE_SIZE);

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <HeaderAdmin className="relative z-20" />
      <div className="flex-1 flex flex-col ml-64 pt-16 p-6 mt-10 bg-gray-100">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Data Pelamar</h3>
          <button
            onClick={handleExportToExcel}
            className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
          >
            Export to Excel
          </button>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  {[
                    "Nama",
                    "NIM",
                    "NIK",
                    "Email",
                    "No. Telp",
                    "Asal Pendidikan",
                    "Jurusan",
                    "Ketersediaan Penempatan",
                    "Surat Rekomendasi",
                    "Curriculum Vitae",
                    "Link Portofolio",
                    "Durasi Awal Magang",
                    "Durasi Akhir Magang",
                    "Menyetujui S&K",
                    "Tanggal Pengajuan",
                    "Status Lamaran",
                    "Aksi",
                  ].map((header) => (
                    <th
                      key={header}
                      className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-600"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {currentData.map((peserta) => (
                  <tr key={peserta.id}>
                    <td className="py-2 px-4 border-b">{peserta.nama}</td>
                    <td className="py-2 px-4 border-b">{peserta.nim}</td>
                    <td className="py-2 px-4 border-b">{peserta.nik}</td>
                    <td className="py-2 px-4 border-b">{peserta.email}</td>
                    <td className="py-2 px-4 border-b">{peserta.noTelp}</td>
                    <td className="py-2 px-4 border-b">
                      {peserta.asalPendidikan}
                    </td>
                    <td className="py-2 px-4 border-b">{peserta.jurusan}</td>
                    <td className="py-2 px-4 border-b">
                      {peserta.ketersediaanPenempatan}
                    </td>
                    <td className="py-2 px-4 border-b">
                      <a href="#" className="text-blue-500 hover:underline">
                        {peserta.suratRekomendasi}
                      </a>
                    </td>
                    <td className="py-2 px-4 border-b">
                      <a href="#" className="text-blue-500 hover:underline">
                        {peserta.cv}
                      </a>
                    </td>
                    <td className="py-2 px-4 border-b">
                      <a href="#" className="text-blue-500 hover:underline">
                        {peserta.portofolio}
                      </a>
                    </td>
                    <td className="py-2 px-4 border-b">{peserta.durasiAwal}</td>
                    <td className="py-2 px-4 border-b">
                      {peserta.durasiAkhir}
                    </td>
                    <td className="py-2 px-4 border-b">
                      {peserta.menyetujuiSnK}
                    </td>
                    <td className="py-2 px-4 border-b">
                      {peserta.tanggalPendaftaran}
                    </td>
                    <td className="py-2 px-4 border-b">
                      {peserta.statusLamaran}
                    </td>
                    <td className="py-2 px-4 border-b">
                      <button className="ml-2 text-green-500 hover:underline">
                        Terima
                      </button>
                      <button className="ml-2 text-red-500 hover:underline">
                        Tolak
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Pagination */}
          <div className="mt-4 flex justify-between items-center">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded shadow hover:bg-gray-400"
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded shadow hover:bg-gray-400"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HasilDaftarMagang;
