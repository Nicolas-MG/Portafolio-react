import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Timeline from './components/Timeline';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyectos" element={[<Projects />,<Skills/> ]} />
        <Route path="/sobre-mi" element={[<About />, <Timeline/>]} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
  );
}
export default App;
