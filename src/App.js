import React, { useState } from 'react'
import './App.css'
import Menu from './components/Menu'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Portofolio from './components/Portofolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import TopArrow from './components/TopArrow'

function App() {

  const [ menu, setMenu ] = useState(false)

  function toggleMenu() {
    setMenu(!menu)
  }

    return (
    <div className="App font-main">
      <Menu menu={menu} toggleMenu={toggleMenu}/>
      <Home toggleMenu={toggleMenu}/>
      <About/>
      <Skills/>
      <Portofolio/>
      <Contact/>
      <Footer/>
      <TopArrow/>
    </div>
  );
}

export default App;