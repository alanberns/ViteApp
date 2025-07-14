import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Servicios from './pages/Servicios';
import Contacto from './pages/Contacto';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-white">
        <Header />

        <main className="w-full flex-grow py-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
