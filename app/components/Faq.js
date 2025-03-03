import { faq } from '@/lib/content';
import React, { useState } from 'react'
import useStore from './useStore';

const Faq = () => {
    const[openIndex,setOpenIndex] = useState(null);
    const toggleTrue = useStore((state) => state.toggleTrue);
    const toggleFalse = useStore((state) => state.toggleFalse);



    const handleClick=(index) => {
        setOpenIndex(openIndex === index ? null : index);
        if(openIndex === index) {
            toggleFalse();

        } else {
            toggleTrue();

        }
        
    }

  return (
    <div className='w-full lg:w-[65%] justify-center h-full min-h-[200px] p-4 py-20'>
        <p className='mb-4 text-3xl font-semibold'>FAQ</p>

        <div className='w-full lg:grid lg:grid-cols-2 lg:gap-0'>
            {faq.map((item, index) => (
                <div key={index} className='h-auto'>
                <div 
                onClick={() => handleClick(index)}
                className={`${openIndex === index && 'bg-[#F3F3F3]'} flex gap-2 w-full h-14 md:h-12 lg:h-16 py-3 hover:bg-[#E8E8E8] cursor-pointer`}>
                    <div className={`flex items-center justify-center ml-2 mb-2 w-6 transition-all ease-in-out ${openIndex === index && 'rotate-45'}`}>
                         <img src='assets/plus.png' alt='plus' width={20} />
                    </div>
                    <p className='text-[16px] font-semibold tracking-wide'>{item.questions}</p>
                </div>
                <div className={`${openIndex === index? 'h-fit p-1 pl-10' : 'h-0 py-0'} transition-all ease-in-out w-full bg-[#F3F3F3] overflow-hidden`}>
                    <p className='text-[16px]'>
                        {item.answer}
                    </p>
                </div>
            </div>
            ))}
            

        </div>
      
    </div>
  )
}

export default Faq;
