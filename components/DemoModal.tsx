"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "./ui/animated-modal";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function DemoModal() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí enviarías el email a tu backend
    console.log("Demo solicitada para el email:", email);
    // Resetear el campo de email
    setEmail("");
  };

  return (
    <div className="md:py-40  flex justify-start items-start md:items-center md:justify-center">
      <Modal>
        <ModalTrigger className="group/modal-btn">
          <span className="bg-black p-2 w-full md:w-fit transition-all rounded-lg font-semibold duration-300 text-sm hover:bg-white text-white hover:text-black">
            Solicitar Demo
          </span>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <h4 className="text-2xl md:text-3xl text-neutral-800 dark:text-neutral-100 font-bold text-center mb-4">
              ¡Descubre el Poder de Nuestra Solución!
            </h4>
            <p className="text-neutral-600 dark:text-neutral-300 text-center mb-6">
              Estás a un paso de transformar tu negocio. Solicita una demo de nuestros sistemas hoy mismo.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                Correo Electrónico
              </label>
              <Input
                id="email"
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full"
              />
              <p className="text-sm text-neutral-500 dark:text-neutral-400 italic">
                Ingresa tu correo y te contactaremos para agendar tu solicitud.
              </p>
            </form>
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
              <p className="text-sm text-blue-800 dark:text-blue-200">
                Nuestro equipo se pondrá en contacto contigo en un plazo de 24 a 48 horas hábiles para coordinar la mejor hora para tu demostración.
              </p>
            </div>
          </ModalContent>
          <ModalFooter className="gap-4">
            <Button
              type="submit"
              className="bg-black text-white dark:bg-white dark:text-black w-full sm:w-auto"
              onClick={handleSubmit}
            >
              Solicitar mi Demo
            </Button>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
}

