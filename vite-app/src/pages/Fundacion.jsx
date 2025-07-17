import { BASE_URL } from '../utils/constants';

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
                    src={`${BASE_URL}/img/unlp.jpg`}
                    alt="Estadio fundacional"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />

                {/* Contenido textual sobre el fondo */}
                <div className="relative z-20 max-w-4xl py-20 px-2 md:py-32 md:pl-16  text-white">
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

            <section className="w-full">
                {/* Rectángulo de color debajo de la imagen diagonal */}
                <div className="bg-white w-full pt-20 pb-28 md:pt-32 md:pb-40 relative z-10 text-center text-white">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-4xl md:text-6xl font-bold text-indigo-600 mb-6">Unite a nuestra misión</h2>
                        <p className="text-lg text-indigo-400 max-w-2xl mx-auto">
                            Tecnología con propósito, impacto real y valores que nos definen.
                        </p>

                        <button className="mt-10 bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
                            Sumate
                        </button>
                    </div>
                </div>
            </section>


            <section className="relative w-full h-[500px] overflow-hidden text-white flex bg-indigo-600">
                {/* Bloque de color encima con corte diagonal */}
                <div
                    className="w-[75%] bg-indigo-600 z-10 flex items-center px-8"

                >
                    <div className="max-w-xl">
                        <h2 className="text-4xl font-bold mb-4">Explorá sin límites</h2>
                        <p className="text-lg text-indigo-100">
                            Donde la creatividad se encuentra con la tecnología, y las ideas toman forma.
                        </p>
                    </div>
                </div>

                {/* Imagen al fondo con recorte inverso */}
                <img
                    src={`${BASE_URL}/img/union.avif`}
                    alt="Imagen recortada"
                    className="w-[45%] h-full object-cover z-0"
                    style={{
                        clipPath: 'polygon(40% 0, 100% 0, 100% 100%, 0 100%)',
                    }}
                />
            </section>


        </div>
    );
}
