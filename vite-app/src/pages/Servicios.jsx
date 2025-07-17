import CountUp from 'react-countup';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { ArcElement } from 'chart.js';

ChartJS.register(ArcElement);

const pieData = {
    labels: ['Desarrollo Web', 'Consultoría', 'Branding', 'Automatización'],
    datasets: [
        {
            data: [40, 25, 20, 15],
            backgroundColor: ['#6366F1', '#818CF8', '#A5B4FC', '#E0E7FF'],
            borderWidth: 1,
        },
    ],
};

const pieOptions = {
    responsive: true,
    plugins: { legend: { position: 'bottom' } },
};


ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const lineData = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul'],
    datasets: [
        {
            label: 'Proyectos completados',
            data: [5, 10, 14, 18, 25, 32, 45],
            borderColor: '#4F46E5',
            backgroundColor: 'rgba(99, 102, 241, 0.2)',
            fill: true,
            tension: 0.3,
            pointRadius: 4,
        },
    ],
};

const lineOptions = {
    responsive: true,
    plugins: { legend: { display: true }, tooltip: { mode: 'index' } },
};


const options = {
    responsive: true,
    plugins: {
        legend: { display: false },
        tooltip: { enabled: true },
    },
    scales: {
        y: {
            ticks: { stepSize: 10000 },
            beginAtZero: true,
        },
    },
};

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
                        {
                            servicios.map((servicio, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.9, ease: [0.25, 0.8, 0.5, 1], delay: index * 0.25 }}
                                    viewport={{ once: true }}
                                    className="bg-indigo-50 rounded-xl shadow-md p-8 transition transform duration-1000 hover:-translate-y-2 hover:shadow-xl"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.2, rotate: -5 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                                        className="text-5xl mb-4"
                                    >
                                        {servicio.icono}
                                    </motion.div>

                                    <h3 className="text-xl font-semibold text-indigo-700 mb-2">{servicio.titulo}</h3>
                                    <p className="text-gray-600 text-sm">{servicio.descripcion}</p>
                                </motion.div>
                            ))
                        }
                    </div>
                    <div className="mt-16 text-center">
                        <a
                            href="#contacto"
                            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg shadow hover:bg-indigo-500 transition"
                        >
                            Contactanos
                        </a>
                    </div>

                </div>
            </section>


            <section className="py-20 bg-indigo-50 text-gray-900">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-8">Resultados que hablan</h2>
                    <p className="text-gray-700 text-lg mb-16 max-w-2xl mx-auto">
                        Estos son algunos logros que alcanzamos junto a nuestros clientes.
                    </p>

                    {/* Métricas destacadas */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <h3 className="text-3xl font-bold text-indigo-600">
                                +
                                <CountUp start={0} end={120} duration={2.5} enableScrollSpy scrollSpyOnce />
                                %
                            </h3>
                            <p className="text-sm text-gray-600 mt-2">Incremento en tráfico orgánico</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <h3 className="text-3xl font-bold text-indigo-600">
                                <CountUp start={0} end={35} duration={2.5} enableScrollSpy scrollSpyOnce />
                                K
                            </h3>
                            <p className="text-sm text-gray-600 mt-2">Usuarios activos mensuales</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <h3 className="text-3xl font-bold text-indigo-600">
                                <CountUp start={0} end={98} duration={2.5} enableScrollSpy scrollSpyOnce />
                                %
                            </h3>
                            <p className="text-sm text-gray-600 mt-2">Satisfacción de clientes</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <h3 className="text-3xl font-bold text-indigo-600">
                                +
                                <CountUp start={0} end={50} duration={2.5} enableScrollSpy scrollSpyOnce />
                            </h3>
                            <p className="text-sm text-gray-600 mt-2">Proyectos lanzados</p>
                        </div>
                    </div>

                    {/* Imagen decorativa o gráfico */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <h3 className="text-xl font-bold text-indigo-700 mb-4">Evolución de Proyectos</h3>
                            <Line data={lineData} options={lineOptions} />
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <h3 className="text-xl font-bold text-indigo-700 mb-4">Distribución de Servicios</h3>
                            <Pie data={pieData} options={pieOptions} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Sección : Contacto */}

            <section className="relative py-20 bg-indigo-50 text-gray-900 min-h-screen overflow-hidden" id='contacto'>
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6 items-center">

                    {/* Bloque emocional + imagen */}
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-5xl font-bold text-indigo-700">Contacto</h2>
                        <p className="text-gray-700 text-lg">
                            ¿Tenés una idea, proyecto o simplemente querés saludar? Escribinos y te respondemos en breve.
                        </p>
                        <p className="text-gray-600">
                            Estamos acá para escuchar tus ideas, compartir las nuestras y construir soluciones con propósito.
                        </p>
                        <img
                            src="/img/contacto.avif"
                            alt="Persona escribiendo"
                            className="rounded-lg shadow-md opacity-90"
                        />
                    </div>

                    {/* Formulario */}
                    <form className="bg-white bg-opacity-90 backdrop-blur-md shadow-2xl rounded-xl p-8 space-y-6">
                        <div>
                            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                                Nombre
                            </label>
                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                placeholder="Tu nombre completo"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                placeholder="nombre@correo.com"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                                Mensaje
                            </label>
                            <textarea
                                id="mensaje"
                                name="mensaje"
                                rows="5"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                placeholder="Contanos en qué podemos ayudarte..."
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-500 transition"
                        >
                            Enviar mensaje
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
}
