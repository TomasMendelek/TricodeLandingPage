'use client';

import { useEffect } from "react";

const ContactPage: React.FC = () => {
  useEffect(() => {
    // Cargar el script de Botpress
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v2.2/inject.js";
    script.async = true;

    // Cargar el archivo de configuración
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

  return (
    <div className="bg-white text-black min-h-[80vh] flex flex-col items-center py-16 px-4 shadow-lg">
      <h1 className="text-4xl font-bold mb-8 text-black">¡Ponte en contacto con nosotros!</h1>
      <div id="botpress-webchat"></div> {/* El contenedor del bot */}
    </div>
  );
};

export default ContactPage;
