import React, { useState } from 'react'
import { Turn as Hamburger } from 'hamburger-react'

const SectionHome = ({ toggleMenu }) => {

  const [work, setWork] = useState(true)
  const [contact, setContact] = useState(false)

  function toggleWork() {
    setWork(!work)
    setContact(!contact)
  }


  return (
    <section id='home' className='bg-mainYellow pb-20 md:pb-0'>
      <div className='w-full max-w-screen-lg mx-auto'>
        <header className='relative w-full max-w-screen-xl flex items-center justify-between px-5 md:pb-20 mx-auto'>
          <a href='/'>
            <img className='w-16' src='../../images/logo-black.png' alt='logo' />
          </a>
          <div onClick={toggleMenu} className='absolute z-50 right-3 md:hidden'>
            <Hamburger direction='left' size='40' rounded='true' />
          </div>
          <nav className='hidden justify-evenly md:flex'>
            <a className='button btn-4 mr-3' href='#home'>
              <h4 className='w-24 py-1 span'>Home</h4>
            </a>
            <a className='button btn-4 mr-3' href='#about'>
              <h4 className='w-24 py-1 span'>About Me</h4>
            </a>
            <a className='button btn-4 mr-3' href='#skills'>
              <h4 className='w-24 py-1 span'>Skills</h4>
            </a>
            <a className='button btn-4 mr-3' href='#portofolio'>
              <h4 className='w-24 py-1 span'>Portofolio</h4>
            </a>
            <a className='button btn-4 mr-3' href='#contact'>
              <h4 className='w-24 py-1 span'>Contact</h4>
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
              <a onMouseEnter={toggleWork} href='#portofolio'>
                <h1 className={work ? 'bg-black ring-1 ring-darkGray rounded-sm text-mainYellow p-4 mr-8' : 'bg-mainYellow ring-1 ring-black rounded-sm text-black p-4 mr-8'}>View My Works</h1>
              </a>
              <a onMouseEnter={toggleWork} href='#contact'>
                <div className={work ? 'bg-mainYellow flex items-center justify-evenly ring-1 ring-black rounded-sm text-black p-4' : 'bg-black flex items-center justify-evenly ring-1 ring-black rounded-sm text-mainYellow p-4'}>
                  <h1 className='mr-2'>Contact Me</h1>
                  {work ?
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" fill="#000" clipRule="evenodd">
                      <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm5.247 8l-5.247 6.44-5.263-6.44-.737.678 6 7.322 6-7.335-.753-.665z" />
                    </svg> :
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" fill="#F5DF4E" clipRule="evenodd">
                      <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm5.247 8l-5.247 6.44-5.263-6.44-.737.678 6 7.322 6-7.335-.753-.665z" />
                    </svg>
                  }
                </div>
              </a>
            </div>
          </div>
          <img className='w-60 mt-10 mb-14' src='../../images/avatar.png' alt='' />
        </div>
        <div className='max-w-max pb-10 mx-auto'>
          <a href='#about'>
            <img src='../../images/under-section-home.svg' alt='' />
          </a>
        </div>
      </div>
    </section>
  )
}
export default SectionHome