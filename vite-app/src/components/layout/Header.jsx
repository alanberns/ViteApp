import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-indigo-600 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/">
          <h1 className="text-2xl font-bold text-white">Mi Proyecto</h1>
        </Link>

        {/* Botón hamburguesa mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none text-2xl"
          >
            {isOpen ? '✖' : '☰'}
          </button>
        </div>

        {/* Menú desktop */}
        <nav className="space-x-6 hidden md:flex">
          <Link to="/" className="text-white hover:text-indigo-200 transition-colors">
            Inicio
          </Link>
          <Link to="/servicios" className="text-white hover:text-indigo-200 transition-colors">
            Servicios
          </Link>
          <Link to="/oportunidades" className="text-white hover:text-indigo-200 transition-colors">
            Oportunidades
          </Link>
          <Link to="/fundacion" className="text-white hover:text-indigo-200 transition-colors">
            Fundacion
          </Link>
        </nav>
      </div>

      {/* Menú móvil con transición */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        } md:hidden px-4 bg-indigo-600`}
      >
        <nav className="py-4 flex flex-col space-y-3">
        <Link to="/" onClick={() => setIsOpen(false)} className="text-white hover:text-indigo-200 transition-colors">
            Inicio
          </Link>
          <Link to="/servicios" onClick={() => setIsOpen(false)} className="text-white hover:text-indigo-200 transition-colors">
            Servicios
          </Link>
          <Link to="/oportunidades" onClick={() => setIsOpen(false)} className="text-white hover:text-indigo-200 transition-colors">
            Oportunidades
          </Link>
          <Link to="/fundacion" onClick={() => setIsOpen(false)} className="text-white hover:text-indigo-200 transition-colors">
            Fundacion
          </Link>
        </nav>
      </div>
    </header>
  );
}
