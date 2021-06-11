import './App.css'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Portofolio from './components/Portofolio'

function App() {
  return (
    <div className="App font-main">
      <Home/>
      <About/>
      <Skills/>
      <Portofolio/>
    </div>
  );
}

export default App;