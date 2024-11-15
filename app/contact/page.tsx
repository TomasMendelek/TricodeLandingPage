import { Facebook, Instagram, Twitter, Linkedin, MessageCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-white text-black min-h-[80vh] flex flex-col items-center py-16 px-4 shadow-[0px_10px_30px_rgba(0,0,0,0.7)]">
      <h1 className="text-4xl font-bold mb-8 text-black">¡Ponte en contacto con nosotros!</h1>

      {/* Sección de contacto */}
      <div className="bg-white text-black rounded-xl p-8 shadow-[0px_10px_30px_rgba(0,0,0,0.4)] max-w-4xl w-full border-2 border-yellow-600">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Formulario de contacto */}
          <form className="space-y-6 bg-white rounded-xl shadow-[0px_10px_30px_rgba(0,0,0,0.8)] p-8">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-lg font-semibold text-gray-700">Nombre</label>
              <input
                type="text"
                id="name"
                placeholder="Tu nombre"
                className="bg-white text-black rounded-md p-3 mt-2 border-b-2 border-gray-300 focus:outline-none focus:border-yellow-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-lg font-semibold text-gray-700">Correo electrónico</label>
              <input
                type="email"
                id="email"
                placeholder="Tu correo electrónico"
                className="bg-white text-black rounded-md p-3 mt-2 border-b-2 border-gray-300 focus:outline-none focus:border-yellow-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="text-lg font-semibold text-gray-700">Mensaje</label>
              <textarea
                id="message"
                rows={4}
                placeholder="Escribe tu mensaje..."
                className="bg-white text-black rounded-md p-3 mt-2 border-b-2 border-gray-300 focus:outline-none focus:border-yellow-500"
              />
            </div>
            <button
              type="submit"
              className="bg-yellow-500 text-black rounded-md px-6 py-2 mt-4 text-lg font-semibold hover:bg-yellow-400 transition duration-300"
            >
              Enviar mensaje
            </button>
          </form>

          {/* Información adicional */}
          <div className="flex flex-col space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">Nuestra Información</h2>
            <p>Dirección: Calle Ficticia 123, Ciudad, País</p>
            <p>Teléfono: +1 (555) 123-4567</p>
            <p>Email: contacto@tricode.com</p>

            {/* Redes sociales */}
            <div className="flex space-x-6 text-2xl text-black">
              <a href="https://facebook.com" title="Facebook">
                <Facebook className="hover:text-yellow-500 transition-all duration-300" />
              </a>
              <a href="https://instagram.com" title="Instagram">
                <Instagram className="hover:text-yellow-500 transition-all duration-300" />
              </a>
              <a href="https://twitter.com" title="Twitter">
                <Twitter className="hover:text-yellow-500 transition-all duration-300" />
              </a>
              <a href="https://linkedin.com" title="LinkedIn">
                <Linkedin className="hover:text-yellow-500 transition-all duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Botón de WhatsApp flotante */}
      <a
        href="https://wa.me/15551234567" // Reemplaza este número por el de WhatsApp real
        className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-400 transition duration-300 shadow-lg"
        title="Contacta por WhatsApp"
      >
        <span className="flex items-center justify-center">
          {/* Icono de WhatsApp usando Lucide React */}
          <MessageCircle className="w-6 h-6 mr-2" />
          WhatsApp
        </span>
      </a>
    </div>
  );
};

export default ContactPage;
