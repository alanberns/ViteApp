import { Link } from "react-router-dom";
import CountUp from 'react-countup';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Home() {
  const proyectos = [
    {
      titulo: "Plataforma de E-learning",
      descripcion: "Sistema interactivo de formación online con analítica integrada para instituciones educativas.",
      imagen: "https://via.placeholder.com/300x200?text=E-learning",
    },
    {
      titulo: "App de Gestión Médica",
      descripcion: "Aplicación móvil para turnos, historia clínica y seguimiento remoto de pacientes.",
      imagen: "https://via.placeholder.com/300x200?text=Gestión+Médica",
    },
    {
      titulo: "Sistema de Logística Inteligente",
      descripcion: "Dashboard web para trazabilidad y optimización de rutas logísticas en tiempo real.",
      imagen: "https://via.placeholder.com/300x200?text=Logística",
    },
    {
      titulo: "Portal Financiero Ético",
      descripcion: "Plataforma que fomenta la transparencia financiera con reportes accesibles y visuales.",
      imagen: "https://via.placeholder.com/300x200?text=Finanzas",
    },
  ];

  return (
    <div className="w-full flex flex-col">
      {/* Sección de bienvenida */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-white to-indigo-200 px-6 md:px-20 md:py-4 text-gray-900 gap-10 md:gap-32">

        {/* Logo grande lado izquierdo */}
        <div className="flex flex-col items-center md:items-center text-center">
          <div className="text-7xl md:text-8xl font-extrabold tracking-tight text-indigo-600">&lt;/&gt;</div>
          <div className="text-5xl md:text-6xl font-semibold text-indigo-600">A-B</div>
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
      <section className="py-16 bg-white px-6 text-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-indigo-700 mb-6">¿Qué hacemos?</h2>
          <p className="text-lg">
            Creamos herramientas centradas en las personas, respetando su privacidad y fomentando el desarrollo sostenible de la tecnología.
          </p>
        </div>
      </section>

      {/* Sección : Pilares */}
      <section className="py-20 px-6 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo-700 mb-4">Nuestros pilares</h2>
            <p className="text-gray-600 mt-4 text-lg">Conocé las áreas que impulsan nuestra propuesta digital.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col items-center text-center min-h-[280px] transition hover:shadow-xl">
              <div className="text-5xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-indigo-600 mb-3">Innovación Ética</h3>
              <p className="text-gray-700 text-base">
                Diseñamos pensando en el usuario, priorizando privacidad y responsabilidad tecnológica.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col items-center text-center min-h-[280px] transition hover:shadow-xl">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-indigo-600 mb-3">Colaboración</h3>
              <p className="text-gray-700 text-base">
                Valoramos el trabajo en equipo y el diálogo interdisciplinario para soluciones sostenibles.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col items-center text-center min-h-[280px] transition hover:shadow-xl">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-indigo-600 mb-3">Transparencia</h3>
              <p className="text-gray-700 text-base">
                Apostamos por la claridad en nuestros procesos y el respeto por los derechos digitales.
              </p>
            </div>
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center max-w-7xl mx-auto px-6">
          <div>
            <p className="text-4xl font-bold text-indigo-600">
              <CountUp start={0} end={250} duration={2.5} enableScrollSpy scrollSpyOnce />
            </p>
            <p className="text-sm text-gray-600">Clientes felices</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-indigo-600">
              <CountUp start={0} end={12} duration={2.5} enableScrollSpy scrollSpyOnce />
            </p>
            <p className="text-sm text-gray-600">Años de experiencia</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-indigo-600">
              <CountUp start={0} end={60} duration={2.5} enableScrollSpy scrollSpyOnce />
            </p>
            <p className="text-sm text-gray-600">Proyectos completados</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-indigo-600">
              <CountUp start={0} end={100} duration={2.5} enableScrollSpy scrollSpyOnce />%
            </p>
            <p className="text-sm text-gray-600">Compromiso ético</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-6 md:px-20 text-gray-900">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h3 className="text-2xl font-bold text-indigo-700 mb-4">Opiniones que nos impulsan</h3>
          <p className="text-gray-700 text-base md:text-lg">
            Nada habla mejor de nuestro compromiso que las palabras de quienes confiaron en nosotros.
          </p>
        </div>

        <div className="space-y-10 max-w-3xl mx-auto">
          <blockquote className="border-l-4 border-indigo-500 pl-4 text-gray-800 italic">
            “Trabajar con ellos fue una decisión acertada. No solo cumplieron los plazos, sino que superaron nuestras expectativas.”
            <footer className="mt-2 text-gray-500 text-sm">— Martina Gómez, Directora de operaciones</footer>
          </blockquote>

          <blockquote className="border-l-4 border-indigo-500 pl-4 text-gray-800 italic">
            “La atención al detalle y el compromiso con la calidad técnica es lo que los distingue. Un equipo excepcional.”
            <footer className="mt-2 text-gray-500 text-sm">— Tomás Ferrer, CTO en Nova</footer>
          </blockquote>

          <blockquote className="border-l-4 border-indigo-500 pl-4 text-gray-800 italic">
            “Sentí que mis ideas fueron escuchadas y traducidas en soluciones reales. El proceso fue claro, fluido y profesional.”
            <footer className="mt-2 text-gray-500 text-sm">— Carla Pinto, Emprendedora</footer>
          </blockquote>
        </div>
      </section>

      {/* Sección : Proyectos destacados */}


      {/* Sección 3: Accion, ir a servicios */}
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
