import './App.css'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import LinkedInLogo from './assets/linkedIn.svg'
import GithubLogo from './assets/github.svg'
import TwitterLogo from './assets/twitter.svg'

function App() {

  return (
    <div>
      <header>
        <h4>HS</h4>
        <div className='headers'>
          <a href="#for-home">HOME</a>
          <a href="#for-about">ABOUT</a>
          <a href="#for-projects">PROJECTS</a>
          <a href="#for-contact">CONTACT</a>
        </div>
      </header>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <footer>
        <div>
          <a href="https://www.linkedin.com/in/tamilah/"><img src={LinkedInLogo} alt="" /></a>
          <a href="https://github.com/DrTamTam"><img src={GithubLogo} alt="" /></a>
          <a href=""><img src={TwitterLogo} alt="" /></a>
        </div>
        <p>&copy; Halimat Shaibu</p>
      </footer>
    </div>
  )
}

export default App
