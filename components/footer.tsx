import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id='footer' className="bg-neutral-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-start space-y-4 md:space-y-0">
          {/* Elementos alineados a la izquierda */}
          <div className="text-left">
            <h2 className="text-white text-xl font-bold">Tricode</h2>
            <p className="text-sm mt-2">Desarrollado por Tricode, agencia de software.</p>
            <p className="text-sm mt-2">© {new Date().getFullYear()} Tricode. Todos los derechos reservados.</p>
          </div>

          {/* Enlaces alineados a la derecha */}
          <div className="flex flex-col md:flex-row md:space-x-5 text-center md:text-right space-y-4 md:space-y-0">
            <a href="#" className="text-white hover:text-yellow-500 relative group">
              FAQ
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </a>
            <a href="#" className="text-white hover:text-yellow-500 relative group">
              Términos y Condiciones
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </a>
            <a href="/contact" className="text-white hover:text-yellow-500 relative group">
              Contacto
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </a>
            <a href="#" className="text-white hover:text-yellow-500 relative group">
              Política de Privacidad
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </a>
            <a href="#" className="text-white hover:text-yellow-500 relative group">
              Soporte
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </a>
          </div>
        </div>

        {/* Iconos de redes sociales alineados a la derecha */}
        <div className="mt-6 flex justify-end space-x-6 text-xl">
          <a
            href="https://facebook.com"
            className="text-white hover:text-yellow-500 hover:scale-110 transition-all duration-300 translate-y-[-20px]"
            title="Facebook"
          >
            <Facebook className="stroke-2" />
          </a>
          <a
            href="https://instagram.com"
            className="text-white hover:text-yellow-500 hover:scale-110 transition-all duration-300 translate-y-[-20px]"
            title="Instagram"
          >
            <Instagram className="stroke-2" />
          </a>
          <a
            href="https://twitter.com"
            className="text-white hover:text-yellow-500 hover:scale-110 transition-all duration-300 translate-y-[-20px]"
            title="Twitter"
          >
            <Twitter className="stroke-2" />
          </a>
          <a
            href="https://linkedin.com"
            className="text-white hover:text-yellow-500 hover:scale-110 transition-all duration-300 translate-y-[-20px]"
            title="LinkedIn"
          >
            <Linkedin className="stroke-2" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
