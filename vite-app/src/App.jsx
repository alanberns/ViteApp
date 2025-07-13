import { useState } from 'react'

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header/>

      <main className="w-full">
        {/* Sección de bienvenida */}
        <section className="min-h-screen py-16 flex flex-col bg-white px-10 items-start text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-600 mb-4">Bienvenido a Mi Proyecto</h1>
          <p className="text-gray-700 text-lg max-w-xl">
            Descubrí soluciones digitales éticas y eficientes, construidas con pasión y propósito.
          </p>
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

        {/* Sección 3: CTA o Testimonios (placeholder) */}
        <section className="py-16 bg-white px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-indigo-700 mb-4">Tu experiencia empieza acá</h2>
            <p className="text-lg text-gray-600 mb-6">Explorá nuestros servicios o contactanos para colaborar.</p>
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-500 transition">
              Empezar ahora
            </button>
          </div>
        </section>

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
                                                                                                                                                                                                                                                                                                                                                                  

      </main>
      
      <Footer/>
    </div>
  )
}

export default App
