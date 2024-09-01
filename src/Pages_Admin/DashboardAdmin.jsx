import React from "react";
import Sidebar from "../ComponentsAdmin/SidebarAdmin";
import Header from "../ComponentsAdmin/HeaderAdmin";

const Dashboard = () => {
  // Contoh data peserta
  const pesertaData = [
    {
      id: 1,
      nama: "John Doe",
      jenjangpendidikan: "Mahasiswa",
      status: "Diterima",
      tanggal: "2024-08-25",
    },
    {
      id: 2,
      nama: "Jane Smith",
      jenjangpendidikan: "Mahasiswa",
      status: "Dalam Proses",
      tanggal: "2024-08-26",
    },
    {
      id: 3,
      nama: "Alice Johnson",
      jenjangpendidikan: "Pelajar",
      status: "Ditolak",
      tanggal: "2024-08-27",
    },
  ];

  return (
    <div className="flex flex-col h-screen">
      <Header className="relative z-20" />

      <div className="flex-1 flex flex-col ml-64 pt-16 p-6 mt-10 bg-gray-100">
        <div className="grid grid-cols-4 gap-6">
          <div className="bg-white p-12 rounded shadow">
            <h3 className="text-xl font-bold">Jumlah Pendaftar</h3>
            <p className="text-2xl">10</p>
          </div>
          <div className="bg-white p-12 rounded shadow">
            <h3 className="text-xl font-bold">Lamaran Diproses</h3>
            <p className="text-2xl">80</p>
          </div>
          <div className="bg-white p-12 rounded shadow">
            <h3 className="text-xl font-bold">Lamaran Diterima</h3>
            <p className="text-2xl">89</p>
          </div>
          <div className="bg-white p-12 rounded shadow">
            <h3 className="text-xl font-bold">Lamaran Ditolak</h3>
            <p className="text-2xl">80</p>
          </div>
        </div>
        <div className="mt-8 bg-white p-4 rounded shadow">
          <h3 className="text-xl font-bold mb-4">Data Pendaftar</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-600">
                    Nama
                  </th>
                  <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-600">
                    Jenjang Pendidikan
                  </th>
                  <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-600">
                    Tanggal Pendaftaran
                  </th>
                  <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-600">
                    Status
                  </th>

                  <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-600">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {pesertaData.map((peserta) => (
                  <tr key={peserta.id}>
                    <td className="py-2 px-4 border-b">{peserta.nama}</td>
                    <td className="py-2 px-4 border-b">
                      {peserta.jenjangpendidikan}
                    </td>
                    <td className="py-2 px-4 border-b">{peserta.tanggal}</td>
                    <td className="py-2 px-4 border-b">{peserta.status}</td>

                    <td className="py-2 px-4 border-b">
                      <button className="text-blue-500 hover:underline">
                        Lihat
                      </button>
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
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
