'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'

const contentData = [
        {
          "title": "Tri-Ecommerce",
          "subtitle": "Gestión Total del Ecommerce",
          "description": "Con Tri-Ecommerce, puedes gestionar todos los aspectos de tu tienda en línea, desde productos y pedidos hasta clientes y pagos, todo desde un único dashboard fácil de usar.",
          "image": "/images/tricodeadmin.png"
        },
        {
          "title": "Tri-Marketing",
          "subtitle": "Automatización de Email Marketing",
          "description": "Tri-Marketing te permite crear campañas de email marketing personalizadas y automatizadas, integrándose perfectamente con tus herramientas y flujos de trabajo actuales.",
          "image": "/images/tricodeadmin.png"
        },
        {
          "title": "Tri-Stock",
          "subtitle": "Control de Stock y Inventario Eficiente",
          "description": "Tri-Stock ofrece una solución robusta para gestionar tu inventario, asegurando una gestión precisa de stock y ayudándote a mantener tu negocio siempre bien abastecido.",
          "image": "/images/tricodeadmin.png"
        }
      ]
      

export default function ContentSwitcher() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextContent = () => {
    setCurrentIndex((prev) => (prev + 1) % contentData.length)
  }

  const prevContent = () => {
    setCurrentIndex((prev) => (prev - 1 + contentData.length) % contentData.length)
  }

  return (
    <div className="relative bg-gray-50 min-h-[600px] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-start min-h-[600px]">
        <div className="max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 1, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-start text-start space-y-4"
            >
              <h2 className='text-md font-black bg-yellow-400 rounded-md p-2'>{contentData[currentIndex].title}</h2>
              <h3 className="text-3xl font-bold text-neutral-800">{contentData[currentIndex].subtitle}</h3>
              <p className="text-muted-foreground text-lg text-neutral-600">{contentData[currentIndex].description}</p>
              <div className="flex space-x-4 pt-8">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={prevContent}
                  aria-label="Previous content"
                >
                  <ChevronLeft className="h-12 w-12" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={nextContent}
                  aria-label="Next content"
                >
                  <ChevronRight className="h-12 w-12" />
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
      <div className='md:hidden flex py-4'>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 50 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
            className="w-full h-96"
          >
            <Image
              alt={contentData[currentIndex].title}
              src={contentData[currentIndex].image}
              layout="fill"
              objectFit="cover"
              objectPosition="left center"
              className='rounded-3xl'
            />
          </motion.div>
        </AnimatePresence>
        </div>
        </div>
      </div>
      <div className="absolute top-0 -right-20 w-1/2 h-full rounded-md ">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 50 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full m-20"
          >
            <Image
              alt={contentData[currentIndex].title}
              src={contentData[currentIndex].image}
              layout="fill"
              objectFit="cover"
              objectPosition="left center"
              className='rounded-3xl md:block hidden'
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}