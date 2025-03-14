import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react'
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Commonplace from './pages/Commonplace';
import Projects from './pages/Projects';
import './App.css'

function App() {
  return (
    <Box p={4}>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/commonplace" element={<Commonplace />} />
      </Routes>
    </Box>
  )
}

export default App
