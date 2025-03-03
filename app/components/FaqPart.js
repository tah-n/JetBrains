'use client'
import React from 'react'
import Subscription from './Subscription';
import useStore from './useStore';
import Socials from './Socials';
import Faq from './Faq';
import Footer from './Footer';

const FaqPart = () => {
  const display = useStore((state) => state.display);
  const isToggled = useStore((state) => state.isToggled)

  return (
    <section className={`relative ${isToggled? 'h-[2100px] sm:h-[1500px] lg:h-[240vh]': 'h-[1917px] sm:h-[1450px] lg:h-[220vh]'} transition-all ease-in-out top-[-300px] lg:top-[-600px] w-full overflow-hidden`}>

        <div className='w-full h-auto '>
            {/* bg */}
            <div className='absolute top-0 left-[-45vw] w-[175vw] -z-10'>
                <img src='assets/asset 8 1.png' className='' />
            </div>

            <div className='relative top-[280px] w-full lg:top-[600px] h-fit'>
              {/* green */}
              <div className='absolute bg-[#21D789] w-full sm:left-[-2.5rem] sm:w-[65vw] sm:flex sm:justify-end lg:w-[46vw] sm:rounded-[3rem] sm:z-30 rounded-[2rem] h-[55rem] z-20'>
                  <Subscription />
              </div>
              {/* blue */}
              <div className={`absolute flex justify-end bg-[#6B57FF] left-[-25px] sm:left-0 sm:w-full lg:w-[52vw] lg:left-[20vw] sm:top-14 ${display? 'top-[36rem]' : 'top-[25rem]'} sm:rounded-[3rem] sm:z-10 z-30 w-[95%] h-[30rem] rounded-[2rem]`}>
                  <Socials />
              </div>
              {/* green */}
              <div className='bg-[#21D789] hidden lg:block absolute w-[40vw] right-0 top-[6rem] rounded-[3rem] h-[30rem]'>

              </div>

              {/* FAQ */}
              <div className={`absolute ${display? 'top-[56rem]' : 'top-[50rem]'} flex items-center h-[67vh] lg:justify-center px-2 transition-all ease-in-out sm:top-[30rem] sm:h-[50rem] w-full rounded-[2rem] bg-white sm:rounded-[2.3rem] z-40`}>
                  <Faq />
              </div>


            </div>

            <Footer />


        </div>


      
        
      
    </section>
  )
}

export default FaqPart;
