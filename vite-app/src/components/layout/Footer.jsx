export default function Footer() {
  return (
    <footer className="bg-indigo-100 text-gray-700 border-t border-indigo-200 ">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Empresa */}
        <div>
          <h3 className="text-indigo-600 font-semibold mb-4">Empresa</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-indigo-500">Sobre nosotros</a></li>
            <li><a href="#" className="hover:text-indigo-500">Historia</a></li>
            <li><a href="#" className="hover:text-indigo-500">Equipo</a></li>
            <li><a href="#" className="hover:text-indigo-500">Carreras</a></li>
          </ul>
        </div>

        {/* Servicios */}
        <div>
          <h3 className="text-indigo-600 font-semibold mb-4">Servicios</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-indigo-500">Planes</a></li>
            <li><a href="#" className="hover:text-indigo-500">Consultoría</a></li>
            <li><a href="#" className="hover:text-indigo-500">Atención al cliente</a></li>
            <li><a href="#" className="hover:text-indigo-500">Desarrollos personalizados</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-indigo-600 font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-indigo-500">Términos y condiciones</a></li>
            <li><a href="#" className="hover:text-indigo-500">Política de privacidad</a></li>
            <li><a href="#" className="hover:text-indigo-500">Gestión de cookies</a></li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-indigo-600 font-semibold mb-4">Contacto</h3>
          <ul className="space-y-2 text-sm">
            <li>Teléfono: (011) 1234-5678</li>
            <li>Email: contacto@ejemplo.com</li>
            <li>Dirección: Calle Ficticia 123, CABA</li>
            <li>
              <div className="flex space-x-3 mt-2">
                <a href="#" className="hover:text-indigo-500">Instagram</a>
                <a href="#" className="hover:text-indigo-500">LinkedIn</a>
                <a href="#" className="hover:text-indigo-500">YouTube</a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-indigo-200 mt-8 pt-4 text-center text-sm text-gray-500">
        &copy; 2025 Mi Proyecto. Todos los derechos reservados.
      </div>
    </footer>
  );
}
