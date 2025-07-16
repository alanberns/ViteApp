export default function Fundacion() {

    return (
        <div className="w-full flex flex-col">
            <section className="relative min-h-screen overflow-hidden">
                {/* Imagen de fondo */}

                {/* Capa de oscurecimiento total */}
                <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

                {/* Degradado negro desde la izquierda (opcional si lo querés mantener) */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent z-10" />

                <img
                    src="/img/unlp.jpg"
                    alt="Estadio fundacional"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />

                {/* Contenido textual sobre el fondo */}
                <div className="relative z-20 max-w-4xl pl-16 py-20 md:py-32 text-white">
                    <h2 className="text-5xl md:text-8xl font-bold mb-6">Fundación & Propósito</h2>
                    <p className="text-xl max-w-2xl text-gray-100 mt-10">
                        Creemos en construir desde los cimientos: ideas sólidas, valores reales y tecnología que transforma.
                    </p>
                    <p className="text-xl max-w-2xl text-gray-100 mt-10">
                    En cada paso que damos, reafirmamos nuestro compromiso con una visión que trasciende lo técnico: buscamos generar un impacto positivo, duradero y ético en cada proyecto que emprendemos. No solo desarrollamos soluciones, sino también vínculos que transforman contextos.
                    </p>
                    <button className="bg-white text-indigo-700 font-semibold mt-10 px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
  Conocé más
</button>

                </div>
            </section>

            <section className="relative w-full overflow-hidden">
                {/* Imagen con corte diagonal en desktop */}
                <div className="hidden md:block absolute inset-0 -z-10">
                    <img
                        src="/img/union.jpg"
                        alt="Banner visual"
                        className="w-full h-full object-cover"
                        style={{
                            clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)',
                        }}
                    />
                </div>

                {/* Imagen normal en mobile */}
                <div className="md:hidden">
                    <img
                        src="/img/union.jpg"
                        alt="Banner visual"
                        className="w-full h-64 object-cover"
                    />
                </div>

                {/* Contenido sobre fondo */}
                <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center text-white">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Unite a nuestra misión</h2>
                    <p className="text-lg text-gray-100 max-w-2xl mx-auto">
                        Tecnología con propósito, impacto real y valores que nos definen.
                    </p>
                </div>
            </section>
        </div>
    );
}
