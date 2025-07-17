import { useState, useEffect } from 'react';

export default function ChatBotWidget() {
  const [visible, setVisible] = useState(false);
  const [showBubble, setShowBubble] = useState(false); // empieza oculta

  const toggleChat = () => {
    setVisible(!visible);
    setShowBubble(false); // cierra la burbuja si se abre el chat
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowBubble(true), 2000); // delay de 2 segundos
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Botón flotante */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-50 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-3 rounded-full shadow-lg transition"
      >
        💬
      </button>

      {/* Burbuja con delay */}
      {showBubble && (
        <div className="fixed bottom-[90px] right-6 z-40 bg-white text-indigo-800 px-4 py-2 rounded-lg shadow-md flex items-center gap-2 animate-fade-in">
          <span>¿Necesitás ayuda?</span>
          <button onClick={() => setShowBubble(false)} className="text-indigo-500 hover:text-red-500 font-bold">
            ✖
          </button>
        </div>
      )}

      {/* Panel del chatbot */}
      {visible && (
        <div className="fixed bottom-20 right-6 z-40 w-[300px] h-[400px] bg-white rounded-lg shadow-xl border p-4 flex flex-col animate-slide-in-up">
          <h3 className="font-bold text-indigo-700 mb-2">Asistente virtual</h3>
          <div className="flex-1 overflow-auto text-sm text-gray-700">
            <p>¡Hola! ¿En qué puedo ayudarte hoy?</p>
          </div>
          <input
            type="text"
            placeholder="Escribí tu mensaje..."
            className="mt-4 p-2 border rounded text-sm"
          />
        </div>
      )}
    </>
  );
}
