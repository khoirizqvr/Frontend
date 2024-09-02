import React, { useState } from "react";
import HeaderAdmin from "../ComponentsAdmin/HeaderAdmin";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import ModalTambahAdmin from "../ComponentsAdmin/modalTambahAdmin";

function AkunAdmin() {
  const adminData = [
    {
      id: 1,
      nama: "Admin Satu",
      nip: "1987654321",
      noTelp: "081234567890",
      email: "admin1@example.com",
    },
    {
      id: 2,
      nama: "Admin Dua",
      nip: "1987654322",
      noTelp: "081298765432",
      email: "admin2@example.com",
    },
    {
      id: 3,
      nama: "Admin Tiga",
      nip: "1987654323",
      noTelp: "081376543210",
      email: "admin3@example.com",
    },
    {
      id: 4,
      nama: "Admin Empat",
      nip: "1987654324",
      noTelp: "081276543210",
      email: "admin4@example.com",
    },
    {
      id: 5,
      nama: "Admin Lima",
      nip: "1987654325",
      noTelp: "081376542310",
      email: "admin5@example.com",
    },
  ];

  const handleDelete = (id) => {
    console.log(`Akun dengan ID ${id} akan dihapus.`);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <HeaderAdmin className="relative z-20" />

      {/* Main Content */}
      <div className="ml-64 pt-16 p-6 mt-5">
        <div className="mt-8 bg-white p-4 rounded shadow">
          <div className="flex  justify-between items-center pb-5">
            <h3 className="text-xl font-bold">Data Admin</h3>
            <div>
              {/* Tombol untuk menampilkan modal */}
              <button
                className="px-4 py-2 rounded-md bg-[#D24545] text-white font-semibold flex justify-center items-center gap-2"
                onClick={handleOpenModal}
              >
                <PlusCircleIcon className="h-5 w-5" />
                Tambah Admin
              </button>

              {/* Modal */}
              <ModalTambahAdmin
                isOpen={isModalOpen}
                onClose={handleCloseModal}
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-600">
                    Nama
                  </th>
                  <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-600">
                    NIP
                  </th>
                  <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-600">
                    No. Telp
                  </th>
                  <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-600">
                    Email
                  </th>
                  <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-600">
                    Aksi
                  </th>
                </tr>
              </thead>

              <tbody>
                {adminData.map((admin) => (
                  <tr key={admin.id}>
                    <td className="py-2 px-4 border-b">{admin.nama}</td>
                    <td className="py-2 px-4 border-b">{admin.nip}</td>
                    <td className="py-2 px-4 border-b">{admin.noTelp}</td>
                    <td className="py-2 px-4 border-b">{admin.email}</td>
                    <td className="py-2 px-4 border-b">
                      <button
                        onClick={() => handleDelete(admin.id)}
                        className="ml-2 text-red-500 hover:underline"
                      >
                        Hapus Akun
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
}

export default AkunAdmin;
