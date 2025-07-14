import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Servicios from './pages/Servicios';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-white">
        <Header />

        <main className="w-full mt-15 flex-grow py-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Servicios />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
