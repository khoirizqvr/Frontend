import React, { useState } from "react";
import { HomeIcon, MinusIcon, MoonIcon } from '@heroicons/react/24/solid';


const SidebarButton = ({ icon, label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center p-4 mb-2 w-full text-left rounded-lg ${
        isActive ? "bg-red-500 text-white" : "bg-[#f7f7f7] text-black"
      } hover:bg-red-300 transition`}
    >
      <img src={icon} alt="icon" className="w-8 h-8 mr-4" />
      <span className="font-bold text-lg">{label}</span>
    </button>
  );
};

function Bidang() {
  const [activeBidang, setActiveBidang] = useState("PIAK");

  // Function to handle content rendering based on activeBidang
  const renderContent = () => {
    switch (activeBidang) {
      case "PIAK":
        return (
          <>
             <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Deskripsi Pekerjaan</h2>
            <p className="text-gray-700 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae
              ante metus. Proin nunc augue, tincidunt id elementum eget, sollicitudin
              tempor justo. Ut ullamcorper vulputate posuere.
            </p>

            {/* Info Section */}
            <div className="flex justify-between mb-6">
              <div className="text-center">
                <img
                  src="magang-icon.png"
                  alt="magang"
                  className="mx-auto w-8 h-8 mb-2"
                />
                <span className="block font-bold">Sistem Magang</span>
                <span className="block">WFO</span>
              </div>
              <div className="text-center">
                <img
                  src="lokasi-icon.png"
                  alt="lokasi"
                  className="mx-auto w-8 h-8 mb-2"
                />
                <span className="block font-bold">Lokasi</span>
                <span className="block">Kota Semarang</span>
              </div>
              <div className="text-center">
                <img
                  src="semester-icon.png"
                  alt="semester"
                  className="mx-auto w-8 h-8 mb-2"
                />
                <span className="block font-bold">Minimal Semester</span>
                <span className="block">Semester 4</span>
              </div>
            </div>

            {/* Job Description */}
            <div>
              <h3 className="text-xl font-bold mb-4">Tugas</h3>
              <ul className="list-decimal list-inside text-gray-700 mb-6">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              </ul>

              <h3 className="text-xl font-bold mb-4">Fungsi</h3>
              <ul className="list-decimal list-inside text-gray-700">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              </ul>
            </div>
          </div>
          </>
        );
      case "DAFDUK":
        return (
          <>
            <h2 className="text-2xl font-bold mb-4">Deskripsi Pekerjaan DAFDUK</h2>
            <p className="text-gray-700 mb-6">
              Ini adalah deskripsi untuk bidang DAFDUK. Duis vitae ante metus. Proin nunc augue, tincidunt id elementum eget.
            </p>
          </>
        );
      case "SEKRETARIAT":
        return (
          <>
            <h2 className="text-2xl font-bold mb-4">Deskripsi Pekerjaan SEKRETARIAT</h2>
            <p className="text-gray-700 mb-6">
              Ini adalah deskripsi untuk bidang SEKRETARIAT. Ut ullamcorper vulputate posuere. 
            </p>
          </>
        );
      case "PDIP":
        return (
          <>
            <h2 className="text-2xl font-bold mb-4">Deskripsi Pekerjaan PDIP</h2>
            <p className="text-gray-700 mb-6">
              Ini adalah deskripsi untuk bidang PDIP. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex justify-center bg-gray-100 py-10">
      <div className="flex space-x-8">
        {/* Sidebar */}
        <div className="bg-white p-6 rounded-xl shadow-lg w-64 min-h-[400px]">
          <SidebarButton
            icon={HomeIcon}
            label="PIAK"
            isActive={activeBidang === "PIAK"}
            onClick={() => setActiveBidang("PIAK")}
          />
          <SidebarButton
            icon="icon2.png"
            label="DAFDUK"
            isActive={activeBidang === "DAFDUK"}
            onClick={() => setActiveBidang("DAFDUK")}
          />
          <SidebarButton
            icon="icon3.png"
            label="SEKRETARIAT"
            isActive={activeBidang === "SEKRETARIAT"}
            onClick={() => setActiveBidang("SEKRETARIAT")}
          />
          <SidebarButton
            icon="icon4.png"
            label="PDIP"
            isActive={activeBidang === "PDIP"}
            onClick={() => setActiveBidang("PDIP")}
          />
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden w-[600px]">
          {/* Image */}
          <img
            src="dukcapil-image.png"
            alt="dukcapil"
            className="w-full h-48 object-cover"
          />

          {/* Dynamic Content */}
          <div className="p-6">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bidang;
