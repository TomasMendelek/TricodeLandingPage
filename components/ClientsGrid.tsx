
import React from "react";
import Image from "next/image";
import { LinkPreview } from "./ui/link-preview";

export function ClientsGrid() {
  return (
    <div className=" flex flex-col items-center justify-center max-w-7xl m-auto py-16" id="clientes">
        <h2
          className="mb-12 text-center text-3xl font-bold text-black md:text-4xl"
        >
          Nuestros Clientes
        </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <LinkPreview url="https://fomoargentina.com">
        <div className="flex basis-full flex-col h-[10rem] xl:w-[20rem] md:w-[15rem] tracking-tight rounded-lg bg-white text-slate-100/50">
          <div className="p-4 bg-neutral-950 flex h-full w-full rounded-xl items-center justify-center">
            <Image src={"/images/LogoFomo.webp"} alt="Logo Fomo" width={120} height={100} />
          </div>
        </div>
      </LinkPreview>
      <LinkPreview url="https://imentrenamientos.com">
        <div className="flex basis-full flex-col h-[10rem] xl:w-[20rem] md:w-[15rem] tracking-tight rounded-lg bg-white text-slate-100/50">
          <div className="p-4 bg-neutral-950 flex h-full w-full rounded-xl items-center justify-center">
            <Image src={"/images/LogoIm.webp"} alt="Logo IM" width={120} height={100} />
          </div>
        </div>
      </LinkPreview>
      <LinkPreview url="">
        <div className="flex basis-full flex-col h-[10rem] xl:w-[20rem] md:w-[15rem] tracking-tight rounded-lg bg-white text-slate-100/50">
          <div className="p-4 bg-neutral-950 flex h-full w-full rounded-xl items-center justify-center">
            <Image src={"/images/logoTecnoBuho.png"} alt="Logo IM" width={120} height={100} />
          </div>
        </div>
      </LinkPreview>
    </div>
    </div>
  );
}