'use client'

import { Code, Server, Shield, Monitor, Headphones } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const services = [
  {
    icon: Code,
    title: "WEBSITE SEO",
    description: "Mejoramos la visibilidad de tu sitio web en los motores de búsqueda mediante estrategias de optimización SEO, incrementando el tráfico orgánico y atrayendo más clientes potenciales.",
    number: "01"
  },
  {
    icon: Server,
    title: "HOSTING + DOMINIO",
    description: "Ofrecemos soluciones de hosting confiables y registro de dominios para asegurar que tu sitio web esté siempre disponible y funcionando de manera óptima.",
    number: "02"
  },
  {
    icon: Shield,
    title: "QA | QC",
    description: "Realizamos pruebas de calidad (QA) y control de calidad (QC) para asegurar que tu software cumpla con los estándares más altos de funcionalidad y rendimiento.",
    number: "03"
  },
  {
    icon: Monitor,
    title: "MANTENIMIENTO",
    description: "Los primeros 3 meses de mantenimiento gratis! Nos encargamos de mantener tus aplicaciones móviles y webs actualizadas, seguras y funcionando sin problemas.",
    number: "04"
  },
  {
    icon: Headphones,
    title: "SOPORTE 24/7",
    description: "Brindamos soporte técnico continuo las 24 horas del día, los 7 días de la semana, para resolver cualquier problema o inquietud que puedas tener en cualquier momento.",
    number: "05"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
}

export default function Servicegrid() {
  return (
    <div id="Servicios" className="max-w-7xl m-auto py-16">
      <div className="text-sm font-light text-yellow-500 w-fit m-auto px-2 bg-yellow-50 mt-8 mb-5">Servicios</div>

      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center text-3xl font-bold text-black md:text-4xl"
        >
          Nuestros Servicios
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {/* Primera fila con 3 cards en pantallas grandes */}
          {services.slice(0, 3).map((service, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="group relative overflow-hidden border-none h-full bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-6">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="mb-4 inline-block rounded-lg bg-yellow-100 p-3"
                  >
                    <service.icon className="h-6 w-6 text-yellow-600" />
                  </motion.div>
                  <h3 className="mb-3 text-xl font-bold text-black">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                  <div className="absolute bottom-4 right-4 text-8xl font-bold text-yellow-400 opacity-20 transition-opacity duration-300 group-hover:opacity-50">
                    {service.number}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          {/* Segunda fila con 2 cards centradas en pantallas grandes */}
          <div className="col-span-1 md:col-span-3 flex flex-col items-center gap-8 md:flex-row md:justify-center">
            {services.slice(3).map((service, index) => (
              <motion.div key={index} variants={cardVariants} className="md:w-full h-full">
                <Card className="group relative overflow-hidden border-none h-full bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-6">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="mb-4 inline-block rounded-lg bg-yellow-100 p-3"
                    >
                      <service.icon className="h-6 w-6 text-yellow-600" />
                    </motion.div>
                    <h3 className="mb-3 text-xl font-bold text-black">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                    <div className="absolute bottom-4 right-4 text-8xl font-bold text-yellow-400 opacity-20 transition-opacity duration-300 group-hover:opacity-50">
                      {service.number}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
