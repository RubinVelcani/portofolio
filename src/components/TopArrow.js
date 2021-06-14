import React from 'react'

const TopArrow = () => (
  <a className='fixed bg-mainYellow bottom-10 right-10 p-2' href='#home' style={{clipPath: 'circle(50% at 50% 50%)'}}>
    <img className='bg-white' src='../../images/arrow-top.svg' alt='' style={{clipPath: 'circle(50% at 50% 50%)'}}/>
  </a>
)

export default TopArrow