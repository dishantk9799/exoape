import gsap,{ Linear, Power4, ScrollTrigger } from 'gsap/all';
import React, { useEffect, useRef } from 'react'

function Images() {
  const first = useRef(null);
  const second = useRef(null);
  const third = useRef(null);
  const forth = useRef(null);
  const parent = useRef(null);
  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger: parent.current,
        start:"0 90%",
        scrub:1,
      }
    });
    tl.to(first.current, {
      x:"60%",
      ease: Linear,
    },'a')
    tl.to(forth.current, {
      x:"-60%",
      ease: Linear,
    },'a')
    tl.to(third.current, {
      x:"60%",
      ease: Linear,
    },'a')
    tl.to(second.current, {
      x:"-60%",
      ease: Linear,
    },'a')
  })
  return (
    <>
    <div ref={parent} className='w-full h-[70vh] bg-white flex items-center justify-center sm:h-[140vh]'>
        <div  className='w-[40%] h-1/2 relative sm:h-[70%] sm:w-[28%]'>
        <div ref={first} className='absolute w-14 h-[5rem] -right-1/4 top-6 sm:w-48 sm:h-[20rem] sm:-right-44'> <img className='w-full h-full object-cover' src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/1200x1703/filters:quality(90)" alt="" /></div>
        <div ref={second} className='absolute w-24 h-[4rem] -left-1/2 top-16 sm:w-80 sm:h-[12rem] sm:top-56'><video autoPlay loop muted className='w-full h-full object-cover scale-[1.3]' src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"></video></div>
        <div ref={third} className='absolute w-28 h-[8rem] -right-1/2 -bottom-24 sm:w-72 sm:h-[18rem] sm:-bottom-60'><video autoPlay loop muted className='w-full h-full object-cover scale-[1.3]' src="https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4"></video></div>
        <div ref={forth} className='absolute w-32 h-[5rem] -left-24  -bottom-16 sm:w-96 sm:h-[16rem] sm:-bottom-52 sm:-left-60'><img className='w-full h-full object-cover' src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/1200x804/filters:quality(90)" alt="" /></div>
        
        <img className='w-full h-full object-cover' src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/1200x2050/filters:quality(90)" alt="" />
        </div>
    </div>
    </>
  )
}

export default Images;
