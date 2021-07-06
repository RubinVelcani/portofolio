import React from 'react'

const Skills = () => (
  <section id='skills' className='bg-lightGray px-5 py-20'>
    <div className='w-full max-w-screen-lg mx-auto'>
      <h1 className='max-w-max bg-mainYellow px-3 mb-3 mx-auto'>Skills</h1>
      <h1 className='text-2xl font-bold mb-20'>Get To Know My Skills</h1>
      <div className='sm:grid grid-cols-2 gap-x-10'>
        <div>
          <h1 className='text-xl font-bold mb-10'>Technical</h1>
          <div className='grid grid-cols-1 z-50'>
            <div className='mb-5'>
              <h1 className='font-semibold'>HTML5/CSS3</h1>
              <div className="mt-2 bg-black rounded-full overflow-x-hidden">
                <div data-aos="slide-right"
                  data-aos-offset="200"
                  data-aos-easing="ease-in"
                  data-aos-duration="800"
                  className="w-full bg-mainYellow py-1 rounded-full"></div>
              </div>
            </div>
            <div className='mb-5'>
              <h1 className='font-semibold'>Javascript</h1>
              <div className="mt-2 bg-black rounded-full overflow-x-hidden">
                <div data-aos="slide-right"
                  data-aos-offset="200"
                  data-aos-easing="ease-in"
                  data-aos-duration="800"
                  className="w-9/12 bg-mainYellow py-1 rounded-full"></div>
              </div>
            </div>
            <div className='mb-5'>
              <h1 className='font-semibold'>ReactJS</h1>
              <div className="mt-2 bg-black rounded-full overflow-x-hidden">
                <div data-aos="slide-right"
                  data-aos-offset="200"
                  data-aos-easing="ease-in"
                  data-aos-duration="800"
                  className="w-9/12 bg-mainYellow py-1 rounded-full"></div>
              </div>
            </div>
            <div className='mb-5'>
              <h1 className='font-semibold'>Wordpress</h1>
              <div className="mt-2 bg-black rounded-full overflow-x-hidden">
                <div data-aos="slide-right"
                  data-aos-offset="200"
                  data-aos-easing="ease-in"
                  data-aos-duration="800"
                  className="w-1/2 bg-mainYellow py-1 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className='text-xl font-bold my-10 sm:mt-0'>Soft</h1>
          <div className='grid grid-cols-1'>
            <div className='mb-5'>
              <h1 className='font-semibold'>Critical thinking and problem solving</h1>
              <div className="mt-2 bg-black rounded-full overflow-x-hidden">
                <div data-aos="slide-right"
                  data-aos-offset="200"
                  data-aos-easing="ease-in"
                  data-aos-duration="800"
                  className="w-10/12 bg-mainYellow py-1 rounded-full"></div>
              </div>
            </div>
            <div className='mb-5'>
              <h1 className='font-semibold'>Continuous Improvement</h1>
              <div className="mt-2 bg-black rounded-full overflow-x-hidden">
                <div data-aos="slide-right"
                  data-aos-offset="200"
                  data-aos-easing="ease-in"
                  data-aos-duration="800"
                  className="w-full bg-mainYellow py-1 rounded-full"></div>
              </div>
            </div>
            <div className='mb-5'>
              <h1 className='font-semibold'>Communication Skills</h1>
              <div className="mt-2 bg-black rounded-full overflow-x-hidden">
                <div data-aos="slide-right"
                  data-aos-offset="200"
                  data-aos-easing="ease-in"
                  data-aos-duration="800"
                  className="w-10/12 bg-mainYellow py-1 rounded-full"></div>
              </div>
            </div>
            <div className='mb-5'>
              <h1 className='font-semibold'>Flexibility and Adaptability</h1>
              <div className="mt-2 bg-black rounded-full overflow-x-hidden">
                <div data-aos="slide-right"
                  data-aos-offset="200"
                  data-aos-easing="ease-in"
                  data-aos-duration="800"
                  className="w-9/12 bg-mainYellow py-1 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className='text-xl font-bold mt-20 mb-16'>Familiar with the following</h1>
      <div className='grid grid-cols-3 gap-5'>
        <a className='transition transform hover:scale-125 ease-in-out duration-1000 p-2 mx-auto'
          href='https://firebase.google.com/'
          target='_blank'
          rel='noreferrer noopener'
        >
          <img className='' src='../../images/firebase.svg' alt='firebase' />
          <h1 className='text-lg font-semibold'>Firebase</h1>
        </a>
        <a className='transition transform hover:scale-125 ease-in-out duration-1000 p-2 mx-auto'
          href='https://graphql.org/'
          target='_blank'
          rel='noreferrer noopener'
          >
          <img className='' src='../../images/graphql.svg' alt='graphql' />
          <h1 className='text-lg font-semibold'>GraphQL</h1>
        </a>
        <a className='transition transform hover:scale-125 ease-in-out duration-1000 p-2 mx-auto'
          href='https://tailwindcss.com/'
          target='_blank'
          rel='noreferrer noopener'
        >
          <img className='' src='../../images/tailwind.svg' alt='tailwind' />
          <h1 className='text-lg font-semibold'>TailwindCSS</h1>
        </a>
        <a className='transition transform hover:scale-125 ease-in-out duration-1000 p-2 mx-auto'
          href='https://getbootstrap.com/'
          target='_blank'
          rel='noreferrer noopener'
          >
          <img className='' src='../../images/bootstrap.svg' alt='bootstrap' />
          <h1 className='text-lg font-semibold'>Bootstrap</h1>
        </a>
        <a className='transition transform hover:scale-125 ease-in-out duration-1000 p-2 mx-auto'
          href='https://www.figma.com/'
          target='_blank'
          rel='noreferrer noopener'
        >
          <img className='' src='../../images/figma.svg' alt='figma' />
          <h1 className='text-lg font-semibold'>Figma</h1>
        </a>
        <a className='transition transform hover:scale-125 ease-in-out duration-1000 p-2 mx-auto'
          href='https://www.adobe.com/products/photoshop.html'
          target='_blank'
          rel='noreferrer noopener'
        >
          <img className='' src='../../images/adobe-photoshop.svg' alt='photoshop' />
          <h1 className='text-lg font-semibold'>Photoshop</h1>
        </a>
        <a className='transition transform hover:scale-125 ease-in-out duration-1000 p-2 mx-auto'
          href='https://nodejs.org/'
          target='_blank'
          rel='noreferrer noopener'
        >
          <img className='' src='../../images/node-js.svg' alt='nodeJS' />
          <h1 className='text-lg font-semibold'>NodeJS</h1>
        </a>
        <a className='transition transform hover:scale-125 ease-in-out duration-1000 p-2 mx-auto'
          href='https://www.mongodb.com/'
          target='_blank'
          rel='noreferrer noopener'
        >
          <img className='' src='../../images/mongodb.svg' alt='mongoDB' />
          <h1 className='text-lg font-semibold'>MongoDB</h1>
        </a>
        <a className='transition transform hover:scale-125 ease-in-out duration-1000 p-2 mx-auto'
          href='https://www.gatsbyjs.com/'
          target='_blank'
          rel='noreferrer noopener'
        >
          <img className='' src='../../images/gatsby.svg' alt='gatsby' />
          <h1 className='text-lg font-semibold'>Gatsby</h1>
        </a>
      </div>
    </div>
  </section>
)

export default Skills
