import React from 'react'

const Footer = () => {
  return (
    <section className='bg-mainYellow'>
      <div className='w-full max-w-screen-xl mx-auto'>
        <div className='flex flex-col items-center px-5 py-20 md:flex-row md:items-start'>
          <img className='w-32 md:mr-auto' src='../../images/logo-black.png' />
          <div className='flex flex-col my-12 md:mt-0 md:mr-20 md:text-left'>
            <a href='#home'>
              <h4 className='text-xl p-1 mb-4'>Home</h4>
            </a>
            <a href='#about'>
              <h4 className='text-xl p-1 mb-4'>About Me</h4>
            </a>
            <a href='#skills'>
              <h4 className='text-xl p-1 mb-4'>Skills</h4>
            </a>
            <a href='#portofolio'>
              <h4 className='text-xl p-1 mb-4'>Portofolio</h4>
            </a>
            <a href='#contact'>
              <h4 className='text-xl p-1'>Contact</h4>
            </a>
          </div>
          <div className='flex flex-col'>
            <a className='flex items-center text font-semibold' href='https://www.linkedin.com/in/rubin-velcani-b616b8187/'>
              <img className='w-12 mr-2' src='../../images/linkedin.svg' alt='' /> LinkedIn</a>
            <a className='flex text items-center font-semibold' href='https://github.com/RubinVelcani'>
              <img className='w-12 mr-2' src='../../images/github.svg' alt='' /> GitHub</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer