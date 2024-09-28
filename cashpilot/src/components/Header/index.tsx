import React from 'react';
import 'tailwindcss/tailwind.css';

const Header: React.FC = () => {
    return (
        <header className="bg-blue-500 p-4 flex items-center justify-between">
            <h1 className="text-white text-2xl">CashPilot</h1>
            <nav>
                <ul className="flex space-x-4">
                    <li><a href="#home" className="text-white hover:text-gray-300">Home</a></li>
                    <li><a href="#about" className="text-white hover:text-gray-300">About</a></li>
                    <li><a href="#contact" className="text-white hover:text-gray-300">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;