export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-indigo-600 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Mi Proyecto</h1>
        <nav className="space-x-6 hidden md:flex">
          <a href="#" className="text-white hover:text-indigo-200 transition-colors duration-300">Inicio</a>
          <a href="#" className="text-white hover:text-indigo-200 transition-colors duration-300">Servicios</a>
          <a href="#" className="text-white hover:text-indigo-200 transition-colors duration-300">Contacto</a>
        </nav>
      </div>
    </header>
  );
}
