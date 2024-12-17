"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Component() {
  return (
    <>
    <div className="min-h-fit py-20">
      <div className="container mx-auto px-4 py-16 text-center">
        {/* Badge */}
        <div className="mb-8 flex justify-center">
          <span className="border-neutral-700 border bg-yellow-50 text-yellow-800 inline-flex items-center rounded-md px-4 py-1">
            <span className="mr-2 h-2 w-2 rounded-full bg-yellow-500" />
            Solicita tu demo
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-black sm:text-5xl md:text-7xl">
          Empieza a transformar tu presencia en línea
        </h1>

        {/* Subheading */}
        <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-800">
          Potencia tu negocio con nuestras soluciones de desarrollo web personalizadas. 
          Creamos sitios web únicos que reflejan tu marca y conectan con tu audiencia.
        </p>

        {/* Buttons */}
        <div className="mt-14 flex flex-col md:flex-row space-y-2 md:space-y-0 justify-center md:space-x-4">
          <Link href="#contact" className="w-full md:w-fit">
          <Button 
            className="bg-neutral-950 text-white w-full  hover:bg-white hover:text-black md:px-10 md:py-5 text-md font-semibold transition-colors duration-300"
            >
            Comienza Ahora
          </Button>
              </Link>
          <Button 
            className="bg-white text-black border-2 border-black hover:bg-yellow-50 md:px-10 md:py-5 text-md font-semibold transition-colors duration-300"
            >
            Ver Proyectos
          </Button>
        </div>
      </div>
    </div>
    </>
  )
}