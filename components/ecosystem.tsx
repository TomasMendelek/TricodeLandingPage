"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "./ui/animated-beam";
import Image from "next/image";

const Card = forwardRef<
  HTMLDivElement,
  { className?: string; title: string; description: string; icon: string }
>(({ className, title, description, icon }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col items-center  justify-center aspect-square w-full max-w-xs rounded-3xl border bg-white p-3 md:p-12 shadow-md hover:shadow-xl transition-all",
        className
      )}
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-md font-bold bg-yellow-400 text-md text-black">
        {icon}
      </div>
      <h4 className="mt-4 text-md font-semibold text-balance text-neutral-800 text-center">{title}</h4>
      
    </div>
  );
});

Card.displayName = "Card";

export function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const mainCardRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex max-w-7xl mx-auto items-center justify-center overflow-hidden px-8 pb-4"
      ref={containerRef}
    >
      <div className="flex flex-col items-center text-center space-y-8">
        {/* Cards Secundarias */}
        <div className="flex flex-nowrap z-10 gap-8 justify-center  lg:space-x-8">
          <Card
            ref={div1Ref}
            title="Tri-Ecommerce"
            description="Desarrollamos soluciones a medida para ecommerce, optimizando la venta online y la experiencia de usuario."
            icon="EC"
          />
          <Card
            ref={div2Ref}
            title="Tri-Marketing"
            description="Ofrecemos estrategias de marketing digital para aumentar la visibilidad y el rendimiento de tu marca."
            icon="MK"
          />
          <Card
            ref={div3Ref}
            title="Tri-Stock"
            description="Gestionamos inventarios de manera eficiente, integrando tecnologías para una gestión precisa y en tiempo real."
            icon="ST"
          />
        </div>

        {/* Card Principal */}
        <div
          ref={mainCardRef}
          className="flex flex-col z-10 items-center justify-center aspect-square w-full max-w-xs bg-white rounded-full shadow-lg p-6"
        >
          <span className="bg-yellow-300 rounded-lg p-2">
            <Image width={48} height={48} src="/images/Tricode-Logo-2.webp" alt="Tricode Logo" />
          </span>
          <h3 className="mt-4 text-xl font-semibold text-neutral-800">Tricode EcoSystem</h3>
        </div>
      </div>

      {/* Beam Animation */}
      <AnimatedBeam
        gradientStartColor="#fde047"
        gradientStopColor="#facc15"
        duration={5}
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={mainCardRef}
      />
      <AnimatedBeam
        gradientStartColor="#fde047"
        gradientStopColor="#facc15"
        duration={5}
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={mainCardRef}
      />
      <AnimatedBeam
        gradientStartColor="#fde047"
        gradientStopColor="#facc15"
        duration={5}
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={mainCardRef}
      />
    </div>
  );
}
