export default function Fundacion() {

    return (
        <div className="w-full flex flex-col">
            <section className="relative min-h-screen text-white overflow-hidden">
                {/* Imagen de fondo */}
                <img
                    src="/img/estadio.jpg"
                    alt="Estadio fundacional"
                    className="absolute inset-0 w-full h-full object-cover opacity-30 -z-10"
                />

                {/* Degradado negro desde la izquierda */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent -z-10" />

                {/* Contenido textual sobre el fondo */}
                <div className="max-w-4xl px-6 py-20 md:py-32">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Fundación & Propósito</h2>
                    <p className="text-lg text-gray-100 max-w-2xl">
                        Creemos en construir desde los cimientos: ideas sólidas, valores reales y tecnología que transforma.
                    </p>
                </div>
            </section>

            <section className="relative w-full overflow-hidden">
                {/* Imagen con corte diagonal en desktop */}
                <div className="hidden md:block absolute inset-0 -z-10">
                    <img
                        src="/img/diagonal-banner.jpg"
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
                        src="/img/diagonal-banner.jpg"
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
