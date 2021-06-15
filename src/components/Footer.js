import React from 'react'

const Footer = () => {
  return (
    <section className='bg-mainYellow'>
      <div className='w-full max-w-screen-lg mx-auto'>
        <div className='flex flex-col items-center px-5 py-20 md:flex-row md:justify-between'>
          <a className='' href='/'>
            <img className='w-32' src='../../images/logo-black.png' alt=''/>
          </a>
          <div className='flex flex-col items-center my-12 md:mt-0 md:text-left md:flex-row md:mb-0'>
            <a className='w-24 button btn-4 mb-5 md:mr-10 md:mb-0' href='#home'>
              <h4 className='text-xl text-center py-1 span'>Home</h4>
            </a>
            <a className='w-24 button btn-4 mb-5 md:mr-10 md:mb-0' href='#about'>
              <h4 className='text-xl text-center py-1 span'>About Me</h4>
            </a>
            <a className='w-24 button btn-4 mb-5 md:mr-10 md:mb-0' href='#skills'>
              <h4 className='text-xl text-center py-1 span'>Skills</h4>
            </a>
            <a className='w-24 button btn-4 mb-5 md:mr-10 md:mb-0' href='#portofolio'>
              <h4 className='text-xl text-center py-1 span'>Portofolio</h4>
            </a>
            <a className='w-24 button btn-4' href='#contact'>
              <h4 className='text-xl text-center p-1 span'>Contact</h4>
            </a>
          </div>
          <div className='flex flex-col'>
            <a className='flex items-center text font-semibold' href='https://www.linkedin.com/in/rubin-velcani-b616b8187/'>
              <img className='w-12 mr-2' src='../../images/linkedin.svg' alt='' /> LinkedIn</a>
            <a className='flex text items-center font-semibold' href='https://github.com/RubinVelcani'>
              <img className='w-12 mr-2' src='../../images/github.svg' alt='' /> GitHub</a>
          </div>
        </div>
        <div className='p-2'>
          <h1 className='border-t border-black text-sm text-left py-3'>
            Rubin's Place, built with React and TailwindCSS
          </h1>
        </div>
      </div>
    </section>
  )
}

export default Footer