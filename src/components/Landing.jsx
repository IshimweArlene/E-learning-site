import React from 'react'
import Header from './Header'
import { FaRegCalendarAlt } from 'react-icons/fa';
import { RiFileTextLine } from 'react-icons/ri'
import { MdGroups3 } from 'react-icons/md';
import  teacher from '../assets/teacher.png'
import vid from '../assets/vid.png' 
import teens from '../assets/teens.png'
import LandingHero from './LandingHero'
import Footer from './Footer'
const Landing = () => {
  return (
    <div>
        <div>
            <Header/>
            <LandingHero />
            <div className='flex flex-col relative justify-center items-center mb-4'>
              <h2 className='font-bold text-4xl mb-5'>Our success</h2>
              <p className='text-gray-700 text-center'><span>Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec</span> <br/>
              <span> nam et pharetra gravida. Adisciping a quis ultrices eu ornare tristique vel nisl orci.</span> </p>
            </div>

            <div className='grid grid-cols-5 ml-16 mr-20 mb-16'>
              <div className='justify-center items-center'>
                <p className='text-blue-600 text-7xl font-[350px]'>15K+</p>
                <p className='text-3xl text-gray-700 font-semibold'>Students</p>
              </div>
              <div className='text-center'>
                <p className='text-blue-600 text-7xl font-[350px]'>75%</p>
                <p className='text-3xl text-gray-700 font-semibold'>Total Success</p>
              </div>
              <div className='text-center'>
                <p className='text-blue-600 text-7xl font-[350px]'>35</p>
                <p className='text-3xl text-gray-700 font-semibold'>Main questions</p>
              </div>
              <div className='text-center'>
                <p className='text-blue-600 text-7xl font-[350px]'>26</p>
                <p className='text-3xl text-gray-700 font-semibold'>Chief Experts</p>
              </div>
              <div className='text-center'>
                <p className='text-blue-600 text-7xl font-[350px]'>16</p>
                <p className='text-3xl text-gray-700 font-semibold'>Years of experience</p>
              </div>
            </div>

            <div className='flex flex-col items-center justify-center space-y-5'>
              <h2 className='text-3xl'><span className='font-bold text-indigo-900'>All-In-One </span>
               <span className='text-blue-500 font-bold'>Cloud Software</span>
              </h2>
              <p className='text-center text-gray-700 text-[20px] font-medium'><span>TOTC is one powerful software online suite that combines all the tools <br/></span>
              <span>needed to run a successful school or office.</span>
              </p>
            </div >

            <div className='grid grid-cols-3 mx-36 justify-between my-20 items-center gap-1'>
              <div className='bg-white shadow-slate-300 shadow-xl flex items-center justify-center w-96 flex-col h-96 px-10 relative rounded-2xl'>
                <div className='bg-indigo-500 w-16 h-16 rounded-full p-1 justify-center items-center flex mb-8 absolute -top-4'>
                 <RiFileTextLine size={32} className='text-white text-center' />
                </div>
                <h2 className='text-3xl text-indigo-700 text-center font-semibold mb-5'><span>Online Billing,<br/></span>
                <span>Invoicing, Contracts</span></h2>
                <p className='text-center text-lg font-semibold text-gray-700'>Simple and secure control of your organization's financial and legal transactions, Send customized invoices and contracts</p>
              </div>
              <div className='bg-white shadow-slate-300 shadow-xl flex items-center justify-center w-96 flex-col h-96 px-10 relative rounded-2xl'>
                <div className='bg-indigo-500 w-16 h-16 rounded-full p-1 justify-center items-center flex mb-8 absolute -top-4'>
                 <FaRegCalendarAlt size={32} className='text-white text-center' />
                </div>
                <h2 className='text-3xl text-indigo-700 text-center font-semibold mb-5'><span>Easy Scheduling &<br/></span>
                <span>Attendance Tracking</span></h2>
                <p className='text-center text-lg font-semibold text-gray-700'>Simple and secure control of your organization's financial and legal transactions, Send customized invoices and contracts</p>
              </div>
              <div className='bg-white shadow-slate-300 shadow-xl flex items-center justify-center w-96 flex-col h-96 px-10 relative rounded-2xl'>
                <div className='bg-indigo-500 w-16 h-16 rounded-full p-1 justify-center items-center flex mb-7 absolute -top-4'>
                 <MdGroups3 size={32} className='text-white text-center' />
                </div>
                <h2 className='text-3xl text-indigo-700 text-center font-semibold mb-5'><span>Customer Tracking<br/></span></h2>
                <p className='text-center text-lg font-semibold text-gray-700'>Simple and secure control of your organization's financial and legal transactions, Send customized invoices and contracts</p>
              </div>
            </div>

            <div className='flex flex-col items-center justify-center text-center mx-96 my-20'>
              <h2 className='text-5xl font-semibold mb-4'><span className='text-indigo-900'>What is </span><span className='text-[#49BBBD]'>TOTC?</span></h2>
              <p className='text-xl text-gray-700 font-semibold'>TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</p>
            </div>
            <div className='flex flex-row items-center justify-center gap-10 mb-14'>
             <img src={teacher} className=' h-96'/>
             <img src={teens}className=' h-96' />
            </div>

            <div className='grid grid-cols-2 mx-36 mb-12'>
              <div className='items-center  justify-center mb-6 mt-10'>
                <h2 className='text-3xl mb-6 font-semibold leading-10 '><span className='text-indigo-900'>Everything you can do in a physical <br/> classroom,</span> <span className='text-[#49BBBD]'>You can do with TOTC</span></h2>
                <p className='text-xl  leading-loose tracking-wide font-semibold text-gray-500 mb-5'>TOTC’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.</p>
                <a href='learnmore.com' className='text-gray-500 font-medium text-lg underline '>Learn more</a>
              </div>
              <div>
                <img src={vid}/>
              </div>
            </div>

            <div className='flex flex-col mb-14 items-center justify-center'>
             <h2 className='text-4xl font-semibold mb-5'><span className='text-indigo-900'>Our </span><span className='text-[#49BBBD]'>Features</span></h2>
             <p className='text-gray-600 text-xl font-medium'>This very extraordinary feature, can make learning activities more efficient</p>
            </div>

            <div>
              
            </div>
            <Footer/>
        </div>
    </div>
  )
}

export default Landing