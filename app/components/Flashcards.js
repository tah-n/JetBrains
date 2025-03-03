'use client'
import React from 'react'
import Cards from './Cards'
import { cards, practicalSkills } from '@/lib/content'
import Button from './Button'
import SwitchButtons from './SwitchButtons'

const Flashcards = () => {
  return (
    <section className='max-w-full overflow-hidden relative top-[-175px]'>

        {/* add bg parts */}
        <div className='absolute top-[630px] right-[110px] w-[200px] h-[200px] -z-30'>
          <svg
            fill="none"
            height={687}
            viewBox="0 0 734 687"
            width={734}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m704.288 0h-214.058c-16.41 0-29.712 13.3127-29.712 29.7357v35.6726h-46.658c-16.616 0-30.092 13.4805-30.092 30.1165v35.2922h-46.283c-16.829 0-30.467 13.654-30.467 30.49v34.918h-45.909c-17.036 0-30.847 13.822-30.847 30.871v34.544h-45.529c-17.242 0-31.221 13.99-31.221 31.245v34.163h-45.155c-17.4541 0-31.6009 14.158-31.6009 31.626v33.789h-44.7808c-17.6609 0-31.9753 14.325-31.9753 32v230.536c0 17.675 14.3144 32.001 31.9753 32.001h230.3527c17.66 0 31.975-14.326 31.975-32.001v-36.879h41.686c17.454 0 31.601-14.158 31.601-31.627v-37.26h42.06c17.242 0 31.221-13.99 31.221-31.245v-37.635h42.44c17.035 0 30.847-13.822 30.847-30.871v-38.015h42.814c16.829 0 30.467-13.655 30.467-30.491v-38.389h43.188c16.616 0 30.092-13.481 30.092-30.117v-38.77h43.569c16.41 0 29.712-13.312 29.712-29.735v-214.2293c0-16.423-13.302-29.7357-29.712-29.7357z"
              fill="#6b57ff"
            />
          </svg>
        </div>  

        <div className='hidden sm:block absolute top-0 left-[-400px] -z-30'>
          <svg
              fill="none"
              height={699}
              viewBox="0 0 752 699"
              width={752}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="m179.179.192871h-158.5967c-11.36733 0-20.58236104 9.219099-20.58236104 20.591429v158.6667c0 11.372 9.21503104 20.591 20.58236104 20.591h48.3747v41.319c0 11.611 9.4086 21.024 21.0146 21.024h47.9554v40.899c0 11.843 9.597 21.443 21.435 21.443h47.523v40.491c0 12.075 9.785 21.864 21.854 21.864h47.103v40.059c0 12.307 9.973 22.284 22.274 22.284h46.697v39.626c0 12.546 10.165 22.716 22.706 22.716h46.252v39.219c0 12.778 10.354 23.136 23.126 23.136h45.844v38.787c0 13.009 10.541 23.556 23.545 23.556h45.412v38.366c0 13.242 10.73 23.976 23.966 23.976h151.83c13.236 0 23.966-10.734 23.966-23.976v-151.897c0-13.242-10.73-23.976-23.966-23.976h-44.992v-38.787c0-13.009-10.542-23.556-23.546-23.556h-45.424v-39.206c0-12.778-10.354-23.136-23.126-23.136h-45.832v-39.639c0-12.546-10.166-22.716-22.706-22.716h-46.264v-40.059c0-12.307-9.973-22.284-22.274-22.284h-46.684v-40.478c0-12.075-9.784-21.864-21.854-21.864h-47.103v-40.911c0-11.843-9.597-21.444-21.435-21.444h-47.536v-41.3189c0-11.6111-9.408-21.0238-21.014-21.0238h-47.943v-41.751c0-11.37233-9.215-20.591429-20.582-20.591429z"
                fill="#21d789"
                fillRule="evenodd"
              />
          </svg>
                        
        </div>

        <div className='relative flex w-full overflow-hidden items-center justify-center'>
            <div className='sm:rounded-[2.5rem] w-full lg:mx-20 sm:mx-5 rounded-l-[2.5rem] rounded-b-[2.5rem] overflow-hidden relative'>

                {/* header images  */}
               <div className='relative flex flex-col items-center top-0 gap-0'>   
                    <div className='sm:hidden relative w-[14rem] -right-[160px] top-0 z-30'>
                      <img src='assets/girl.png' />
                    </div>

     
                  

                    <div className='relative top-[-17px] h-[1400px] pb-3 z-10 flex items-center justify-center sm:h-[320vh] md:h-[2200px] md:w-[600vw] lg:h-[275vh] sm:w-[500vw] sm:scale-125 lg:w-full md:scale-105 w-[150vw] '>
                      <div className='w-full h-full absolute bg-white/10 backdrop-blur-3xl z-10' />
                      <img className='-z-20 h-full' src='assets/card1.png' />
                    </div>

                    
               </div>

                

                <div className='w-full top-[280px] sm:top-0 flex flex-col items-center py-14 text-center h-full absolute z-40'>
                  <div>
                      <h1 className='text-[2rem] lg:text-[4rem] lg:w-[700px] lg:my-8 lg:tracking-wider leading-tight mb-8 w-[90%] tracking-wide font-[600] text-white'>
                        Find your path in the IT industry
                      </h1>
                  </div>

                  <SwitchButtons 
                    className='sm:hidden' 
                    array={cards} 
                    cardBg={"radial-gradient(circle, rgba(33, 214, 138,0.9) 0%, rgba(33, 214, 138,0.5) 40%, rgba(33, 214, 138,0.05) 70%, rgba(33, 214, 138,0) 100%)"}
                  />

              
                  <div 
                    className='hidden sm:grid grid-cols-2 gap-3 lg:grid-cols-3 items-center justify-center'>
                    {/* Design the cards */}
                    {cards.map((card, index) => (
                    <Cards
                    bg={"radial-gradient(circle, rgba(33, 214, 138,0.9) 0%, rgba(33, 214, 138,0.5) 40%, rgba(33, 214, 138,0.05) 70%, rgba(33, 214, 138,0) 100%)"}
                    key={index} title={card.title} desc={card.desc} imgWhite={card.imgWhite} imgBlue={card.imgBlue} button={card.button} />
                    ))} 
                  </div>
  

                  <div className='w-full rounded-[2.5rem] border-b-[1px] border-white/50 flex flex-col gap-6 py-9 items-center justify-center'>
                      <Button className='w-[90%] sm:w-[400px] flex gap-3 justify-center items-center hover:!bg-[#1E3936] bg-black'>
                          Full course catalog
                          <div className='w-[30px]'>
                            <img className='' src='assets/arrowwhite.png' />
                          </div>
                      </Button>
                  </div>

          
                {/* bottom part */}
                <div className='w-full pt-12 text-center flex flex-col items-center'>

                    <div>
                          <h1 className='text-[2rem] lg:text-[4rem] lg:w-[700px] lg:my-8 lg:tracking-wider leading-tight mb-8 w-[90%] tracking-wide font-[600] text-white'>
                            Gain practical skills with our projects
                          </h1>
                      </div>

                      <SwitchButtons 
                        className='sm:hidden' 
                        array={practicalSkills} 
                        cardClassName='p-0 !h-[240px] md:!h-[220px] hover:!bg-[#21D789]'
                        cardBg={"radial-gradient(circle, rgba(106, 88, 254,0.9) 0%, rgba(106, 88, 254,0.5) 40%, rgba(106, 88, 254,0.05) 70%, rgba(106, 88, 254,0) 100%)"}
                        avatarClassName={'!top-5 right-5 lg:w-[3.8rem]'}
                        textClass={'absolute lg:!top-[-25px] !top-[-35px] left-5 w-[70%]'}
                        cardButton={null}
                      />

                  
                      <div 
                        className='hidden sm:grid grid-cols-2 gap-3 items-center justify-center'>
                        {/* Design the cards */}
                        {practicalSkills.map((card, index) => (
                        <Cards
                        className='sm:w-[42vw] lg:!w-[35vw] p-0 !h-[300px] md:!h-[220px] hover:!bg-[#21D789]'
                        bg={"radial-gradient(circle, rgba(106, 88, 254,0.9) 0%, rgba(106, 88, 254,0.5) 40%, rgba(106, 88, 254,0.05) 70%, rgba(106, 88, 254,0) 100%)"}
                        avatarClassName={'!top-5 right-5 lg:w-[3.8rem]'}
                        textClass={'absolute lg:!top-[-25px] !top-[-35px] left-5 w-[70%]'}
                        key={index} title={card.title} desc={card.desc} imgWhite={card.imgWhite} imgBlue={card.imgBlue} button={null} />
                        ))} 
                      </div>
      

                      <div className='w-full rounded-[2.5rem] flex flex-col gap-6 py-9 items-center justify-center'>
                          <Button className='w-[90%] sm:w-[400px] flex gap-3 justify-center items-center hover:!bg-[#1E3936] bg-black'>
                              Choose a project
                              <div className='w-[30px]'>
                                <img className='' src='assets/arrowwhite.png' />
                              </div>
                          </Button>
                      </div>
                        
                    </div>

                </div>

                
            </div>
        </div>
      
    </section>
  )
}

export default Flashcards
