import React from 'react'

const Footer = () => {
  return (
    <section className='bg-mainYellow'>
      <div className='w-full max-w-screen-xl mx-auto'>
        <div className='flex flex-col items-center px-5 py-20 md:flex-row md:items-start'>
          <a href='/'>
            <img className='w-32 md:mr-auto' src='../../images/logo-black.png' />
          </a>s
          <div className='flex flex-col my-12 md:mt-0 md:mr-20 md:text-left'>
            <a className='button btn-4 mb-5' href='#home'>
              <h4 className='text-xl text-center py-1 px-2 span'>Home</h4>
            </a>
            <a className='button btn-4 mb-5' href='#about'>
              <h4 className='text-xl text-center py-1 px-2 span'>About Me</h4>
            </a>
            <a className='button btn-4 mb-5' href='#skills'>
              <h4 className='text-xl text-center py-1 px-2 span'>Skills</h4>
            </a>
            <a className='button btn-4 mb-5' href='#portofolio'>
              <h4 className='text-xl text-center py-1 px-2 span'>Portofolio</h4>
            </a>
            <a className='button btn-4' href='#contact'>
              <h4 className='text-xl text-center p-1 px-2 span'>Contact</h4>
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