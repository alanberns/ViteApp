import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Servicios from './pages/Servicios';
import ScrollToTop from "./components/ScrollToTop";
import Oportunidades from './pages/Oportunidades';
import Fundacion from './pages/Fundacion';
import ChatBotWidget from './components/ChatBotWidget';

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white">
        <Header />

        <main className="w-full flex-grow pt-16 min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/oportunidades" element={<Oportunidades />} />
            <Route path="/fundacion" element={<Fundacion />} />
          </Routes>
        </main>

        <Footer />
        {/* Botón flotante del chatbot */}
        <ChatBotWidget />
      </div>
    </BrowserRouter>
  )
}

export default App
