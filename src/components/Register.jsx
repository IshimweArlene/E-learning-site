import React, { useState } from 'react';
import MyImage from '../assets/Students';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const [activeButton, setActiveButton] = useState('login');
    const [showPassword, setShowPassword] = useState(false);

    const handleLoginClick = () => setActiveButton('login');
    const handleRegisterClick = () => setActiveButton('register');
    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    return (
        <div className="w-screen h-screen flex bg-white overflow-hidden">
            {/* Left Side - Image */}
            <div className="w-1/2 h-full p-6">
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-md">
                    <img 
                        src={MyImage} 
                        alt="Students" 
                        className="w-full h-full object-cover rounded-2xl"
                    />
                </div>
            </div>

            {/* Right Side - Login/Register */}
            <div className="w-1/2 flex flex-col justify-center items-center px-12">
                <div className="w-full max-w-md">
                    <div className="text-center mb-6">
                        <p className="text-xl font-bold text-gray-500">Welcome to our Platform</p>

                        {/* Toggle Buttons */}
                        <div className="flex items-center justify-center mb-12 mt-7">
                            <div className="flex bg-customBlue bg-opacity-100 rounded-full p-2 w-[340px] mt-4 focus:outline-none">
                                <button
                                    className={`flex-1 py-2 rounded-full text-lg font-medium focus:outline-none ${
                                        activeButton === 'login'
                                            ? 'bg-blue-300 text-white shadow'
                                            : 'bg-transparent text-white'
                                    }`}
                                    onClick={handleLoginClick}
                                >
                                    Login
                                </button>
                                <button
                                    className={`flex-1 py-2 rounded-full text-lg font-medium focus:outline-none ${
                                        activeButton === 'register'
                                            ? 'bg-blue-300 text-white shadow'
                                            : 'bg-transparent text-white'
                                    }`}
                                    onClick={handleRegisterClick}
                                >
                                    Register
                                </button>
                            </div>
                        </div>

                        <p className="text-sm text-gray-500 text-left mt-6 mb-4 font-Poppins text-[18px]">
                            Our platform is designed to help you learn and grow.
                        </p>
                    </div>

                    {/* Form */}
                    <form className="space-y-4">
                        <div>
                            <label className="block text-lg font-Poppins text-gray-700 mb-4 font-semibold">User name</label>
                            <input 
                                type="text" 
                                className="w-full h-[60px] px-4 py-2 border mb-4 border-customBlue rounded-full focus:outline-none placeholder:text-gray-400 bg-white text-gray-700 text-lg"
                                placeholder="Enter your User name"
                            />
                        </div>

                        {/* Password Field with Eye Icon */}
                        <div className="relative">
                            <label className="block text-lg font-Poppins text-gray-700 mb-4 font-semibold">Password</label>
                            <input 
                                type={showPassword ? 'text' : 'password'}
                                className="w-full h-[60px] px-4 py-2  mb-4 pr-12 border border-customBlue rounded-full focus:outline-none placeholder:text-gray-400 bg-white text-gray-700 text-lg"
                                placeholder="Enter your Password"
                            />
                            <span 
                                className="absolute right-5 top-[66px] text-gray-500 cursor-pointer"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                            </span>
                        </div>

                        <button 
                            type="submit"
                            className="w-[172px] h-12 ml-64 bg-customBlue text-white py-2 rounded-full"
                        >
                            {activeButton === 'login' ? 'Login' : 'Register'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
