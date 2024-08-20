import React from 'react'
import video from '../assets/space.mp4';
import { GoDot } from "react-icons/go";
import { motion } from 'framer-motion';
function Footer() {
  return (
    <>
    <div className='w-full h-screen bg-black text-[#e0ccbb] relative overflow-hidden'>
        <div className='w-full h-screen'>
        <video autoPlay loop muted className='w-full h-full object-cover opacity-20' src={video}></video>
        <div className=''>
            <div className='absolute left-0 top-0 px-5 py-20 sm:py-10 sm:w-full sm:px-20'>
                <div className=' font-Gilroy font-bold text-7xl sm:text-[11vw]'>
                {["Our","Story"].map((item,ind)=>{
                    return <h1 key={ind} className=''><motion.span
                    initial={{rotate:30,y:50,opacity:0}}
                    whileInView={{rotate:0,y:0,opacity:1}}
                    viewport={{once:true}}
                    transition={{ease:[0.22,1,0.36,1],duration: 1}} 
                    className='inline-block origin-left'>{item}</motion.span></h1>
                })}
                </div>
                <p className='mt-10 text-lg sm:text-2xl sm:w-1/2'>The story behind Exo Ape is one of exploration, creativity and curiosity.</p>
                <div className='flex flex-col justify-center items-start sm:hidden'>
                    <a className='border-b-[.3px] border-zinc-400 mt-10 inline-block sm:text-xl sm:mt-20' href="#"><span className='flex items-center justify-center'><GoDot />Our Story</span> </a>
                </div>
                <hr className='w-full h-[0.5px] bg-[#e0ccbb] mt-10 ' />
                <div className='flex justify-between items-center py-5 px-5'>
                <ul className='hidden sm:flex sm:flex-col sm:gap-3 sm:text-sm'>
                        <li><a href="#">Willem II Singel 8</a></li>
                        <li><a href="#">6041 HS,Roermond</a></li>
                        <li><a href="#">The Netherland</a></li>
                        <li><a href="#">hello@exoape.com</a></li>
                    </ul>
                    <ul className='flex flex-col gap-3 text-sm'>
                        <li><a href="#">Work</a></li>
                        <li><a href="#">Studio</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <ul className='flex flex-col gap-3 text-sm'>
                        <li><a href="#">Behance</a></li>
                        <li><a href="#">Dribble</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Instagram</a></li>
                    </ul>
                    <div className='hidden sm:flex'>
                    <a className='border-b-[.3px] border-zinc-400 inline-block text-xl' href="#"><span className='flex items-center justify-center'><GoDot />Our Story</span> </a>
                   </div>
                </div>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Footer;
