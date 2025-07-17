import { useState, useEffect, useRef } from 'react';

export default function ChatBotWidget() {
  const [visible, setVisible] = useState(false);
  const [showBubble, setShowBubble] = useState(false); // empieza oculta
  const [pulse, setPulse] = useState(false);
  const bottomRef = useRef(null);


  {/* CHATBOT */}
  const [messages, setMessages] = useState([
    { from: 'bot', text: '¡Hola! ¿En qué puedo ayudarte hoy?' },
  ]);
  const [input, setInput] = useState('');
  const handleUserMessage = () => {
    if (!input.trim()) return;
  
    const userMsg = { from: 'user', text: input };
    let botResponse = { from: 'bot', text: 'No entendí, ¿podés reformular?' };
  
    // Respuestas simples
    const msgLower = input.toLowerCase();
    if (msgLower.includes('hola')) botResponse.text = '¡Hola! 👋 ¿Cómo estás?';
    if (msgLower.includes('precio')) botResponse.text = 'Nuestros precios varían según el servicio. ¿Querés más info?';
    if (msgLower.includes('contacto')) botResponse.text = 'Podés escribirnos al mail contacto@ejemplo.com 📩';
    if (msgLower.includes('ayuda')) botResponse.text = 'Estoy acá para ayudarte. ¿Tenés alguna duda puntual?';
    if (msgLower.includes('servicios')) botResponse.text = 'Ofrecemos desarrollo web, diseño UX/UI y asesoría técnica ✨';
    if (msgLower.includes('proyectos')) botResponse.text = '¿Querés ver algunos de nuestros trabajos? Mirá la sección Fundación 🚀';
    if (msgLower.includes('horario')) botResponse.text = 'Respondemos de lunes a viernes de 9 a 18 hs ⏰';
    if (msgLower.includes('ética')) botResponse.text = 'Creemos en la tecnología con propósito y en prácticas responsables 💡';
    if (msgLower.includes('inicio')) botResponse.text = 'Podés volver al inicio con el botón superior o haciendo scroll hacia arriba ⬆️';
    if (msgLower.includes('gracias')) botResponse.text = '¡Gracias a vos por escribirnos! 🤗';
    if (msgLower.includes('github')) botResponse.text = 'Podés ver el código en https://github.com/alanberns/ViteApp 🧠';
    if (msgLower.includes('mensaje')) botResponse.text = '¿Querés dejar un mensaje para el equipo? Estoy para ayudarte 🤖';
    if (msgLower.includes('pregunta')) botResponse.text = '¡Haceme una pregunta! Te contesto lo mejor que pueda.';
    if (msgLower.includes('diseño')) botResponse.text = 'Nos especializamos en diseño funcional y estético 🎨';
    if (msgLower.includes('accesibilidad')) botResponse.text = 'Siempre buscamos que nuestros sitios sean inclusivos 💬';
  
    setMessages((prev) => [...prev, userMsg, botResponse]);
    setInput('');
  };
  { /* --- */}  

  const toggleChat = () => {
    setVisible(!visible);
    setShowBubble(false); // cierra la burbuja si se abre el chat
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowBubble(true), 2000); // delay de 2 segundos
    return () => clearTimeout(timer);
  }, []);

  // Animación cada 10 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(true);
      setTimeout(() => setPulse(false), 1000); // duración de animación
    }, 10000); // cada 10 s

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  

  return (
    <>
      {/* Botón flotante con animación */}
      <button
        onClick={toggleChat}
        className={`fixed bottom-6 right-6 z-50 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-3 rounded-full shadow-lg transition ${
          pulse ? 'animate-bounce-once' : ''
        }`}
      >
        💬
      </button>

      {/* Burbuja con delay */}
      {showBubble && (
        <div className="fixed bottom-[90px] right-6 z-40 bg-white text-indigo-800 px-4 py-2 rounded-lg shadow-md flex items-center gap-2 animate-fade-in">
          <span>🤖 ¿Necesitás ayuda?</span>
          <button onClick={() => setShowBubble(false)} className="text-indigo-500 hover:text-red-500 font-bold">
            ✖
          </button>
        </div>
      )}

      {/* Panel del chatbot */}
      {visible && (
        <div className="fixed bottom-20 right-6 z-40 w-[300px] h-[400px] bg-white rounded-lg shadow-xl border p-4 flex flex-col animate-slide-in-up">
          <h3 className="font-bold text-indigo-700 mb-2">Asistente virtual</h3>
          <div className="flex-1 overflow-auto text-sm text-gray-700 space-y-2 mb-2">
            {messages.map((msg, index) => (
              <div ref={bottomRef} key={index} className={`text-${msg.from === 'user' ? 'right' : 'left'} text-indigo-700`}>
                <span className={`inline-block px-3 py-2 rounded ${msg.from === 'user' ? 'bg-indigo-100' : 'bg-gray-100'}`}>
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleUserMessage()}
            placeholder="Escribí tu mensaje..."
            className="p-2 border rounded text-sm"
          />
        </div>
      )}
    </>
  );
}
