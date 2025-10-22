"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import TextType from "../TextType";

interface BankLogo {
  name: string;
  logoUrl: string;
  alt: string;
}

export default function BankPartnersSection() {
  const headerRef = useRef(null);
  const marqueeRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-50px" });
  const isMarqueeInView = useInView(marqueeRef, { once: true, margin: "-100px" });

  const [titleComplete, setTitleComplete] = useState(false);
  const [subtitleComplete, setSubtitleComplete] = useState(false);

  const banks: BankLogo[] = [
    {
      name: "Banco do Brasil",
      logoUrl: "https://cdn.brandfetch.io/idIXh-yQ32/w/820/h/293/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX",
      alt: "Logo Banco do Brasil",
    },
    {
      name: "Itaú",
      logoUrl: "https://cdn.brandfetch.io/idAciuyyPp/w/600/h/600/theme/light/logo.webp?c=1bxid64Mup7aczewSAYMX",
      alt: "Logo Itaú",
    },
    {
      name: "Bradesco",
      logoUrl: "https://cdn.brandfetch.io/idGQWGCF26/w/800/h/179/theme/light/logo.png?c=1bxid64Mup7aczewSAYMX",
      alt: "Logo Bradesco",
    },
    {
      name: "Santander",
      logoUrl: "https://cdn.brandfetch.io/idWPmUE5JO/w/820/h/143/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX",
      alt: "Logo Santander",
    },
    {
      name: "Caixa",
      logoUrl: "https://cdn.brandfetch.io/id6KaoEBTQ/w/800/h/183/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX",
      alt: "Logo Caixa Econômica Federal",
    },
    {
      name: "Banco Pan",
      logoUrl: "https://cdn.brandfetch.io/idbyouRHyl/w/800/h/376/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX",
      alt: "Logo Banco Pan",
    },
    {
      name: "Banco Safra",
      logoUrl: "https://cdn.brandfetch.io/idajhmk3dJ/w/800/h/233/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX",
      alt: "Logo Banco Safra",
    },
    {
      name: "C6 Bank",
      logoUrl: "https://cdn.brandfetch.io/idGbjRMvXY/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX",
      alt: "Logo C6 Bank",
    },
    {
      name: "Banco Inter",
      logoUrl: "https://cdn.brandfetch.io/idyGUX-vJ4/w/820/h/138/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX",
      alt: "Logo Banco Inter",
    },
    {
      name: "BMG",
      logoUrl: "https://cdn.brandfetch.io/idlvrasljo/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX",
      alt: "Logo Banco BMG",
    },
  ];

  return (
    <section className="relative w-full flex items-center justify-center bg-[#FFF] py-16 lg:py-24">
      <div className="relative w-full max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="text-left mb-16">
          <TextType
            text="Parceiros de confiança"
            element="h2"
            speed={50}
            cursor={true}
            className="text-5xl lg:text-7xl font-semibold text-[#1C4200] mb-6"
            onComplete={() => setTitleComplete(true)}
          />
          {titleComplete && (
            <TextType
              text="Trabalhamos com as principais instituições financeiras do Brasil para oferecer as melhores condições de crédito para você."
              element="p"
              speed={20}
              cursor={true}
              className="text-xl lg:text-2xl text-[#1C4200]/70 max-w-3xl"
              onComplete={() => setSubtitleComplete(true)}
            />
          )}
        </div>

        {/* Bank Logos Marquee */}
        <motion.div
          ref={marqueeRef}
          initial={{ opacity: 0, y: 30 }}
          animate={
            isMarqueeInView && subtitleComplete
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 30 }
          }
          transition={{
            duration: 0.7,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="relative"
        >
          <Marquee
            gradient={true}
            gradientColor="#FFF"
            gradientWidth={100}
            speed={40}
            pauseOnHover={true}
            className="py-8"
          >
            {banks.map((bank, index) => (
              <div
                key={index}
                className="mx-8 lg:mx-12 flex items-center justify-center"
              >
                <div className="relative w-32 h-24 lg:w-40 lg:h-28 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                  <Image
                    src={bank.logoUrl}
                    alt={bank.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 128px, 160px"
                  />
                </div>
              </div>
            ))}
          </Marquee>
        </motion.div>

        {/* Decorative bottom element */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={
            isMarqueeInView && subtitleComplete
              ? { opacity: 1, scaleX: 1 }
              : { opacity: 0, scaleX: 0 }
          }
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="mt-12 h-1 bg-gradient-to-r from-transparent via-[#8FDB00]/30 to-transparent rounded-full"
        />
      </div>
    </section>
  );
}
