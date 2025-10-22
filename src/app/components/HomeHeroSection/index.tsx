"use client";

import React, { useState } from "react";
import TextType from "../TextType";
import { Button } from "@/components/ui/button";

export default function HomeHeroSection() {
  const [showH2, setShowH2] = useState(false);
  const [showButton, setShowButton] = useState(false);

  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden max-h-[calc(100vh-70px)] bg-[#FFF]">
      <div className="relative w-full flex flex-col lg:flex-row justify-between items-center h-[calc(100vh-70px)] bg-[#FFF] text-[#1C4200] max-w-7xl mx-auto">
        <div className="p-4 lg:px-0 text-left lg:text-center w-full h-full flex pt-[60px] lg:pt-[0px] justify-between lg:justify-center flex-col">
          <div>
            <TextType
              text="Qual o tamanho do seu sonho?"
              as="h1"
              className="text-left text-5xl max-w-3xl lg:max-w-none lg:text-9xl font-semibold"
              speed={70}
              cursor={true}
              cursorClassName="text-[#1C4200]"
              onComplete={() => setShowH2(true)}
            />
            {showH2 && (
              <TextType
                text="Trabalhamos para ajudar pessoas como você a ter uma vida melhor a partir do crédito consignado."
                as="h2"
                className="text-left text-xl max-w-xl lg:max-w-4xl mt-6 lg:mt-12 flex lg:text-4xl"
                speed={40}
                cursor={true}
                cursorClassName="text-[#1C4200]"
                onComplete={() => setShowButton(true)}
              />
            )}
          </div>
          {showButton && (
            <Button className="hidden lg:flex mt-6 lg:mt-12 bg-[#8FDB00] hover:bg-[#8FDB00] hover:text-black cursor-pointer p-5 py-8 text-lg lg:text-2xl text-black w-full lg:max-w-sm flex mx-auto">
              Simule seu crédito
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
