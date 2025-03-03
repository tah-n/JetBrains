'use client'
import { interviews, logos } from '@/lib/content';
import React from 'react';
import Button from './Button';

const ReviewSection = () => {
  return (
    <div id='review' className='relative top-[-130px] w-full flex items-center justify-center overflow-hidden '>
      <div className='relative w-full top-0 xl:mx-20 sm:mx-4 h-[900px] sm:h-[950px] lg:h-[140vh] overflow-hidden'>
        <div className='absolute top-0 w-full h-full bg-white/20 backdrop-blur-3xl rounded-[2.3rem]' />
        <img src='assets/bg2.png' className='w-full h-full rounded-[2.3rem]'  />

        {/* cards */}
        <div className='absolute w-full h-fit pb-8 border-b border-black/20 top-0 z-10 flex flex-col items-center justify-center'>
          {/* title */}
          <h1 className='text-[2rem] sm:text-[3rem] my-8 mt-14 text-white font-[600] '>
            What our learners say
          </h1>

          {/* cards */}
          <div className='w-full no-scrollbar scroll-smooth overflow-x-scroll'>

            <div className='w-fit h-full px-4 lg:w-full flex justify-center gap-4'>
              {/* reviews here with the button */}
              {interviews.map((view, i) => (
                <div
                  key={i} 
                  className='rounded-3xl bg-[#6B57FF] text-white w-[90vw] sm:w-[400px] lg:w-[25vw] sm:h-[300px] flex flex-col justify-center sm:justify-evenly gap-9 px-4 h-[270px] overflow-hidden'>
                    <p className='z-20'>
                      {view.review}
                    </p>
                  <div className='relative flex items-center gap-5'>
                    <div 
                      className='absolute flex left-[-65px] z-10 bottom-[-70px] w-48 h-48 rounded-full'
                      style={{background: 'radial-gradient(circle, rgba(33, 214, 138,0.9) 12%, rgba(33, 214, 138,0.45) 45%, rgba(33, 214, 138,0.05) 70%, rgba(33, 214, 138,0) 100%)'}}
                    />
                    <div className='w-14 z-20'>
                      <div>
                        <img className='rounded-full m-auto' src={view.avatar} width={48} height={48} />
                      </div>
                    </div>
                    <div className='text-xs leading-relaxed z-20'>
                      <p className='font-semibold '>{view.name}</p>
                      <p>{view.job}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* button */}
            <Button className='w-[90%] sm:w-[200px] mt-10 border border-black/30 text-black/90 flex gap-3 justify-center items-center hover:!bg-black/10 bg-black/0'>
                   Read more
                <div className='w-[30px]'>
                  <img className='' src='assets/blackArrow.png' />
                </div>
            </Button>                                           


        </div>

        {/* logos */}
        <div className='absolute bottom-14 sm:bottom-6 lg:bottom-32 lg:gap-10 xl:bottom-28 w-full flex flex-col gap-9 sm:gap-3 items-center text-black/70 justify-center text-xl sm:text-3xl text-center'>
            <div className='sm:w-[90%] sm:mb-1 w-[95%]'>
              <p>
                Our learners work at some of the industry’s leading companies
              </p>
            </div>
            <div className='w-full sm:w-[80%] md:w-[85%] lg:w-[95%] flex flex-wrap justify-center px-8 gap-4 md:mt-4 items-center opacity-80'>
              {logos.map((logo,i) => (
                <div key={i} className='flex items-center px-2 lg:px-4'>
                  <img 
                  className={`m-auto w-[77px] sm:w-[105px] md:w-[120px] lg:w-[140px]`}
                    width={75} 
                    height={75} 
                    src={logo.img} 
                    alt={logo.alt}
                    />
                </div>
              ))}
            </div>
          </div>

      </div>

    </div>
  )
}

export default ReviewSection;
