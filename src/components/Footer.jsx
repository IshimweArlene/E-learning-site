import React from 'react'

const Footer = () => {
  return (
    <div className=' bg-[#162d53] mb-auto'>
        <div className="flex-shrink-0 justify-center items-center flex flex-col py-8">
            <div className='flex items-center space-x-8'>
                <svg width="56" height="56" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="10" y="10" width="60" height="60" rx="8" transform="rotate(45 40 40)" stroke="#49BBBD" strokeWidth="3" fill="none" />
                    <text x="40" y="48" textAnchor="middle" fontFamily="Poppins, Arial, sans-serif" fontWeight="bold" fontSize="24" fill="#fff">TOTC</text>
                </svg>
                <div className="h-10 w-px bg-gray-400 opacity-40"></div>
                <p className='text-white font-Poppins flex flex-1 font-medium text-lg'>Virtual class <br/> for zoom</p>
            </div>
            <p className='text-gray-300 align-middle mb-4 mt-10 font-[370px] text-2xl'>Subscribe to get our newspaper</p>
            <div className='flex flex-row items-center justify-center mt-4 mb-16'>
                <input type='email' placeholder='Your email' className='px-4 py-2 bg-[#162d53] rounded-full border border-gray-400 focus:outline-none w-80 h-12' />
                <button className='bg-customBlue text-white p-3 rounded-full w-56 h-12 ml-4'>Subscribe</button>
            </div>
            <div>
                <div className="space-x-6 text-gray-400 text-lg">
                    <a href="/careers" className="hover:text-white">Careers</a>
                    <span className="mx-2">|</span>
                    <a href="/privacy-policy" className="hover:text-white">Privacy Policy</a>
                    <span className="mx-2">|</span>
                    <a href="/terms" className="hover:text-white">Terms & Conditions</a>
                </div>
                <div className="mt-4 ml-16 text-gray-400 text-base">
                    © 2025 Class Technologies Inc.
                </div> 
            </div>
        </div>       
    </div> 
  )
}


export default Footer