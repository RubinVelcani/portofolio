import React from 'react'

const Menu = ({ menu, toggleMenu }) => {
  return (
    <section className={menu ? 'absolute w-full h-screen z-30 bg-mainYellow px-5 mt-16' : 'hidden w-full h-screen items-start justify-between bg-mainYellow px-5'}>
      <div className='flex flex-col items-center mt-4'>
        <a className='button btn-4 mb-3' href='#home' onClick={toggleMenu}>
          <h4 className='w-32 text-2xl font-semibold p-2 mb-1.5 span'>Home</h4>
        </a>
        <a className='button btn-4 mb-3' href='#about' onClick={toggleMenu}>
          <h4 className='w-32 text-2xl font-semibold p-2 mb-1.5 span'>About Me</h4>
        </a>
        <a className='button btn-4 mb-3' href='#skills' onClick={toggleMenu}>
          <h4 className='w-32 text-2xl font-semibold p-2 mb-1.5 span'>Skills</h4>
        </a>
        <a className='button btn-4 mb-3' href='#portofolio' onClick={toggleMenu}>
          <h4 className='w-32 text-2xl font-semibold p-2 mb-1.5 span'>Portofolio</h4>
        </a>
        <a className='button btn-4 mb-3' href='#contact' onClick={toggleMenu}>
          <h4 className='w-32 text-2xl font-semibold p-2 mb-1.5 span'>Contact</h4>
        </a>
      </div>

    </section>
  )
}

export default Menu