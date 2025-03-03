import React, { useState } from 'react'
import Button from './Button';
import useStore  from './useStore';

const Subscription = () => {
  const toggle = useStore((state) => state.toggleDisplay);
  const display = useStore((state) => state.display);
  const displayFalse = useStore((state) => state.displayFalse);
  const displayTrue = useStore((state) => state.displayTrue);



  return (
    <div className='w-full relative sm:w-[87%] '>
        <div className='w-full mt-10 px-4 sm:mt-14'>
            <h4 className='text-black text-2xl sm:text-3xl sm:w-80 font-semibold w-56'>
                Subscribe to JetBrains Academy news and tips
            </h4>
            <input placeholder='Email' className='outline-none p-2 w-[98%] sm:w-[85%] mt-4' />
           <div className='relative w-full inline-flex items-center h-16 py-6'>
                <p className='text-[14px] w-[20rem] inline-block tracking-wide text-black/60 leading-5 sm:leading-6 mt-7 sm:mt-0'>
                    I agree that my personal data will be processed for this purpose.
                </p>
                <div 
                    onMouseEnter={displayTrue}
                    onMouseLeave={displayFalse}
                    className='hidden absolute left-[120px] bottom-3 sm:flex items-center w-4 h-4 flex-shrink-0 cursor-pointer'>
                    <img src='assets/mark.png' alt='mark' width={16}  height={16} />
                    <div className='relative'>

                    {display && (
                            <div
                            onMouseEnter={displayTrue}   
                            onMouseMove={displayTrue}
                            onMouseLeave={displayFalse} 
                            className={`transition-all absolute right-[-355px] -bottom-[120px] bg-[#303033] w-[350px] p-3 rounded-md`}
                            >
                                <p className='text-[14px] tracking-wide text-white/90 '>
                                    By submitting this form, I agree that JetBrains s.r.o. may process the personal data I provided above and my location for the purpose explained above and may engage third parties in such processing. The consent can be revoked in my profile at any time. More details about the processing are in JetBrains Privacy Notice. In addition, an unsubscribe link is included in each email.
                                </p>
                            </div>
                    )}
                    </div>
                </div>
               
           </div>
           

            <div className={`relative sm:hidden w-full pb-8 mt-2  ${display? 'h-[10rem]' : 'h-8'}`}>
                <div 
                    onClick={toggle}
                    className='absolute h-8 left-[-18px] transition-all ease-in-out bottom-0 w-32 flex items-center justify-center gap-3 cursor-pointer text-center hover:bg-black/10 rounded-full p-2'>
                    <span className='text-[13px] tracking-wide'>{display? 'Show less': 'Show more'}</span>
                    <img src={display ? 'assets/up.png' :'assets/down.png'} width={13} height={18} />
                </div>
                <div className={`overflow-hidden w-full text-left transition-all ease-in-out ${display? 'h-fit' : 'h-0'} `}>
                    <p className='text-[14px] tracking-wide text-black/60 '>
                    By submitting this form, I agree that JetBrains s.r.o. may process the personal data I provided above and my location for the purpose explained above and may engage third parties in such processing. The consent can be revoked in my profile at any time. More details about the processing are in JetBrains Privacy Notice. In addition, an unsubscribe link is included in each email.
                    </p>
                </div>
            </div>
            <Button className='mt-6 !bg-black !w-28 hover:!bg-[#1B3F31]'>
                Submit
            </Button>
        </div>
      
    </div>
  )
}

export default Subscription;
