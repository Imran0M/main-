import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile';
import Experience from './components/Experience/Experience';
import Pro from './components/pro/Pro';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Certification from './components/certification/Certification';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
     <Navbar  />
     <Profile />
     <Experience  />
     <Pro/>
     <Education />
     <Skills />
     <Certification/>
     <Footer/>
    </div>
  );
}

export default App;
