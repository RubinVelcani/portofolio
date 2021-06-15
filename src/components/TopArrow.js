import React from 'react'

const TopArrow = () => (
  <a className='fixed bg-mainYellow bottom-5 right-5 p-2 lg:bottom-10 lg:right-10' href='#home' style={{clipPath: 'circle(50% at 50% 50%)'}}>
    <img className='bg-white' src='../../images/arrow-top.svg' alt='' style={{clipPath: 'circle(50% at 50% 50%)'}}/>
  </a>
)

export default TopArrow