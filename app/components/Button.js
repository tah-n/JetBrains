import React from 'react'

const Button = ({className, children}) => {
  return (
    <button className={`${className} rounded-full bg-[#6B57FF] sm:h-[52px] text-center sm:w-[200px] h-[42px] w-[180px] text-[16px] hover:bg-[#8979FF] text-white ease-in-out sm:text-xl z-50`}>
        {children}
    </button>
  )
}

export default Button
