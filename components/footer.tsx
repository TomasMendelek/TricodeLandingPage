
import { Button } from "./ui/button"

const Footer: React.FC = () => {
  return (
    <footer id='footer'>
      <div className="h-[40rem] w-full rounded-t-md bg-black relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-400  text-center font-sans font-bold">
          ¿Quieres algun servicio?
        </h1>
        <p></p>
        <p className="text-neutral-400 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Contanos tu idea, nosotros te ayudaremos a llevarla a cabo, puedes contactarte con nosotros a traves de nuestro <b className="text-[#25D366]">Whatsapp</b>

        </p>
        <Button
          className="relative flex justify-center items-center m-auto z-10 mt-4 hover:border hover:broder-[#25D366] transition-all duration-300"
          variant="default"
          size="lg"
        >
          Enviar Mensaje
        </Button>
      </div>
    </div>
    </footer>
  )
}

export default Footer

