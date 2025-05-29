import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const Links = [
    { name: 'Home', href: '/Home' },
    { name: 'Courses', href: '/Courses' },
    { name: 'Careers', href: '/Careers' },
    { name: 'Blog', href: '/Blog' },
    { name: 'About Us', href: '/About' },
  ];
  const isLanding = location.pathname === '/';

  return (
    <div
      className={`flex items-center justify-between w-full px-12 py-4 ${
        isLanding ? 'bg-[#49BBBD] text-white' : 'bg-white text-gray-800'
      }`}
    >
      {/* Logo */}
      <div className="flex-shrink-0 ">
        <svg
          width="56"
          height="56"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          
        >
          <rect
            x="10"
            y="10"
            width="60"
            height="60"
            rx="8"
            transform="rotate(45 40 40)"
            stroke={isLanding ? "#67E8F9" : "#49BBBD"}
            strokeWidth="3"
            fill="none"
            
          />
          <text
            x="40"
            y="48"
            textAnchor="middle"
            fontFamily="Poppins, Arial, sans-serif"
            fontWeight="bold"
            fontSize="24"
            fill={isLanding ? 'white' : '#5C5C5C'}
          >
            TOTC
          </text>
        </svg>
      </div>

      <div className="flex items-center space-x-16 mr-12">
        <ul className="flex space-x-12 ml-96">
          {Links.map((link) => (
            <li key={link.name} className="font-Poppins font-semibold text-xl">
              <Link
                to={link.href}
                className={`no-underline ${
                  isLanding
                    ? 'text-white hover:text-gray-200'
                    : 'text-gray-500 hover:text-gray-700'
                } ${
                  location.pathname === link.href
                    ? 'bg-[#eaf4ff] text-[#2aa2ff] px-4 py-1.5 rounded-full'
                    : ''
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {isLanding ? (
          <div className="flex items-center space-x-4 mr-16 ">
            <Link
              to="/login"
              className="px-10 py-4 rounded-full bg-white text-black font-semibold font-Poppins hover:bg-white hover:text-black transition"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-10 py-4 rounded-full bg-[#87f0f1] text-white font-semibold font-Poppins hover:bg-gray-200 transition"
            >
              Sign Up
            </Link>
          </div>
        ) : (
          <div className="flex items-center space-x-2 mr-16">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="User"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="font-Poppins font-semibold text-base text-gray-800">
              Lina
            </span>
            <span className="text-xs text-gray-600">▼</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
