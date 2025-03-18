import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import TouchOfWisdom from './pages/TouchOfWisdom';
import './App.css'

function App() {
  return (
    <>
      <Header />
      <div className="mt-24 max-w-7xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/touch-of-wisdom" element={<TouchOfWisdom />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
