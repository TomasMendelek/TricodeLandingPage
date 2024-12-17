"use client"

import { FC } from "react"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { DemoModal } from "../DemoModal"
import Link from "next/link"

interface DrawerProps {
  isOpen: boolean
  onClose: () => void

}

const Drawer: FC<DrawerProps> = ({ isOpen, onClose,  }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden"
          onClick={onClose}
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            className="fixed right-0 top-0 h-full w-64 bg-white shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4">
              <Button variant="ghost" size="icon" className="mb-4" onClick={onClose}>
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
              <nav className="flex flex-col gap-4">
              <Link href="#EcoSistema" onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}>
                  <Button variant="ghost" className="text-sm">EcoSistema</Button>
              </Link>
              <Link href="#Servicios" onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}>
                  <Button variant="ghost" className="text-sm">Nuestros Servicios</Button>
              </Link>
              <Link href="#contact" onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}>
                  <Button variant="ghost" className="text-sm">Contacto</Button>
              </Link>
                <DemoModal />
              </nav>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Drawer
