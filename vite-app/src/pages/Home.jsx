export default function Home() {
  return (
    <main className="w-full">
      {/* Sección de bienvenida */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-white px-6 text-center">
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
    </main>
  );
}
