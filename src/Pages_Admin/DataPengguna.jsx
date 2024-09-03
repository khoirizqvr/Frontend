import React, { useState } from "react";
import Header from "../ComponentsAdmin/HeaderAdmin";
import * as XLSX from "xlsx";

const PAGE_SIZE = 10;

const DataPengguna = () => {
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
      transkripNilai: "Lihat File",
      foto: "foto-johndoe.jpg",
      durasiAwal: "2024-09-01",
      durasiAkhir: "2024-12-01",
      menyetujuiSnK: "Iya",
      tanggalPendaftaran: "2024-09-01",
      statusLamaran: "Diterima",
      tanggalPembuatanAkun: "2024-08-20",
      statusAkun: "Terverifikasi",
    },
    // Add more pesertaData entries with similar fields
  ];

  const [currentPage, setCurrentPage] = useState(1);

  const handleExportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(pesertaData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Data Pelamar Magang");
    XLSX.writeFile(wb, "Data_Pelamar_Magang.xlsx");
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const currentData = pesertaData.slice(startIndex, startIndex + PAGE_SIZE);
  const totalPages = Math.ceil(pesertaData.length / PAGE_SIZE);

  return (
    <div className="flex flex-col h-screen">
      <Header className="relative z-20" />

      <div className="flex-1 flex flex-col ml-64 pt-16 p-6 mt-10 bg-gray-100">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Data Pengguna</h3>
          <button
            onClick={handleExportToExcel}
            className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
          >
            Export to Excel
          </button>
        </div>

        <div className=" bg-white p-4 rounded shadow">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-600">
                    Nama
                  </th>
                  <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-600">
                    NIM
                  </th>
                  <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-600">
                    NIK
                  </th>
                  <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-600">
                    Email
                  </th>
                  <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-600">
                    No. Telp
                  </th>
                  <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-600">
                    Asal Pendidikan
                  </th>
                  <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-600">
                    Jurusan
                  </th>
                  <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-600">
                    Foto
                  </th>
                  <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-600">
                    CV
                  </th>
                  <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-600">
                    Transkrip Nilai
                  </th>
                  <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-600">
                    Tanggal Pembuatan Akun
                  </th>
                  <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-600">
                    Status Akun
                  </th>
                  <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-600">
                    Aksi
                  </th>
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
                      <a
                        href={`/path/to/foto/${peserta.foto}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        Lihat Foto
                      </a>
                    </td>
                    <td className="py-2 px-4 border-b">
                      <a
                        href={`/path/to/cvs/${peserta.cv}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        Lihat CV
                      </a>
                    </td>
                    <td className="py-2 px-4 border-b">
                      <a
                        href={`/path/to/transkrip/${peserta.transkripNilai}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        Lihat Transkrip
                      </a>
                    </td>
                    <td className="py-2 px-4 border-b">
                      {peserta.tanggalPembuatanAkun}
                    </td>
                    <td className="py-2 px-4 border-b">
                      {peserta.statusAkun}
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
};

export default DataPengguna;
