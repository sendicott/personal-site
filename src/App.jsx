import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Commonplace from './pages/Commonplace';
import Projects from './pages/Projects';
import './App.css'

function App() {
  return (
    <>
      <Header />
      <div className="mt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/commonplace" element={<Commonplace />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
