import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Commonplace from './pages/Commonplace';
import Projects from './pages/Projects';
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/commonplace" element={<Commonplace />} />
      </Routes>
    </>
  )
}

export default App
