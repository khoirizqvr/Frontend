import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../ComponentsAdmin/SidebarAdmin";
import Header from "../ComponentsAdmin/HeaderAdmin";

const Dashboard = () => {
  const [applicantsData, setApplicantsData] = useState([]);
  const [totalApplicants, setTotalApplicants] = useState(0);
  const [acceptedApplicants, setAcceptedApplicants] = useState(0);
  const [rejectedApplicants, setRejectedApplicants] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Mendapatkan token dari localStorage (atau sumber lain)
        const token = localStorage.getItem('authToken'); 

        // Jika token tidak ada, set error dan return
        if (!token) {
          setError("Anda belum login. Silakan login terlebih dahulu.");
          return;
        }

        const response = await axios.get("http://localhost:5000/api/admin/dashboard", {
          headers: {
            Authorization: `Bearer ${token}`, // Mengirimkan token dalam header
          },
        });

        setApplicantsData(response.data.applicantsList || []);
        setTotalApplicants(response.data.totalApplicants || 0);
        setAcceptedApplicants(response.data.acceptedApplicants || 0);
        setRejectedApplicants(response.data.rejectedApplicants || 0);
      } catch (error) {
        console.error("Error fetching applicants data:", error);

        // Menangani error 401 secara khusus
        if (error.response && error.response.status === 401) {
          setError("Akses tidak diizinkan. Silakan login ulang.");
        } else {
          setError("Data tidak dapat diambil");
        }
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <Header className="relative z-20" />

      <div className="flex-1 flex flex-col ml-64 pt-16 p-6 mt-10 bg-gray-100">
        {error ? (
          <div className="text-red-500">{error}</div>
        ) : (
          <>
            <div className="grid grid-cols-4 gap-6">
              <div className="bg-white p-12 rounded shadow">
                <h3 className="text-xl font-bold">Jumlah Pendaftar</h3>
                <p className="text-2xl">{totalApplicants}</p>
              </div>
              <div className="bg-white p-12 rounded shadow">
                <h3 className="text-xl font-bold">Lamaran Diproses</h3>
                <p className="text-2xl">80</p>
              </div>
              <div className="bg-white p-12 rounded shadow">
                <h3 className="text-xl font-bold">Lamaran Diterima</h3>
                <p className="text-2xl">{acceptedApplicants}</p>
              </div>
              <div className="bg-white p-12 rounded shadow">
                <h3 className="text-xl font-bold">Lamaran Ditolak</h3>
                <p className="text-2xl">{rejectedApplicants}</p>
              </div>
            </div>
            <div className="mt-8 bg-white p-4 rounded shadow">
              <h3 className="text-xl font-bold mb-4">Data Pendaftar</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-600">Nama</th>
                      <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-600">Jenjang Pendidikan</th>
                      <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-600">Tanggal Pendaftaran</th>
                      <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-600">Status</th>
                      <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-600">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {applicantsData.length > 0 ? (
                      applicantsData.map((peserta) => (
                        <tr key={peserta.id}>
                          <td className="py-2 px-4 border-b">{peserta.nama}</td>
                          <td className="py-2 px-4 border-b">{peserta.jenjangpendidikan}</td>
                          <td className="py-2 px-4 border-b">{peserta.tanggal}</td>
                          <td className="py-2 px-4 border-b">{peserta.status}</td>
                          <td className="py-2 px-4 border-b">
                            <button className="text-blue-500 hover:underline">Lihat</button>
                            <button className="ml-2 text-green-500 hover:underline">Terima</button>
                            <button className="ml-2 text-red-500 hover:underline">Tolak</button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="5" className="py-2 px-4 border-b text-center">
                          Tidak ada data pendaftar
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
