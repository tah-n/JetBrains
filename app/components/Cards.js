'use client' 
import React from 'react';
import { useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';

const Cards = ({ className, title, textClass, bg, avatarClassName, desc, button, imgWhite,imgBlue}) => {
    const [mouseOver,setMouseOver] = useState(false);

    const mouse = {
        x: useMotionValue(0),
        y:useMotionValue(0)
    }


    const handleMouseOver = () => {
        setMouseOver(true);
    }

    const handleMouseLeave =() => {
        setMouseOver(false);
    }

  


  return (
    <div 
    onMouseMove={(e) => {
        const { left, top } = e.currentTarget.getBoundingClientRect();
        mouse.x.set(e.clientX - left - 150);
        mouse.y.set(e.clientY - top - 135);
    }}
    onMouseEnter={handleMouseOver} 
    onMouseLeave={handleMouseLeave} 
    className={`${className} relative sm:w-[42vw] lg:w-[24vw] sm:h-[350px] cursor-pointer text-left bg-white transition-all ease-in-out text-[#19191c] hover:bg-[#6B57FF] hover:text-white pl-6 p-6 flex flex-col items-start justify-center overflow-hidden w-[390px] h-fit min-h-[310px] rounded-3xl`}>
        <motion.div
          className={`absolute w-[250px] z-0 h-[250px] pointer-events-none ease-in-out transition-opacity duration-75 opacity-0 ${mouseOver && 'opacity-100'}`}
          style={{
            x:mouse.x,
            y:mouse.y,
            background:`${bg}`,
            filter: "blur(10px)",
          }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 2000,
            damping: 40,
          }}
        />
        
          <div className={`w-[3.2rem]  absolute top-4 object-cover mb-6 z-10 ${avatarClassName}`}>
              <img src={mouseOver? `${imgWhite}`: `${imgBlue}`} alt='pic' />
          </div>
          <div className={`${textClass} m-0 p-0 z-10`}>
              <h1 className='text-[18px] mb-4 mt-16 leading-tight font-semibold z-10'>
                  {title}
              </h1>
              <p className={`opacity-70 w-[98%] tracking-wide z-10 ${mouseOver && '!opacity-100 text-white'}`}>
                  {desc}
              </p> 
          </div>
        {button !== null ? (
          <div className='bg-white/0 cursor-pointer mt-6 border border-black/15 text-center py-2 hover:bg-black/10 backdrop-blur-sm rounded-full sm:h-[45px] sm:text-[18px] sm:w-[180px] h-[42px] w-[150px] text-[16px] ease-in-out sm:text-xl z-10'>
          {button} 
          </div>
        ): null}   
        
      
    </div>
  )
}

export default Cards
