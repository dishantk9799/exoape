import React from 'react'
import { GoDot } from "react-icons/go";
import { FaArrowDown } from "react-icons/fa6";
import {motion} from "framer-motion";
function Landing() {
  return (
    <>
    <div className='relative w-full h-[150vh] sm:h-[300vh] text-white'>
        <div className='picture w-full h-full overflow-hidden'><img data-scroll data-scroll-speed="-1" className='w-full h-full object-cover' src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/1280x1811/filters:quality(90)" alt="" /></div>
        <div className='absolute top-0 w-full'>
        <div className='text max-w-screen-2xl h-full mx-auto px-5 sm:px-10 '>
        <div className='para mt-72 text-lg sm:text-3xl sm:mt-96 sm:px-5'>
            {["Global digital design studio partnering","with brands and businesses that create","exceptional experiences where people","live, work, and unwind."].map((item,index)=>{
                return<p key={index} className=''><motion.span
                initial={{rotate:20,y:50,opacity:0}}
                animate={{rotate:0,y:0,opacity:1}}
                transition={{ease:[0.22,1,0.36,1],duration: 1.5,}}
                 className='inline-block origin-left'>{item}</motion.span></p>
                
            })}
            </div>
            
            <div className='heading text-6xl font-Gilroy font-extrabold mt-5 mb-5 sm:mt-52 sm:text-[38vh]'>
                {["Digital","Design","Experience"].map((item,ind)=>{
                    return <h1 key={ind} className=''><motion.span
                    initial={{rotate:30,y:50,opacity:0}}
                    whileInView={{rotate:0,y:0,opacity:1}}
                    viewport={{once:true}}
                    transition={{ease:[0.22,1,0.36,1],duration: 1}} 
                    className='inline-block origin-left'>{item}</motion.span></h1>
                })}
                
            </div>
            <motion.span 
            initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{ease:'easeInOut',duration: .7}}
            className='sm:hidden'><FaArrowDown /></motion.span>
            <div className='para2 sm:flex sm:gap-96 text-md mt-20 sm:text-2xl sm:mt-32 sm:px-5'>
                <div>
                <p>We help experience-driven companies thrive <br /> by making their audience feel the refined <br /> intricacies of their brand and product in the <br /> digital space. Unforgettable journeys start <br /> with a click.</p>
                <a className='border-b-[.3px] border-zinc-100  mt-10 inline-block sm:text-xl sm:mt-20' href="#"><span className='flex items-center'><GoDot />The Studio</span> </a>
                </div>
                <div className='hidden sm:flex sm:gap-20 sm:text-lg'>
                    <div>
                        <h1>Work</h1>
                        <h1>Studio</h1>
                        <h1>News</h1>
                        <h1>Contact</h1>
                    </div>
                    <div>
                        <h1>Hello@exapo.com</h1>
                        <h1>+0787066089</h1>
                    </div>
                </div>
            </div>
            
        </div>
        </div>
    </div>
    </>
  )
}

export default Landing;
