'use client'
import { achievement } from '@/lib/content';
import React from 'react'

const Achievements = () => {
  return (
    <section className='relative top-[-100px] w-full flex items-center justify-center overflow-hidden'>
        <div className='relative w-full rounded-[2.3rem] sm:scale-100  xl:mx-20 sm:mx-4 h-[970px] sm:h-[800px] md:h-[800px] lg:h-[700px] overflow-hidden'>
            <div className='absolute top-0 w-full h-full bg-white/20 scale-150 z-20 backdrop-blur-2xl rounded-[2.3rem]' />
            <img src='assets/Achbg1.png' className='w-full scale-150 h-[2000px] rounded-[2.3rem] '  />
        
        
            <div className='absolute w-full text-center top-0 z-30'>
                <div>
                    <h1 className='text-[2rem] sm:text-[3rem] my-8 mt-14 text-white font-[600]'>
                        Why choose JetBrains Academy?
                    </h1>
                </div>

                <div className='w-full lg:px-14 grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-5 sm:justify-center mt-8'>
                    {achievement.map((item, i) => (
                        <div key={i} className='flex flex-col gap-2 items-start text-left p-2 pl-4'>
                            <div className='text-4xl pl-1 text-black/80 '>
                                {item.number}
                                <img src={item.logo} width={35} className='' />
                            </div>
                            <p className='text-[15px] text-black/70 tracking-wide font-semibold'>{item.title}</p>
                            <p className='text-[17px] text-black/80 tracking-wide '>{item.description}</p>
                        </div>
                    ))}
                    
                    
                </div>
            </div>

        
        
        </div>
      
    </section>
  )
}

export default Achievements;
