import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Solution from './components/Solution/Solution';
import Teams from './components/Teams/Teams';
import FirstAbout from './components/About/FirstAbout';
import Footer from './components/Footer/Footer';
import Copyright from './components/Copyright/Copyright';



function App() {
  return (
    <div className="App">
    <Header /> 
    <Hero />
    <FirstAbout />
    <Solution />
    <Teams />
    <Footer />
    <Copyright />
    </div>
  );
}


//  <img src="/images/sdhfmhgf.jpg" />
// src > images > banner.png 
// src > components > .....

// import { banner } from "../images/banner.png"
// import { logo } from "../images/logo.png"

// <img src={banner} alt="hvjh" />
// <img src={logo} alt="hvjh" />

export default App;
