import { motion } from 'framer-motion';
import React from 'react'
import { GoDot } from "react-icons/go";
function Spread() {
  return (
    <>
    <div className='w-full bg-white pt-20 pb-10 sm:pt-40 sm:pb-30'>
        <div className='max-w-screen-2xl mx-auto px-5 sm:px-10'>
        <div className='featured flex justify-center items-center gap-3 text-sm sm:text-lg '>
            <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon w-3" data-v-669b4a84=""><path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" data-v-669b4a84=""></path></svg>
            <h1>In the media</h1>
        </div>
        <div className='mt-10 text-6xl font-bold font-Gilroy flex flex-col justify-center items-center sm:text-[12vw]'>
        {["Spread","the News"].map((item,ind)=>{
                    return <h1 key={ind} className=''><motion.span
                    initial={{rotate:30,y:50,opacity:0}}
                    whileInView={{rotate:0,y:0,opacity:1}}
                    viewport={{once:true}}
                    transition={{ease:[0.22,1,0.36,1],duration: 1}} 
                    className='inline-block origin-left'>{item}</motion.span></h1>
                })}
        </div>
        <p className='mt-6 px-9 text-lg text-center sm:text-2xl sm:px-[30vw] sm:mt-10'>Find out more about our work on these leading design and technology platforms.</p>
        <div className='flex flex-col justify-center items-center'>
        <a className='border-b-[.3px] border-zinc-400 mt-10 inline-block sm:text-xl sm:mt-20 sm:mb-10'  href="#"><span className='flex items-center justify-center'><GoDot />Browser all news</span> </a>
        </div>
        </div>
    </div>
    </>
  )
}

export default Spread;
