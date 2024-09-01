import React, { useState } from "react";
import HeaderAdmin from "../ComponentsAdmin/HeaderAdmin";
import SidebarAdmin from "../ComponentsAdmin/SidebarAdmin";

function UpdateInfo() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedFile) {
      // Proses upload file di sini, misalnya mengirim file ke server
      console.log("File yang dipilih:", selectedFile);
    } else {
      alert("Harap pilih file untuk diunggah.");
    }
  };

  return (
    <div className="flex flex-col h-screen  bg-gray-100">
      <HeaderAdmin className="relative z-20" />
      <div className="max-w-md mx-auto mt-20 bg-white ml-66 p-10 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Upload Foto</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="file-upload"
              className="block text-sm font-medium text-gray-700"
            >
              Pilih Foto
            </label>
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="mt-2 p-2 border border-gray-300 rounded w-full"
            />
          </div>
          {selectedFile && (
            <div className="mb-4">
              <p className="text-sm text-gray-600">
                File yang dipilih: {selectedFile.name}
              </p>
            </div>
          )}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Unggah
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateInfo;
