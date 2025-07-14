import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      {/* Sección de bienvenida */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-white to-indigo-200 px-6 md:px-20 md:py-4 text-gray-900 gap-10 md:gap-32">

        {/* Logo grande lado izquierdo */}
        <div className="flex flex-col items-center md:items-center text-center">
          <div className="text-7xl md:text-8xl font-extrabold tracking-tight text-indigo-600">&lt;/&gt;</div>
          <div className="text-5xl md:text-6xl font-semibold text-indigo-600">AB</div>
        </div>

        {/* Texto lado derecho */}
        <div className="max-w-md text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-indigo-900">Soluciones Digitales Éticas</h1>
          <p className="text-base md:text-lg text-gray-800 mb-6">
            Desarrollo con propósito, elegancia y tecnología que transforma.
          </p>
          <button className="px-6 py-2 rounded bg-indigo-700 text-white font-medium hover:bg-indigo-800 transition">
            Conocer más
          </button>
        </div>

      </section>


      {/* Sección 2: Información / Destacados */}
      <section className="py-16 bg-indigo-50 px-6 text-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-indigo-700 mb-6">¿Qué hacemos?</h2>
          <p className="text-lg">
            Creamos herramientas centradas en las personas, respetando su privacidad y fomentando el desarrollo sostenible de la tecnología.
          </p>
        </div>
      </section>

      {/* Sección : Pilares */}
      <section className="py-16 px-6 bg-indigo-50">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-semibold text-indigo-700">Nuestros pilares</h2>
          <p className="text-gray-600 mt-4">Conocé las áreas que impulsan nuestra propuesta digital.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-xl p-6 transition hover:shadow-lg">
            <h3 className="text-xl font-bold text-indigo-600 mb-2">Innovación Ética</h3>
            <p className="text-gray-700 text-sm">
              Diseñamos pensando en el usuario, priorizando privacidad y responsabilidad tecnológica.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-xl p-6 transition hover:shadow-lg">
            <h3 className="text-xl font-bold text-indigo-600 mb-2">Colaboración</h3>
            <p className="text-gray-700 text-sm">
              Valoramos el trabajo en equipo y el diálogo interdisciplinario para soluciones sostenibles.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-xl p-6 transition hover:shadow-lg">
            <h3 className="text-xl font-bold text-indigo-600 mb-2">Transparencia</h3>
            <p className="text-gray-700 text-sm">
              Apostamos por la claridad en nuestros procesos y el respeto por los derechos digitales.
            </p>
          </div>
        </div>
      </section>

      {/* Sección de estadísticas */}
      <section className="bg-white py-16 px-6 md:px-20 text-gray-900">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-4">Logros que nos respaldan</h2>
          <p className="text-gray-700 text-base md:text-lg">
            Años de dedicación, innovación y compromiso nos han llevado hasta acá.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          <div>
            <p className="text-4xl font-bold text-indigo-600">+150</p>
            <p className="text-sm text-gray-600">Clientes felices</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-indigo-600">10</p>
            <p className="text-sm text-gray-600">Años de experiencia</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-indigo-600">25</p>
            <p className="text-sm text-gray-600">Proyectos completados</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-indigo-600">100%</p>
            <p className="text-sm text-gray-600">Compromiso ético</p>
          </div>
        </div>
      </section>


      {/* Sección 3: CTA o Testimonios (placeholder) */}
      <section className="py-16 bg-white px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-indigo-700 mb-4">Tu experiencia empieza acá</h2>
          <p className="text-lg text-gray-600 mb-6">Explorá nuestros servicios o contactanos para colaborar.</p>
          <Link to="/servicios">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-500 transition">
              Empezar ahora
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
