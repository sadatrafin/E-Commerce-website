import React, { Children } from 'react'

const Para = ({ children, className }) => {
  return (
    <div className={` font-normal text-[16px] leading-[30px] ${className}`}>{children}</div>
  )
}

export default Para
