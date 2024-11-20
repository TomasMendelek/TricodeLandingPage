'use client';

import { useEffect } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactPage: React.FC = () => {
  useEffect(() => {
    // Inyectar el script de Botpress
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v2.2/inject.js";
    script.async = true;

    const configScript = document.createElement("script");
    configScript.src = "https://files.bpcontent.cloud/2024/11/19/14/20241119141347-NIMXMTT3.js";
    configScript.async = true;

    document.body.appendChild(script);
    document.body.appendChild(configScript);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(configScript);
    };
  }, []);

  useEffect(() => {
    // Efecto de brillo suave en la burbuja del bot
    const interval = setInterval(() => {
      const botBubble = document.querySelector(".bpw-bubble"); // Clase de la burbuja del bot
      if (botBubble) {
        botBubble.classList.add("soft-glow");
        setTimeout(() => {
          botBubble.classList.remove("soft-glow");
        }, 2000); // Dura 2 segundos
      }
    }, 4000); // Repite cada 4 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-200 min-h-screen py-16 px-8">
      {/* Título */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">¡Contáctanos!</h1>
        <p className="text-lg text-gray-600">
          Estamos aquí para ayudarte. Encuentra nuestra información de contacto o usa nuestro chat interactivo en la esquina inferior derecha.
        </p>
      </div>

      {/* Sección de contacto */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Información 1: Ubicación */}
        <div className="flex flex-col items-center bg-white shadow-lg rounded-xl p-6">
          <MapPin className="text-yellow-500 w-12 h-12 mb-4" />
          <h3 className="text-xl font-bold mb-2">Nuestra ubicación</h3>
          <p className="text-gray-600 text-center">Concepción, Tucumán, Argentina</p>
        </div>

        {/* Información 2: Teléfono */}
        <div className="flex flex-col items-center bg-white shadow-lg rounded-xl p-6">
          <Phone className="text-yellow-500 w-12 h-12 mb-4" />
          <h3 className="text-xl font-bold mb-2">Teléfono</h3>
          <p className="text-gray-600 text-center">+54 9 3865-415222</p>
        </div>

        {/* Información 3: Email */}
        <div className="flex flex-col items-center bg-white shadow-lg rounded-xl p-6">
          <Mail className="text-yellow-500 w-12 h-12 mb-4" />
          <h3 className="text-xl font-bold mb-2">Correo electrónico</h3>
          <p className="text-gray-600 text-center">dev.tricode@gmail.com</p>
        </div>
      </div>

      {/* Estilos para el efecto de brillo */}
      <style jsx>{`
        .soft-glow {
          box-shadow: 0 0 15px 5px rgba(52, 211, 153, 0.7); /* Verde suave */
          border-radius: 50%;
        }

        .bpw-bubble {
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default ContactPage;
