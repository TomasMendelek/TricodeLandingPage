
import React from "react";
import Image from "next/image";
import { LinkPreview } from "./ui/link-preview";

export function ClientsGrid() {
  return (
    <div className=" flex flex-col items-center justify-center max-w-7xl m-auto py-16">
        <h2
          className="mb-12 text-center text-3xl font-bold text-black md:text-4xl"
        >
          Nuestros Clientes
        </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <LinkPreview url="https://fomoargentina.com">
        <div className="flex basis-full flex-col p-4 tracking-tight rounded-lg bg-white text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-neutral-900">
                Fomo Argentina
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 ">
                    Tienda Online de electronica, accesorios y tecnología. Cuenta con 5 sucursales en Argentina.
                </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4">
                <Image src="/images/fomoargentina.png" alt="fomo" width={200} height={200} className="object-cover w-full h-full rounded-lg" />
            </div>
        </div>
        </LinkPreview>
        
        <div className="flex flex-col p-4  justify-center  rounded-lg bg-white text-slate-100/50  w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-neutral-900">
                ¿Quieres ser cliente?
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 ">
                    Si quieres ser cliente de Tricode, puedes contactarte con nosotros a traves de nuestro <b className="text-[#25D366]">Whatsapp</b>
                </span>
            </div>
        </div>
        </div>
    </div>
  );
}