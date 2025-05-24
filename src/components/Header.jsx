import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const Links = [
        {name:'Home', href:'/Home'},
        {name:'Courses', href:'/Courses'},
        {name:'Careers', href:'/Careers'},
        {name:'Blog', href:'/Blog'},
        {name:'About Us', href:'/About'},
    ];
    const isLanding = location.pathname === '/';
    return (
        <div className="flex items-center justify-between bg-white w-full px-12 py-4 border-b border-gray-200">
            {/* Logo */}
            <div className="flex-shrink-0">
                <svg width="56" height="56" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <rect x="10" y="10" width="60" height="60" rx="8" transform="rotate(45 40 40)" stroke="#49BBBD" strokeWidth="3" fill="none" />
                   <text x="40" y="48" textAnchor="middle" fontFamily="Poppins, Arial, sans-serif" fontWeight="bold" fontSize="24" fill="#5C5C5C">TOTC</text>
                </svg>
            </div>
            <div className="flex items-center space-x-10 mr-12">
                <ul className="flex space-x-12 ml-96">
                    {Links.map((link) => (
                        <li key={link.name} className="font-Poppins font-semibold text-xl">
                            <Link
                            to={link.href}
                            className={`no-underline text-gray-500 ${
                                location.pathname === link.href
                                ? "bg-[#eaf4ff] text-[#2aa2ff] px-4 py-1.5 rounded-full"
                                : ""
                            }`}
                            >
                            {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
        
                {isLanding ? (
                    <div className="flex items-center space-x-4 mr-16">
                        <Link to="/login" className="px-6 py-2 rounded-full border border-[#49BBBD] text-[#49BBBD] font-semibold font-Poppins hover:bg-[#eaf4ff] transition">Login</Link>
                        <Link to="/signup" className="px-6 py-2 rounded-full bg-[#49BBBD] text-white font-semibold font-Poppins hover:bg-[#38a3a5] transition">Sign Up</Link>
                    </div>
                ) : (
                    <div className="flex items-center space-x-2 mr-16">
                        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" className="w-10 h-10 rounded-full object-cover" />
                        <span className="font-Poppins font-semibold text-base text-gray-800">Lina</span>
                        <span className="text-xs text-gray-600">▼</span>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Header;