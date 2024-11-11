"use client"

import { FC } from "react"
import Link from "next/link"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface DrawerProps {
  isOpen: boolean
  onClose: () => void
  isScrolled: boolean
}

const Drawer: FC<DrawerProps> = ({ isOpen, onClose, isScrolled }) => {
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
                <Link href="/docs" passHref>
                  <span className="text-lg font-medium text-gray-800 hover:text-gray-600" onClick={onClose}>
                    Docs
                  </span>
                </Link>
                <Link href="/pricing" passHref>
                  <span className="text-lg font-medium text-gray-800 hover:text-gray-600" onClick={onClose}>
                    Pricing
                  </span>
                </Link>
                <Link href="/contact" passHref>
                  <span className="text-lg font-medium text-gray-800 hover:text-gray-600" onClick={onClose}>
                    Contact
                  </span>
                </Link>
                <Button variant="ghost" className="justify-start" onClick={onClose}>
                  Login
                </Button>
                <Button
                  className={cn(
                    "justify-start",
                    isScrolled
                      ? "bg-yellow-400 hover:bg-yellow-400/90 text-black"
                      : "bg-black hover:bg-white text-white hover:text-black"
                  )}
                  onClick={onClose}
                >
                  Get Started
                </Button>
              </nav>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Drawer
