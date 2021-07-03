import React from 'react'

const Project = ({ title, image, site, description, live }) => {

  return (
    <section className='relative mb-10'>
      <h1 className='text-2xl font-semibold mb-5'>{title}</h1>
{ live ? 
  (
  <a href={site}
        target='_blank'
        rel='noreferrer noopener'
      >
        <img src={image} alt=''/>
      </a>
 ) : 
 (
          <img src={image} alt=''/>
          )
}
      <h2 className='text-lg mt-5'>{description}</h2>
    </section>
  )
}

export default Project
