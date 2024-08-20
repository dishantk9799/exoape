import { motion } from 'framer-motion';
import React, { useState } from 'react'
import { GoDot } from "react-icons/go";
function Work() {
    
    const [elem,setelem] = useState([
        {heading:"Columbia Pictures",subheading:"Celebrating a Century of Cinema",img:"https://a.storyblok.com/f/133769/2400x2990/540fb12941/columbia-pictures-thumbnail.jpg/m/1300x1620/filters:quality(90)",video:"https://player.vimeo.com/progressive_redirect/playback/927016456/rendition/720p/file.mp4?loc=external&log_user=0&signature=270ce5ba6bf44a717c74cf85de5f3de1d33a36ba5205b660e5e23b873199d71a"},
        {heading:"Rino & Pelle",subheading:"Effortless chic lifestyle",img:"https://a.storyblok.com/f/133769/2400x2990/b66359da25/rino-pelle-hero.jpg/m/1300x1620/filters:quality(90)",video:"https://player.vimeo.com/progressive_redirect/playback/914798484/rendition/720p/file.mp4?loc=external&log_user=0&signature=666d8099e0f1361eb1766ec0592b63a9bdf2b303cdb12ddfa5789d20ce8f523b"},
        {heading:"Aebele Interiors",subheading:"Luxurious design experience",img:"https://a.storyblok.com/f/133769/2400x2990/3e8f8d08f7/aebele-interiors-hero.jpg/m/1300x1620/filters:quality(90)",video:"https://player.vimeo.com/progressive_redirect/playback/914796979/rendition/540p/file.mp4?loc=external&log_user=0&signature=57ac30ff6fc3b29802f7414617e808395306f0b0fa5c9c6e3ef483a532f49c15"},
        {heading:"Pixelflakes",subheading:"Architectural marketing agency",img:"https://a.storyblok.com/f/133769/2400x2990/20d07e6f0c/pixelflakes-hero.jpg/m/1300x1620/filters:quality(90)",video:"https://player.vimeo.com/progressive_redirect/playback/914798271/rendition/720p/file.mp4?loc=external&log_user=0&signature=2af493277d050009920c26416a8d62a9a8c316353242c609ee157fcf1e300076"},
    ]);
  return (
   <>
   <div className='w-full relative'>
    <div className='max-w-screen-2xl mx-auto py-20 px-5 sm:px-10'>
        <div className='featured flex gap-3 text-sm'>
            <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon w-3" data-v-669b4a84=""><path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" data-v-669b4a84=""></path></svg>
            <h1>Featured Projects</h1>
        </div>
        <h1 className='text-6xl my-8 font-Gilroy font-extrabold sm:text-[40vh]'><motion.span
        initial={{opacity:0 }} 
        whileInView={{opacity:1}}
        
        transition={{ease:[0.22,1,0.36,1],duration: 2}}
        className='overflow-hidden origin-left'>Work</motion.span></h1>
        <p className='text-lg sm:hidden'>Highlights of cases that we passionately built with forward-thinking clients and friends over the years.</p>
    <div className='elems mt-10 flex flex-col items-center justify-center sm:flex sm:flex-row sm:flex-wrap sm:gap-10'>
        {elem.map((item,index)=>{
            return <div key={index} className='elem w-full mt-10 sm:w-[45%]'>
            <div className='video w-full h-[104vw] sm:h-[50vw] relative overflow-hidden'>
                <motion.img 
                initial={{opacity: 1}}
                whileHover={{opacity: 0}}
                data-scroll data-scroll-speed="-.2" className='hidden sm:absolute sm:left-0 sm:top-0 sm:z-[2] sm:block w-full h-full object-cover' src={item.img} alt=""></motion.img>
                <video autoPlay muted loop className='block sm:z-[1] w-full scale-[1.3] h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src={item.video}></video>
            </div>
            <div className='mt-2 text-sm'>
                <h3 className='font-semibold'>{item.heading}</h3>
                <p className='opacity-60'>{item.subheading}</p>
            </div>
        </div>
        })}
        <a className='border-b-[.3px] border-zinc-400  mt-20 inline-block sm:text-xl' href="#"><span className='flex items-center justify-center'><GoDot />Browser all work</span> </a>
    </div>
    </div>
   </div>
   </>
  )
}

export default Work;

