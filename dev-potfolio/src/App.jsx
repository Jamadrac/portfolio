import './App.css'
import Intro from './components/Intro'
import Cards from './components/Cards'
import Timeline from './components/Timeline'
import Footer from './components/Footer'
import Contact from './components/Contact'
function App() {
    return ( 
      <div className='App'>
        <div className='max-w-5x1 w-11/12'>
        <Intro />
        <Cards/>
        <Timeline/>
        <Contact/>
        <Footer/>
        </div>
      </div>

  )
}

export default App
