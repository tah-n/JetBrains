'use client'
import React, { useEffect, useRef, useState } from 'react';
import Cards from './Cards';

const ITEM_WIDTH = 390;

const SwitchButtons = ({array,className,cardBg,cardClassName,avatarClassName,textClass,cardButton}) => {
    const containerRef = useRef(null);
    const[scrollPos,setScrollPos] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        if (containerRef.current) {
          setScrollPos(Math.round(containerRef.current.scrollLeft));
        }
      };
  
      const container = containerRef.current;
      if (container) {
        container.addEventListener("scroll", handleScroll);
      }
  
      return () => {
        if (container) {
          container.removeEventListener("scroll", handleScroll);
        }
      };
    }, []);

    const scrollToCard = (scrollAmount) => {

      const newScrollPos = scrollPos + scrollAmount;

      if(newScrollPos < array.length * ITEM_WIDTH && newScrollPos > -ITEM_WIDTH) {
        setScrollPos(newScrollPos)

        containerRef.current.scrollLeft = newScrollPos;
      }
      
        
    }
  


  return (
    <div className={`${className} flex flex-col items-center`}>
     {/* cards container */}
     <div 
        ref={containerRef}
        className='no-scrollbar sm:w-full w-[100vw] overflow-x-auto scroll-smooth'>
        <div 
        className='w-fit px-4 flex gap-3'>
        {/* Design the cards */}
        {array.map((card, index) => (
        <Cards
          className={cardClassName}
          avatarClassName={avatarClassName}
          bg={cardBg}
          textClass={textClass}
          key={index} 
          title={card.title} 
          desc={card.desc} 
          imgWhite={card.imgWhite} 
          imgBlue={card.imgBlue} 
          button={cardButton === null ? cardButton: card.button} 
        />
        ))} 
        </div>
    </div>
    {/* buttons */}
    <div className='flex gap-6 pt-9 items-center'>
        <button
        onClick={() => scrollToCard(-ITEM_WIDTH)}
        className={`rotate-180 hover:bg-black/10 w-[42px] h-[42px] p-2 border border-black/30 rounded-full ${scrollPos === 0 && 'opacity-40 pointer-events-none'}`}>
          <img className='pointer-events-none' src='assets/arrow.png' alt='arrow' />
        </button>
        <span className='text-black/50'>
          {Math.round(scrollPos/ITEM_WIDTH) + 1}/{array.length}
        </span>
        <button 
        onClick={() => scrollToCard(ITEM_WIDTH)}
        className={`w-[42px] hover:bg-black/10 h-[42px] p-2 border border-black/30 rounded-full ${scrollPos > (array.length-1) * ITEM_WIDTH && 'pointer-events-none opacity-50'}`}>
          <img className='pointer-events-none' src='assets/arrow.png' alt='arrow' />
        </button>
    </div>
    </div>
   
  )
}

export default SwitchButtons;
