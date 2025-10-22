"use client";

import React, { useState } from "react";
import TextType from "../TextType";

export default function HomeHeroSection() {
  const [showH2, setShowH2] = useState(false);

  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden max-h-[calc(100vh-70px)] bg-[#FFF]">
      <div className="relative w-full flex flex-col lg:flex-row justify-between items-center h-[calc(100vh-70px)] bg-[#FFF] text-[#1C4200] max-w-7xl mx-auto">
        <div className="p-4 lg:px-0 text-left lg:text-center w-full h-full flex pt-[60px] lg:pt-[0px] lg:justify-center flex-col">
          <TextType
            text="Qual o tamanho do seu sonho?"
            as="h1"
            className="text-5xl max-w-3xl lg:max-w-none lg:text-9xl font-semibold"
            speed={70}
            cursor={true}
            cursorClassName="text-[#1C4200]"
            onComplete={() => setShowH2(true)}
          />
          {showH2 && (
            <TextType
              text="Trabalhamos para ajudar pessoas como você a ter uma vida melhor a partir do crédito consignado."
              as="h2"
              className="text-xl max-w-xl lg:max-w-4xl mt-12 mx-auto flex lg:text-4xl"
              speed={15}
              delay={300}
              cursor={true}
              cursorClassName="text-[#1C4200]"
            />
          )}
        </div>
      </div>
    </section>
  );
}
