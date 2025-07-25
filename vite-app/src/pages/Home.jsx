import { Link } from "react-router-dom";
import CountUp from 'react-countup';
import { motion } from "framer-motion";
import { BASE_URL } from '../utils/constants';

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

  const oportunidadesDestacadas = [
    {
      id: 1,
      titulo: "Desarrollador/a Frontend Jr.",
      descripcion: "Sumate al equipo para construir interfaces atractivas y accesibles usando React y Tailwind.",
      tipo: "Remoto - Medio tiempo"
    },
    {
      id: 2,
      titulo: "Asistente Técnico de Proyectos",
      descripcion: "Apoyá iniciativas digitales desde la documentación hasta el testing en ambientes colaborativos.",
      tipo: "Presencial - Buenos Aires"
    },
    {
      id: 3,
      titulo: "Trainee Backend Developer",
      descripcion: "Aprendé y aplicá buenas prácticas en APIs y bases de datos con Node.js y PostgreSQL.",
      tipo: "Híbrido - Jornada completa"
    }
  ];


  return (
    <div className="w-full flex flex-col">
      {/* Sección de bienvenida */}
      <section className="min-h-screen flex flex-col md:flex-row md:items-center md:justify-center px-6 md:px-20 py-10 text-gray-900 gap-10 md:gap-32">
        <img
          src={`${BASE_URL}/img/inicio.avif`}
          alt="Escritorio con una notebook"
          className="absolute inset-0 w-full h-full object-cover blur-sm opacity-40"
        />
        {/* Logo grande lado izquierdo */}
        <div className="flex flex-col items-center md:items-center text-center animate-fade-in">
          <div className="bg-white bg-opacity-20 rounded px-4 py-2 shadow-md">
            <div className="text-7xl font-extrabold tracking-tight text-indigo-600 drop-shadow-lg">&lt;/&gt;</div>
            <div className="text-5xl font-semibold text-indigo-600 drop-shadow-lg">A-B</div>
          </div>
          <p className="text-sm text-indigo-700 mt-4 italic">Tecnología con propósito y ética real</p>
        </div>

        {/* Texto lado derecho */}
        <div className="max-w-md text-center md:text-left drop-shadow-lg animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-indigo-900">Soluciones Digitales Éticas</h1>
          <p className="text-base md:text-lg text-gray-800 mb-6">
            Desarrollo con propósito, elegancia y tecnología que transforma.
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-indigo-600 bg-indigo-200 bg-opacity-40 px-4 py-2 rounded shadow-md">
            <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
            </svg>
            <span className="text-gray-900">Premio a la Innovación Ética 2025</span>
          </div>
        </div>
      </section>

      {/* Sección Que hacemos */}
      <section className="relative bg-white text-gray-900 py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Imagen con degradado bilateral solo en md+ */}
          <div className="relative h-80 overflow-hidden rounded-lg hidden md:block">
            <img
              src={`${BASE_URL}/img/hacemos.avif`}
              alt="Persona trabajando"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white via-transparent to-transparent" />
            <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white via-transparent to-transparent" />
          </div>
          {/* Imagen simplificada en mobile */}
          <div className="relative h-64 overflow-hidden rounded-lg md:hidden">
            <img
              src={`${BASE_URL}/img/hacemos.avif`}
              alt="Persona trabajando"
              className="w-full h-full object-cover opacity-80"
            />
          </div>

          {/* Texto principal */}
          <div className="relative z-10">
            <h2 className="text-3xl font-semibold text-indigo-700 mb-6">¿Qué hacemos?</h2>
            <p className="text-lg text-gray-800">
              Creamos herramientas centradas en las personas, respetando su privacidad y fomentando el desarrollo sostenible de la tecnología.
            </p>
          </div>
        </div>
      </section>


      {/* Sección de pilares */}
      <section className="py-20 px-6 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo-700 mb-4">Nuestros pilares</h2>
            <p className="text-gray-600 mt-4 text-lg">Conocé las áreas que impulsan nuestra propuesta digital.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="bg-white shadow-lg rounded-xl p-8 flex flex-col items-center text-center min-h-[280px] transition transform duration-1000 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="text-5xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-indigo-600 mb-3">Innovación Ética</h3>
              <p className="text-gray-700 text-base">
                Diseñamos pensando en el usuario, priorizando privacidad y responsabilidad tecnológica.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="bg-white shadow-lg rounded-xl p-8 flex flex-col items-center text-center min-h-[280px] transition transform duration-1000 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-indigo-600 mb-3">Colaboración</h3>
              <p className="text-gray-700 text-base">
                Valoramos el trabajo en equipo y el diálogo interdisciplinario para soluciones sostenibles.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="bg-white shadow-lg rounded-xl p-8 flex flex-col items-center text-center min-h-[280px] transition transform duration-1000 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-indigo-600 mb-3">Transparencia</h3>
              <p className="text-gray-700 text-base">
                Apostamos por la claridad en nuestros procesos y el respeto por los derechos digitales.
              </p>
            </motion.div>
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

      {/* Sección 3: Accion, ir a servicios */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-20 py-20 overflow-hidden text-white">
        {/* Imagen de fondo */}
        <img
          src={`${BASE_URL}/img/union.avif`}
          alt="Fondo decorativo"
          className="absolute inset-0 w-full h-full object-cover opacity-40 z-0"
        />

        {/* Capa oscura para contraste */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

        {/* Contenido centrado encima */}
        <div className="relative z-20 max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-block text-sm text-indigo-300 uppercase tracking-widest">
            🚀 Listos para dar el siguiente paso
          </span>
          <h2 className="text-5xl font-bold text-white">Tu experiencia empieza acá</h2>
          <p className="text-lg text-indigo-100">
            Explorá nuestros servicios o contactanos para colaborar.
          </p>
          <p className="text-md text-indigo-200">
            Diseño personalizado, asesoramiento ético, resultados reales.
          </p>
          <Link to="/servicios">
            <button className="bg-white text-indigo-700 font-semibold px-6 py-3 mt-8 rounded-lg shadow hover:bg-gray-100 transition">
              Empezar ahora
            </button>
          </Link>
        </div>
      </section>



      {/* Sección : Trabajo */}
      <section className="relative bg-white text-gray-900 py-20 px-6 overflow-hidden" id="oportunidades">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Texto principal a la izquierda */}
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-indigo-700 mb-4">Sumate al equipo</h2>
            <p className="text-lg text-gray-800">
              Siempre estamos en la búsqueda de potenciar nuevos talentos. Si compartís nuestra visión, queremos conocerte.
            </p>
          </div>

          {/* Imagen con degradado bilateral solo en md+ */}
          <div className="relative h-80 overflow-hidden rounded-lg hidden md:block">
            <img
              src={`${BASE_URL}/img/sumate.jpg`}
              alt="Persona trabajando"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white via-transparent to-transparent" />
            <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white via-transparent to-transparent" />
          </div>
          {/* Imagen simplificada en mobile */}
          <div className="relative h-64 overflow-hidden rounded-lg md:hidden">
            <img
              src={`${BASE_URL}/img/sumate.jpg`}
              alt="Persona trabajando"
              className="w-full h-full object-cover opacity-80"
            />
          </div>
        </div>
        {/* Cards de oportunidades */}
        <div className="max-w-7xl mx-auto mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {oportunidadesDestacadas.map((oportunidad) => (
              <div
                key={oportunidad.id}
                className="bg-indigo-50 rounded-lg shadow-md p-6 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">{oportunidad.titulo}</h3>
                <p className="text-gray-700 mb-4">{oportunidad.descripcion}</p>
                <span className="text-sm font-medium text-gray-500">{oportunidad.tipo}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Botón */}
        <div className="text-center mt-10">
          <Link to="/oportunidades">
            <button className="px-6 py-2 rounded bg-indigo-700 text-white font-semibold hover:bg-indigo-800 transition">
              Ver todas
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
}
