
import gsap, { ScrollTrigger,Power4 } from 'gsap/all';
import React, { useEffect, useRef } from 'react'

function Playreel() {
  
  const parent = useRef(null);
  const videodiv = useRef(null);
  const play = useRef(null);
  const reel = useRef(null);
  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
    var tl = gsap.timeline({
      scrollTrigger:{
        trigger: parent.current,
        top:"0 0",
        pin:true,
        scrub:1,
      }
    })
    tl
    .to(videodiv.current,{
      width:"105%",
      height:"105%",
      ease: Power4.easeInOut,
    },'a')
    .to(play.current,{
      x:"-400%",
      scale:2,
      ease: Power4.easeInOut,
    },'a')
    .to(reel.current,{
      x:"400%",
      scale:2,
      ease: Power4.easeInOut,
    },'a')
  })
  
  return (
    <>
    <div ref={parent} className='w-full h-screen overflow-hidden text-white bg-black relative'>
        <div ref={videodiv} className='aspect-video w-40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:w-80'>
        <video autoPlay muted loop className='w-full h-full scale-[1.3] opacity-60' src="https://player.vimeo.com/progressive_redirect/playback/914803778/rendition/1080p/file.mp4?loc=external&log_user=0&signature=5344c0e4fea63ca54bb433621ca0be7b9470b475583fa68b26de2b6e380a390a"></video>
        </div>
        <div className='picture absolute w-full h-full  pt-20 pb-10 flex flex-col justify-between sm:pb-10'>
        <div className='Work flex justify-center items-center gap-3 text-sm font-medium sm:text-base'>
            <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon w-3" data-v-669b4a84=""><path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" data-v-669b4a84=""></path></svg>
            <h1>Work in motion</h1>
        </div>
        <h1 className='w-full flex justify-center items-center gap-5 text-5xl font-Gilroy font-bold sm:text-[8vw] sm:gap-16'>
            <div ref={play}>Play</div>
            <div ref={reel}>Reel</div>
        </h1>
        <p className='text-center text-xs px-16 sm:text-base sm:px-[38vw]'>Our work is best experienced in motion. Don't forget to put on your headphones.</p>
        </div>
    </div>
    </>
  )
}

export default Playreel;
