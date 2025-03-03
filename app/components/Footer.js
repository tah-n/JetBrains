import { footer } from '@/lib/content';
import React from 'react'

const Footer = () => {
  return (
    <footer className='absolute z-50 bottom-0 w-full p-6 flex flex-col items-center justify-center gap-5 bg-[#19191C] h-[170px] sm:h-[120px] md:px-[12vw]'>
      <div className='w-full flex flex-wrap'>
        {footer.map((option, i) => (
            <div 
            key={i}
            className='w-fit mr-3 hover:border-b cursor-pointer '>
                <a>
                    <p className='text-white/60 text-sm hover:text-white/100'>
                        {option.option}
                    </p>
                </a>
            </div>

        ))}
      </div>
      <div className='w-full flex flex-col md:flex-row md:justify-between text-white/40 text-xs py-1'>
        <p>
            Copyright © 2000-2025 <span className='text-white/60 hover:border-b hover:text-white cursor-pointer'>JetBrains</span> s.r.o.<br />
        </p>
        <p>    
            Developed with drive and <span className='text-white/60 hover:border-b hover:text-white cursor-pointer'>IntelliJ IDEA</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer;
