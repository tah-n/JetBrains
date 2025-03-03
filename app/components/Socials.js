import { socials } from '@/lib/content';
import React from 'react'

const Socials = () => {
  return (
    <div className='w-[90%] sm:w-[15rem] md:w-[18rem] xl:w-[22rem] sm:pt-7 text-white '>
        <p className='font-semibold tracking-wide text-xl mt-6 mb-4'>Follow us</p>

        <div className='w-full sm:grid sm:grid-cols-2'>
            {socials.map((item,i) => (
                <div key={i}
                className='flex gap-4 sm:gap-3 sm:my-2 my-4'>
                    <img src={item.img} width={25} height={25} />
                    <div className='cursor-pointer w-fit border-b border-white/40 hover:border-white'>
                        <p>{item.name}</p>
                    </div>
                </div>
            ))}
        </div>
      
    </div>
  )
}

export default Socials;
