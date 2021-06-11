import React from 'react'

const SectionHome = () => (
  <section className='bg-mainYellow pb-20'>
    <header className='w-full max-w-screen-xl flex items-center justify-between px-5 mx-auto'>
      <img className='w-16' src='../../images/logo-black.png' alt='logo' />
      <img className='w-12 block md:hidden' src='../../images/hamburger.svg' alt='menu' />
      <nav className='hidden justify-evenly md:flex'>
        <h4 className=''>Home</h4>
        <h4 className=''>About Me</h4>
        <h4 className=''>Skills</h4>
        <h4 className=''>Portofolio</h4>
        <h4 className=''>Contact</h4>
      </nav>
    </header>
    <div className='flex flex-col-reverse items-center justify-between px-5 pt-10 pb-28 sm:flex-row'>
      <div>
        <h1 className='uppercase text-2xl'>hi, i'm</h1>
        <h1 className='uppercase text-3xl font-semibold my-6'>rubin velçani</h1>
        <h1 className='uppercase text-2xl'>and i'm a web developer</h1>
        <div className='flex justify-between mt-20'>
          <h1 className='bg-darkGray ring-1 ring-darkGray rounded-sm text-white px-5 py-4 mr-8'>View My Works</h1>
          <div className='flex items-center justify-evenly ring-1 ring-darkGray rounded-sm px-5 py-4 '>
            <h1 className='mr-2'>Contact Me</h1>
            <img className='' src='../../images/contact-arrow.svg' alt='form' />
          </div>
        </div>
      </div>
      <img className='w-60 mt-10 mb-14' src='../../images/me.png' alt=''/>
    </div>
    <img className='mx-auto pb-10' src='../../images/under-section-home.svg' alt=''/>
  </section>
)

export default SectionHome