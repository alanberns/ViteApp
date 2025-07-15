export default function Oportunidades() {
    const todasLasOportunidades = [
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
        },
        {
          id: 4,
          titulo: "UI/UX Designer Jr.",
          descripcion: "Diseñá experiencias intuitivas y humanas, desde el prototipo hasta la interfaz final.",
          tipo: "Remoto - Freelance"
        },
        {
          id: 5,
          titulo: "Analista QA Jr.",
          descripcion: "Asegurá la calidad en proyectos digitales aplicando pruebas manuales y automatizadas.",
          tipo: "Presencial - Córdoba"
        }
      ];
      
    return (
        <div className="w-full flex flex-col">
            <section className="py-20 bg-indigo-50 text-gray-900 min-h-screen">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-6 text-center py-6">Trabajá con nosotros</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {todasLasOportunidades.map((oportunidad) => (
                            <div
                                key={oportunidad.id}
                                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
                            >
                                <h3 className="text-xl font-semibold text-indigo-600 mb-2">{oportunidad.titulo}</h3>
                                <p className="text-gray-700 mb-4">{oportunidad.descripcion}</p>
                                <span className="text-sm font-medium text-gray-500">{oportunidad.tipo}</span>
                            </div>
                        ))}
                    </div>
                    <button className="mt-12 px-6 py-3 rounded bg-indigo-700 text-white font-semibold hover:bg-indigo-800 transition">
                        Postulate
                    </button>
                </div>
            </section>
        </div>
    );
}
