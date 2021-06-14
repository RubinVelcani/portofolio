import React from 'react'

const Menu = ({ menu, toggleMenu }) => {
  return (
    <section className={menu ? 'absolute w-full h-screen z-30 flex items-start justify-between bg-mainYellow px-5 mt-16' : 'hidden w-full h-screen items-start justify-between bg-mainYellow px-5'}>
      <div className='flex flex-col'>
        <a href='#home' onClick={toggleMenu}>
          <h4 className='text-xl font-semibold p-2 mb-1.5'>Home</h4>
        </a>
        <a href='#about' onClick={toggleMenu}>
          <h4 className='text-xl font-semibold p-2 mb-1.5'>About Me</h4>
        </a>
        <a href='#skills' onClick={toggleMenu}>
          <h4 className='text-xl font-semibold p-2 mb-1.5'>Skills</h4>
        </a>
        <a href='#portofolio' onClick={toggleMenu}>
          <h4 className='text-xl font-semibold p-2 mb-1.5'>Portofolio</h4>
        </a>
        <a href='#contact' onClick={toggleMenu}>
          <h4 className='text-xl font-semibold p-2 mb-1.5'>Contact</h4>
        </a>
      </div>

    </section>
  )
}

export default Menu