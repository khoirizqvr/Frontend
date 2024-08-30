import React from 'react';
import Logo from '../assets/Pictures/logodisdukcapil.png';

const HeaderAdmin = () => {
    return (
        <nav className="bg-white shadow-md flex justify-between items-center p-4">
            <div className="flex items-center">
                <img src={Logo} alt="Logo" className="h-10 mr-3" />
                <div>
                    <h2 className="text-lg font-bold">Dinas Kependudukan Dan Pencatatan Sipil</h2>
                    <p className="text-sm">Kota Semarang</p>
                </div>
            </div>
            <div className="flex items-center">
                <span className="text-gray-600 mr-3">superadmin1</span>
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <i className="fas fa-user text-gray-500"></i>
                </div>
            </div>
        </nav>
    );
}

export default HeaderAdmin;
