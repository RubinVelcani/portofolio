import React from 'react'

const About = () => (
  <section id='about' className='px-5 py-20'>
    <div className='w-full max-w-screen-lg mx-auto'>
    <h1 className='max-w-max bg-mainYellow px-3 mb-3 mx-auto'>About Me</h1>
    <h1 className='text-2xl font-bold mb-14'>Get To Know Me More</h1>
    <div className='flex flex-col'>
      <h1 className='text-2xl mb-6'>Hi i'm <span className='font-bold border-b-2 border-mainYellow'>Rubin Velçani</span></h1>
      <p className='mb-20'>
        I'm a web developer with a passion for web design. I enjoy developing simple,
        clean and slick websites that provide real value to the end user.
        Tens of clients have procured exceptional results while working with me.
        Delivering work within time and budget which meets client's requirements is my moto.
      </p>
      <div className='w-full justify-evenly items-center sm:flex'>
        <div>
          <img className='w-60 mx-auto' src='../../images/2-black.png' alt='' />
          <h1 className='text-3xl font-bold mt-6'>Years of experience</h1>
        </div>
        <div className='flex flex-col mt-20 pb-20 sm:mt-0 sm:pb-0'>
          <div className='mb-10'>
            <h1 className='text-gray-600'>Email:</h1>
            <h1 className='text font-semibold'>rubin.velcani@gmail.com</h1>
          </div>
          <div className='mb-10'>
            <h1 className='text-gray-600'>Date of Birth:</h1>
            <h1 className='text font-semibold'>18 December 1997</h1>
          </div>
          <div className='mb-10'>
            <h1 className='text-gray-600'>Based in:</h1>
            <h1 className='text font-semibold'>Tirana, Albania</h1>
          </div>
          <div className=''>
            <h1 className='text-gray-600'>Socials: </h1>
            <div className='flex flex-col items-center sm:flex-row'>
              <a className='flex items-center text font-semibold sm:mr-4' href='https://www.linkedin.com/in/rubin-velcani-b616b8187/'>
                <img className='w-12 mr-2' src='../../images/linkedin.svg' alt='' /> LinkedIn</a>
              <a className='flex text items-center font-semibold' href='https://github.com/RubinVelcani'>
                <img className='w-12 mr-2' src='../../images/github.svg' alt='' /> GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>
)

export default About