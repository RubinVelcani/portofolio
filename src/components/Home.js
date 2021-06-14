import React from 'react'
import { Turn as Hamburger } from 'hamburger-react'

const SectionHome = ({ toggleMenu }) => {

  return (
    <section id='home' className='bg-mainYellow pb-20 md:pb-0'>
      <div className='w-full max-w-screen-lg mx-auto'>
        <header className='relative w-full max-w-screen-xl flex items-center justify-between px-5 md:pb-20 mx-auto'>
          <img className='w-16' src='../../images/logo-black.png' alt='logo' />
          <div onClick={toggleMenu} className='absolute z-50 right-3 md:hidden'>
            <Hamburger direction='left' size='40' rounded='true' />
          </div>
          <nav className='hidden justify-evenly md:flex'>
            <a href='#home'>
              <h4 className='px-2 py-1 mr-3'>Home</h4>
            </a>
            <a href='#about'>
              <h4 className='px-2 py-1 mr-3'>About Me</h4>
            </a>
            <a href='#skills'>
              <h4 className='px-2 py-1 mr-3'>Skills</h4>
            </a>
            <a href='#portofolio'>
              <h4 className='px-2 py-1 mr-3'>Portofolio</h4>
            </a>
            <a href='#contact'>
              <h4 className='px-2 py-1 mr-3'>Contact</h4>
            </a>
          </nav>
        </header>
        <div className='flex flex-col-reverse items-center justify-evenly px-5 pt-10 pb-28 sm:flex-row'>
          <div>
            <div className=''>
              <h1 className='uppercase text-2xl'>hi, i'm</h1>
              <h1 className='uppercase text-3xl font-semibold my-6'>rubin velçani</h1>
            </div>
            <h1 className='uppercase text-2xl'>and i'm a web developer</h1>
            <div className='flex justify-between mt-20'>
              <a href='#portofolio'>
                <h1 className='bg-darkGray ring-1 ring-darkGray rounded-sm text-white px-5 py-4 mr-8'>View My Works</h1>
              </a>
              <a href='#contact'>
                <div className='flex items-center justify-evenly ring-1 ring-darkGray rounded-sm px-5 py-4 '>
                  <h1 className='mr-2'>Contact Me</h1>
                  <img className='' src='../../images/contact-arrow.svg' alt='form' />
                </div>
              </a>
            </div>
          </div>
          <img className='w-60 mt-10 mb-14' src='../../images/me.png' alt='' />
        </div>
        <a href='#about'>
          <img className='mx-auto pb-10' src='../../images/under-section-home.svg' alt='' />
        </a>
      </div>
    </section>
  )
}
export default SectionHome