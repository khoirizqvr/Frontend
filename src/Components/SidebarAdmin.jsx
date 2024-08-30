import React from 'react';
import { HomeIcon, MinusIcon, MoonIcon } from '@heroicons/react/24/solid';

const SidebarAdmin = () => {
    return (
        <div className="bg-red-600 text-white text-xl w-64 h-screen flex flex-col">
            <div className="flex flex-col space-y-2 p-4">
                <a href="#beranda" className="flex items-center px-6 py-3 hover:bg-red-700">
                    <HomeIcon className="h-6 w-6 mr-3" />
                    Beranda
                </a>
                <a href="#kumpulan-soal" className="flex items-center px-6 py-3 hover:bg-red-700">
                    <MinusIcon className="h-6 w-6 mr-3" />
                    Data Pendaftar
                </a>
                <a href="#tambah-akun" className="flex items-center px-6 py-3 hover:bg-red-700">
                    <MoonIcon className="h-6 w-6 mr-3" />
                    Akun Admin
                </a>
            </div>
        </div>
    );
}

export default SidebarAdmin;
