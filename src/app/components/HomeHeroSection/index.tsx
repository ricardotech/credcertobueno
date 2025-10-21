import Image from "next/image";
import React from "react";

export default function HomeHeroSection() {
  return (
    <section className="relative w-full bg-blue-500 flex items-center justify-center overflow-hidden max-h-[calc(100vh-70px)]">
      <div className="relative w-full h-[calc(100vh-70px)]">
        <Image
          alt="CredCertoBueno"
          src="/mulher-credcerto.png"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
    </section>
  );
}
