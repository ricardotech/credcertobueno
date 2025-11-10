"use client";

import React, { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  ctaText: string;
  ctaLink: string;
  highlights?: string[];
}

export default function HomeHeroSection() {
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { once: true });
  const [activeIndex, setActiveIndex] = useState(0);

  // Dynamic hero slides configuration
  const heroSlides: HeroSlide[] = [
    {
      id: 1,
      title: "Realize seus sonhos com crédito inteligente",
      subtitle:
        "Soluções completas em crédito consignado com as melhores taxas do mercado. Rápido, seguro e sem burocracia.",
      image: "/hero-section-1.jpg",
      ctaText: "Simule seu crédito agora",
      ctaLink: "#simulacao",
      highlights: [
        "+25 mil aprovados",
        "Taxas a partir de 1,2% a.m.",
        "100% online",
      ],
    },
    {
      id: 2,
      title: "Empréstimo descomplicado para você",
      subtitle:
        "Do INSS ao CLT, do FGTS ao empréstimo com garantia. Encontre a solução perfeita para suas necessidades.",
      image: "/hero-section-2.jpg",
      ctaText: "Fale com especialista",
      ctaLink: "#contato",
      highlights: [
        "Aprovação em 24h",
        "Parceiros confiáveis",
        "Atendimento especializado",
      ],
    },
  ];

  return (
    <section className="relative w-full h-[100vh] min-h-[600px]  overflow-hidden">
      {/* Background Swiper */}
      <div className="absolute inset-0 z-0 h-[100vh]">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          speed={1500}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet !bg-white/50 !w-3 !h-3",
            bulletActiveClass:
              "swiper-pagination-bullet-active !bg-white !w-3 !h-3",
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="w-full h-[100vh] hero-swiper"
          loop={true}
        >
          {heroSlides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative w-full h-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover object-[75%_center] sm:object-center"
                  priority={slide.id === 1}
                  quality={90}
                  sizes="100vw"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div ref={contentRef} className="max-w-4xl">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 lg:space-y-8"
            >
              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
                {heroSlides[activeIndex]?.title}
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-2xl">
                {heroSlides[activeIndex]?.subtitle}
              </p>

              {/* Highlights */}
              {heroSlides[activeIndex]?.highlights && (
                <div className="flex flex-wrap gap-4 lg:gap-6">
                  {heroSlides[activeIndex].highlights.map(
                    (highlight, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={
                          isInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: -20 }
                        }
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                        className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20"
                      >
                        <CheckCircle2 className="w-5 h-5 text-[#8FDB00]" />
                        <span className="text-white font-medium text-sm lg:text-base">
                          {highlight}
                        </span>
                      </motion.div>
                    )
                  )}
                </div>
              )}

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <Button
                  size="lg"
                  className="group bg-[#8FDB00] hover:bg-[#7BC700] text-black font-semibold text-base lg:text-lg px-8 py-6 lg:py-7 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  {heroSlides[activeIndex]?.ctaText}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 font-semibold text-base lg:text-lg px-8 py-6 lg:py-7 rounded-full transition-all duration-300"
                >
                  Saiba mais
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust Indicators */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-12 lg:mt-16 pt-8 border-t border-white/20"
            >
              <div className="grid grid-cols-3 gap-6 lg:gap-12 max-w-2xl">
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                    +25k
                  </div>
                  <div className="text-sm lg:text-base text-white/70">
                    Clientes atendidos
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                    10+
                  </div>
                  <div className="text-sm lg:text-base text-white/70">
                    Anos de mercado
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                    5.0
                  </div>
                  <div className="text-sm lg:text-base text-white/70">
                    Avaliação Google
                  </div>
                </div>
              </div>
            </motion.div> */}
          </div>
        </div>
      </div>

      {/* Custom Pagination Styles */}
      <style jsx global>{`
        .hero-swiper .swiper-pagination {
          bottom: 2rem !important;
          left: 50% !important;
          transform: translateX(-50%);
          width: auto !important;
          display: flex;
          gap: 0.5rem;
        }

        .hero-swiper .swiper-pagination-bullet {
          margin: 0 !important;
          transition: all 0.3s ease;
        }

        @media (min-width: 1024px) {
          .hero-swiper .swiper-pagination {
            left: 2rem !important;
            transform: none;
            bottom: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}
