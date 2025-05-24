import React from 'react';

const LandingHero = () => {
  return (
    <div className="relative bg-[#49BBBD] w-full overflow-hidden" style={{ minHeight: '480px' }}>
      {/* Curved white bottom */}
      <svg className="absolute bottom-0 left-0 w-full" height="80" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,40 Q720,120 1440,40 L1440,80 L0,80 Z" fill="#fff" />
      </svg>
      <div className="relative z-10 flex flex-row items-center justify-between max-w-7xl mx-auto px-12 pt-12 pb-24">
        {/* Left Side */}
        <div className="flex-1 flex flex-col justify-center text-white">
          <h1 className="text-4xl font-bold leading-tight mb-4">
            <span className="text-[#FFB800]">Studying</span> Online is now<br />much easier
          </h1>
          <p className="mb-6 text-lg text-white/90 max-w-md">
            TOTC is an interesting platform that will teach you in more an interactive way
          </p>
          <div className="flex items-center space-x-4 mb-8">
            <button className="bg-white text-[#49BBBD] font-bold px-6 py-3 rounded-full shadow hover:bg-[#eaf4ff] transition">Join for free</button>
            <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow hover:bg-[#eaf4ff] transition">
              <svg width="24" height="24" fill="none" stroke="#49BBBD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="8,5 19,12 8,19" /></svg>
            </button>
            <span className="text-white font-medium">Watch how it works</span>
          </div>
        </div>
        {/* Right Side */}
        <div className="flex-1 flex items-center justify-end relative">
          {/* Student Image */}
          <img src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&w=300&h=400&fit=crop" alt="Student" className="w-80 h-96 object-cover rounded-2xl z-10" />
          {/* Floating Cards */}
          <div className="absolute left-0 top-8 bg-white rounded-xl shadow px-6 py-3 flex flex-col items-center" style={{ minWidth: '120px' }}>
            <span className="text-[#49BBBD] font-bold text-lg">250k</span>
            <span className="text-gray-500 text-xs">Assisted Student</span>
          </div>
          <div className="absolute right-0 top-4 bg-white rounded-xl shadow px-4 py-2 flex items-center space-x-2">
            <span className="bg-[#FFB800] rounded-full w-6 h-6 flex items-center justify-center">
              <svg width="16" height="16" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>
            </span>
            <span className="text-gray-700 text-xs font-medium">Congratulations<br /><span className="text-gray-400">Your admission completed</span></span>
          </div>
          <div className="absolute left-1/2 bottom-0 bg-white rounded-xl shadow px-4 py-2 flex items-center space-x-2" style={{ transform: 'translateX(-50%) translateY(60%)' }}>
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" className="w-8 h-8 rounded-full object-cover" />
            <div>
              <span className="block text-gray-700 text-xs font-medium">User Experience Class</span>
              <span className="block text-gray-400 text-xs">Today at 12.00 PM</span>
            </div>
            <button className="ml-2 px-3 py-1 rounded-full bg-[#FF6680] text-white text-xs font-semibold">Join Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingHero; 