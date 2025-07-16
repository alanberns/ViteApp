export default function Contacto() {
    return (
        <div className="w-full flex flex-col">
            <section className="relative py-20 bg-indigo-50 text-gray-900 min-h-screen overflow-hidden">
                <img
                    src="/img/contacto.jpg"
                    alt="Persona escribiendo"
                    className="absolute inset-0 w-full h-full object-cover opacity-10 blur-sm -z-10"
                />
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-6 text-center">Contacto</h2>
                    <p className="text-center text-gray-700 mb-12">
                        ¿Tenés una idea, proyecto o simplemente querés saludar? Escribinos y te respondemos en breve.
                    </p>

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
