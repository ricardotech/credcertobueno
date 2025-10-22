import Image from "next/image";
import React from "react";

export default function HomeHeroSection() {
  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden max-h-[calc(100vh-70px)] bg-[#FFF]">
      <div className="relative w-full flex flex-col lg:flex-row justify-between items-center h-[calc(100vh-70px)] bg-[#FFF] text-[#1C4200] max-w-7xl mx-auto">
        <div className="p-4 lg:px-0 text-left lg:text-center w-full h-full flex pt-[60px] lg:pt-[0px] lg:justify-center flex-col">
          <h1 className="text-6xl max-w-2xl lg:max-w-none lg:text-9xl font-semibold">
            Qual o tamanho do seu sonho?
          </h1>
          <h2 className="text-2xl max-w-xl lg:max-w-4xl mt-12 mx-auto flex lg:text-4xl">
            Trabalhamos para ajudar pessoas como você a ter uma vida melhor a
            partir do crédito consignado.
          </h2>
        </div>
      </div>
    </section>
  );
}
