import React from 'react';
import girl from '../assets/girl.png'
import { BsPlayFill} from "react-icons/bs";
import { FaRegCalendarAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BarChart2, UserCircle } from 'lucide-react';
import { FaUserCircle } from 'react-icons/fa';

const LandingHero = () => {
  return (
    <div>
      <div className="relative bg-[#49BBBD] w-full overflow-hidden " style={{ minHeight: '671px' }}>
        {/* Curved white bottom */}
        <svg className="absolute bottom-0 left-0 w-full" height="80" viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M0,0 Q720,80 1440,0 L1440,80 L0,80 Z" fill="#fff" />
        </svg>
        <div className='relative'>
        <div className='mb-6 ml-24'>
          <h2 className='text-5xl font-bold mb-6 mt-36 '>
            <span className='text-orange-400'>Studying</span><span className='text-white mb-2'> Online is now <br/> much easier</span>
          </h2>
          <p className='text-slate-50  text-xl'>TOTC is an interesting platform that will teach <br/> you in a more interactive way</p>
        </div>
        <div className='mb-6 ml-28 flex flex-row items-center space-x-8'>
          <button className='text-gray-100 text-xl bg-[#82f1f3] w-40 h-16 rounded-full'>
            Join for Free
          </button>
          <button className='rounded-full bg-white w-16 h-16 relative'>
            <BsPlayFill className='text-blue-400 text-4xl absolute left-4 top-4 ' />
          </button><span className='text-lg'>Watch how it works</span>
        </div>
        </div>
        <div className='absolute top-6 right-44'>
          <div>
            <img src={girl} className='w-[580px] h-[600px]'/>
          </div>

          <div className=' flex w-64 py-4 bg-white opacity-90 items-center justify-center rounded-2xl absolute top-14 -left-12'>
           <FaRegCalendarAlt className="w-14 h-14 text-slate-200 bg-blue-400 rounded-xl mr-4 p-2" />
           <p className='text-lg'> <span className='font-semibold'>250k </span><br/> Assisted students</p>
          </div>
          
          <div className='flex w-80 py-5 bg-white opacity-90 items-center justify-center rounded-xl absolute -right-20 bottom-64'>
            <MdEmail className='bg-orange-400 text-slate-100 w-14 h-14 p-2 rounded-xl'/>
            <p className='text-lg ml-2'><span className='font-semibold'>Congratulations</span> <br/> Your admission completed</p>
          </div>

          <div className='flex w-16 py-3 h-16 bg-pink-600 opacity-55 items-center justify-center rounded-xl absolute -right-20 top-40'>
            <BarChart2 className=' bg-white w-12 h-12 rounded-lg text-pink-600 '/>
          </div>

          <div className='flex w-80 py-4 h-32 bg-white opacity-90 items-center justify-center rounded-2xl absolute -left-14 bottom-20'>
            <UserCircle size={48} color='cyan' className='absolute left-2 top-2'/>
            <div className='flex flex-col space-y-4'>
             <p className='text-gray-800'><span className='font-semibold text-xl mb-6'>User Experience Class</span> <br/>Today at 12.00 PM</p>
             <button className='bg-pink-600 opacity-55 w-28 h-10 rounded-2xl text-white'>Join now</button>
            </div>
          </div>
        </div>
      </div>   
    </div>
  );
};

export default LandingHero; 