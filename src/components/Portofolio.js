import React from 'react'
import Project from './Project'

const Portofolio = () => {

  const sites = [
    {
      title: 'Socios',
      image: '../../images/socios.png',
      site: 'https://socios.netlify.app/',
      description: 'A full stack Twitter clone built with React, MongoDB, GraphQL '
    },
    {
      title: 'Manus',
      image: '../../images/manus.png',
      site: 'https://manus-app.netlify.app/',
      description: 'App for tradesmen looking for work, built with React and TailwindCSS'
    },
    {
      title: 'Zengrowth',
      image: '../../images/zengrowth.png',
      site: 'https://zengrowth-app.netlify.app',
      description: 'Landing page and contact form'
    },
    {
      title: 'Chatty',
      image: '../../images/chatty.png',
      site: 'https://chatty-node.netlify.app',
      description: 'Live chat application built with React, NodeJS and Socket.io'
    },
    {
      title: 'mobileNBA',
      image: '../../images/mobileNBA.png',
      site: 'https://nbafullstack-860f8.web.app/',
      description: 'NBA based fanpage where you can write articles and add videos to the feed. Mobile only design.'
    },
    {
      title: 'Embroidery',
      image: '../../images/embroidery.png',
      site: 'https://embroidery-app.netlify.app',
      description: 'Small business website with an active contact form'
    },
    {
      title: 'PromoBazaar',
      image: '../../images/bazaar.png',
      site: '',
      description: 'E-commerce based on artists selling their designs and artworks (Not live)'
    },
    {
      title: 'ToysCenter',
      image: '../../images/store.png',
      site: '',
      description: 'E-commerce (Not Live)'
    }
  ]

  return (
    <section id='portofolio' className='bg-mediumGray text-lightGray py-20 px-5'>
      <div className='w-full max-w-screen-lg mx-auto'>
        <h1 className='max-w-max bg-mainYellow text-black px-3 mb-3 mx-auto'>Portofolio</h1>
        <h1 className='text-2xl font-bold mb-20'>Get to know my Work</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-3'>
          {sites.map((site, i) => {
            return (<Project title={site.title} image={site.image} site={site.site} description={site.description} key={i}/>)
          })}
        </div>
      </div>
    </section>
  )
}

export default Portofolio