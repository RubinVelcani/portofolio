import React from 'react'

const Skills = () => (
  <section className='bg-lightGray px-5 py-20'>
    <h1 className='max-w-max bg-mainYellow px-3 mb-3 mx-auto'>Skills</h1>
    <h1 className='text-2xl font-bold mb-20'>Get To Know My Skills</h1>
    <h1 className='text-xl font-bold mb-10'>Technical</h1>
    <div className='grid grid-cols-1'>
      <div className='mb-5'>
        <h1 className='font-semibold'>HTML5/CSS3</h1>
        <div class="mt-2 bg-black rounded-full">
          <div class="w-11/12 mt-2 bg-mainYellow py-1 rounded-full"></div>
        </div>
      </div>
      <div className='mb-5'>
        <h1 className='font-semibold'>Javascript</h1>
        <div class="mt-2 bg-black rounded-full">
          <div class="w-2/3 mt-2 bg-mainYellow py-1 rounded-full"></div>
        </div>
      </div>
      <div className='mb-5'>
        <h1 className='font-semibold'>ReactJS</h1>
        <div class="mt-2 bg-black rounded-full">
          <div class="w-9/12 mt-2 bg-mainYellow py-1 rounded-full"></div>
        </div>
      </div>
      <div className='mb-5'>
        <h1 className='font-semibold'>Wordpress</h1>
        <div class="mt-2 bg-black rounded-full">
          <div class="w-1/2 mt-2 bg-mainYellow py-1 rounded-full"></div>
        </div>
      </div>
    </div>
    <h1 className='text-xl font-bold my-10'>Soft</h1>
    <div className='grid grid-cols-1'>
      <div className='mb-5'>
        <h1 className='font-semibold'>Critical thinking and problem solving</h1>
        <div class="mt-2 bg-black rounded-full">
          <div class="w-10/12 mt-2 bg-mainYellow py-1 rounded-full"></div>
        </div>
      </div>
      <div className='mb-5'>
        <h1 className='font-semibold'>Continuous Improvement</h1>
        <div class="mt-2 bg-black rounded-full">
          <div class="w-full mt-2 bg-mainYellow py-1 rounded-full"></div>
        </div>
      </div>
      <div className='mb-5'>
        <h1 className='font-semibold'>Communication Skills</h1>
        <div class="mt-2 bg-black rounded-full">
          <div class="w-10/12 mt-2 bg-mainYellow py-1 rounded-full"></div>
        </div>
      </div>
      <div className='mb-5'>
        <h1 className='font-semibold'>Flexibility and Adaptability</h1>
        <div class="mt-2 bg-black rounded-full">
          <div class="w-9/12 mt-2 bg-mainYellow py-1 rounded-full"></div>
        </div>
      </div>
    </div>
    <h1 className='text-xl font-bold mt-20 mb-16'>Familiar with the following</h1>
    <div className='grid grid-cols-3 gap-5'>
      <a className='p-2 mx-auto' href='https://firebase.google.com/'>
        <img className='' src='../../images/firebase.svg' alt='firebase' />
      </a>
      <a className='p-2 mx-auto' href='https://graphql.org/'>
        <img className='' src='../../images/graphql.svg' alt='graphql' />
      </a>
      <a className='p-2 mx-auto' href='https://tailwindcss.com/'>
        <img className='' src='../../images/tailwind.svg' alt='tailwind' />
      </a>
      <a className='p-2 mx-auto' href='https://getbootstrap.com/'>
        <img className='' src='../../images/bootstrap.svg' alt='bootstrap' />
      </a>
      <a className='p-2 mx-auto' href='https://www.figma.com/'>
        <img className='' src='../../images/figma.svg' alt='figma' />
      </a>
      <a className='p-2 mx-auto' href='https://www.adobe.com/products/photoshop.html'>
        <img className='' src='../../images/adobe-photoshop.svg' alt='photoshop' />
      </a>
      <a className='p-2 mx-auto' href='https://nodejs.org/'>
        <img className='' src='../../images/node-js.svg' alt='nodeJS' />
      </a>
      <a className='p-2 mx-auto' href='https://www.mongodb.com/'>
        <img className='' src='../../images/mongodb.svg' alt='mongoDB' />
      </a>
      <a className='p-2 mx-auto' href='https://www.gatsbyjs.com/'>
        <img className='' src='../../images/gatsby.svg' alt='gatsby' />
      </a>
    </div>
  </section>
)

export default Skills