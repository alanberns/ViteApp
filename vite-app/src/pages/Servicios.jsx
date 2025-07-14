import { Link } from "react-router-dom";

export default function Servicios() {
    const servicios = [
      {
        titulo: "Desarrollo Web",
        descripcion: "Creación de sitios modernos, responsivos y optimizados para SEO.",
        icono: "🖥️",
      },
      {
        titulo: "Apps Mobile",
        descripcion: "Aplicaciones nativas o híbridas para Android y iOS con UX profesional.",
        icono: "📱",
      },
      {
        titulo: "Consultoría IT",
        descripcion: "Te ayudamos a definir estrategias tecnológicas para escalar tu negocio.",
        icono: "🧠",
      },
      {
        titulo: "Automatización",
        descripcion: "Optimizamos tus procesos con herramientas de IA y scripts personalizados.",
        icono: "🤖",
      },
    ];
  
    return (
        <div className="w-full flex flex-col">
            <section className="py-20 bg-white text-gray-900">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-8">Nuestros Servicios</h2>
                    <p className="text-gray-700 text-lg mb-16 max-w-2xl mx-auto">
                        Potenciamos tu presencia digital con soluciones pensadas para escalar y destacar.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                        {servicios.map((servicio, index) => (
                            <div
                                key={index}
                                className="bg-indigo-50 rounded-xl shadow-md p-8 transition transform hover:-translate-y-2 hover:shadow-xl"
                            >
                                <div className="text-5xl mb-4">{servicio.icono}</div>
                                <h3 className="text-xl font-semibold text-indigo-700 mb-2">{servicio.titulo}</h3>
                                <p className="text-gray-600 text-sm">{servicio.descripcion}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-16 text-center">
                        <Link
                            to="/contacto"
                            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg shadow hover:bg-indigo-500 transition"
                        >
                            Contactanos
                        </Link>
                    </div>

                </div>
            </section>
        </div>
    );
  }
  