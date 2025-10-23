"use client";

import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ServiceCardProps {
  title: string;
  description: string;
  hasLink?: boolean;
  index: number;
  imageUrl: string;
}

function ServiceCard({
  title,
  description,
  hasLink = false,
  index,
  imageUrl,
}: ServiceCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.6,
        delay: index * 0.2,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#8FDB00]/30 flex flex-col h-full"
    >
      {/* Decorative gradient border on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#8FDB00]/0 to-[#8FDB00]/0 group-hover:from-[#8FDB00]/5 group-hover:to-[#1C4200]/5 transition-all duration-300 -z-10"></div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={
          isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }
        }
        transition={{
          duration: 0.5,
          delay: index * 0.2 + 0.2,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="relative w-full h-64 mb-6 rounded-xl overflow-hidden"
      >
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </motion.div>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{
            duration: 0.5,
            delay: index * 0.2 + 0.3,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="text-2xl font-semibold text-[#1C4200] mb-4"
        >
          {title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.2 + 0.4,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="text-[#1C4200]/70 text-base leading-relaxed mb-6 flex-1"
        >
          {description}
        </motion.p>

        {hasLink && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2 + 0.5,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <Button className="w-full justify-center bg-[#8FDB00] hover:bg-[#7BC700] text-black font-semibold transition-all duration-300">
              Saiba mais
              <svg
                className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-50px" });

  const services = [
    {
      title: "Empréstimo com garantia de veículo",
      description:
        "Seu carro é o caminho para conseguir valores de até R$ 150 mil, com parcelas que cabem no orçamento.",
      hasLink: true,
      imageUrl:
        "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
    },
    {
      title: "Empréstimo com garantia de imóvel",
      description:
        "Seu imóvel abre portas para você ter um crédito de até R$ 3 milhões com as menores taxas do mercado.",
      hasLink: true,
      imageUrl:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    },
    {
      title: "Empréstimo consignado privado",
      description:
        "Crédito exclusivo para funcionários de empresas privadas, com desconto em folha e taxas especiais.",
      hasLink: true,
      imageUrl:
        "https://images.unsplash.com/photo-1521791055366-0d553872125f?w=800&q=80",
    },
    {
      title: "Antecipação do FGTS",
      description:
        "Antecipe seu FGTS com condições especiais e conquiste mais liberdade financeira. Use seu benefício para realizar planos, quitar dívidas ou investir no que realmente importa!",
      hasLink: true,
      imageUrl:
        "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80",
    },
    {
      title: "Crédito Consignado",
      description:
        "Trabalhamos para ajudar mais pessoas como você a ter uma vida melhor a partir do crédito consignado. Conquiste uma folga financeira!",
      hasLink: true,
      imageUrl:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    },
    {
      title: "Consignado para CLT",
      description:
        "Empréstimo exclusivo para trabalhadores CLT, com taxas mais baixas do que os demais empréstimos e aprovação ainda mais fácil.",
      hasLink: true,
      imageUrl:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    },
  ];

  return (
    <section className="relative w-full flex items-center justify-center bg-[#FFF] py-16 lg:py-24">
      <div className="relative w-full max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="text-left mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={
              isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{
              duration: 0.7,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="text-5xl lg:text-7xl font-semibold text-[#1C4200] mb-6"
          >
            Te damos o crédito pra você mudar de vida
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={
              isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="text-xl lg:text-2xl text-[#1C4200]/70 max-w-3xl"
          >
            Serviços que transformam seus sonhos em realidade.
          </motion.p>
        </div>

        {/* Services Swiper */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={32}
            slidesPerView={1}
            navigation={window.innerWidth >= 1024 ? true : false}
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 24,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
            }}
            className="!pb-12"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index} className="!h-auto !flex">
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  hasLink={service.hasLink}
                  index={index}
                  imageUrl={service.imageUrl}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .swiper-wrapper {
          align-items: stretch !important;
        }

        .swiper-slide {
          height: auto !important;
          display: flex !important;
        }

        .swiper-slide > div {
          width: 100%;
        }

        .swiper-button-next,
        .swiper-button-prev {
          color: #9ca3af !important;
          background: white;
          width: 36px !important;
          height: 36px !important;
          border-radius: 50%;
          border: 1px solid #e5e7eb;
          box-shadow: none;
          transition: all 0.3s ease;
          padding: 8px;
        }

        .swiper-button-next {
          right: 0;
        }

        .swiper-button-prev {
          left: 0;
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          border-color: #d1d5db;
          color: #6b7280 !important;
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 14px !important;
          font-weight: 600;
        }

        .swiper-pagination-bullet {
          background: #1c4200 !important;
          opacity: 0.3;
          width: 12px !important;
          height: 12px !important;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          opacity: 1;
          background: #8fdb00 !important;
          width: 32px !important;
          border-radius: 6px !important;
        }
      `}</style>
    </section>
  );
}
