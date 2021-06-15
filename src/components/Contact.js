import React, { useState } from "react"

const Contact = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [nameErr, setNameErr] = useState(false)
  const [emailErr, setEmailErr] = useState(false)
  const [messageErr, setMessageErr] = useState(false)

  const validName = new RegExp('^[a-zA-Z ]+$')
  const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$')

  function validateForm() {
    if (!validName.test(name)) {
      setNameErr(true);
    }
    if (!validEmail.test(email)) {
      setEmailErr(true);
    }
    if (message.length < 10) {
      setMessageErr(true)
    }
  }

  return (
    <section id='contact' className='px-5 py-20'>
      <div className='w-full max-w-screen-lg mx-auto'>
        <h1 className='max-w-max bg-mainYellow px-3 mb-3 mx-auto'>Contact</h1>
        <h1 className='text-2xl font-bold mb-14'>Get in touch or write me an email!</h1>
        <div className='flex flex-col justify-center md:flex-row'>
          <div className='flex flex-col items-center mb-10 md:mr-20'>
            <img className='w-10' src='../../images/email.png' alt='' />
            <h1 className='text-xl text-gray-600 mt-2'>Email:</h1>
            <h1 className='text-lg font-semibold'>rubin.velcani@gmail.com</h1>
          </div>
          <div className='flex flex-col items-center mb-10'>
            <img className='w-10' src='../../images/phone.png' alt='' />
            <h1 className='text-xl text-gray-600 mt-2'>Phone:</h1>
            <h1 className='text-lg font-semibold'>+355694629009</h1>
          </div>
        </div>
        <form method="post" name="rubin" data-netlify="true" netlify-honeypot="bot-field">
          <div className='w-full max-w-screen-lg flex flex-col items-center bg-lightGray shadow-md text-xs text-gray mx-auto'>
            <div className='w-4/5 max-w-screen-sm flex flex-col text-left text-formGray mt-10 mb-16 mx-auto'>
              <input type="hidden" name="form-name" value="rubin" />
              <label className='text-lg mr-auto mb-5'>Full Name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} type='name' name='fullName' className='ring-1 ring-lightGray focus:ring-mainYellow mb-4 py-4 px-4 outline-none focus-within:ring-blue-400' placeholder='Name' />
              {nameErr && <h3 className='text-red-400 pb-1 mb-10'>Please type a valid name</h3>}
              <label className='text-lg mr-auto mb-5'>Email Address</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' name='email' className='ring-1 ring-lightGray focus:ring-mainYellow mb-8 py-4 px-4 outline-none focus-within:ring-blue-400' placeholder='Email' />
              {emailErr && <h3 className='text-red-400 pb-1 mb-10'>Please type a valid email address</h3>}
              <label className='text-lg mr-auto mb-5'>Your Message</label>
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} name='message' className='ring-1 ring-lightGray focus:ring-mainYellow mb-5 py-3 px-6 outline-none focus-within:ring-blue-400' placeholder='Your message...' />
              {messageErr && <h3 className='text-red-400 mb-10'>Please type a valid message</h3>}
              <div className='flex flex-row justify-around mt-10'>
                <button onClick={validateForm} className='w-1/2  bg-mainYellow text-black text-lg ring-1 ring-lightGray focus:ring-mainYellow mx-auto p-3 cursor-pointer outline-none focus-within:ring-blue-400 md:w-5/12'>Submit </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact