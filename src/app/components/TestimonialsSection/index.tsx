"use client";

import React, { useRef } from "react";
import { motion, useInView } from "@/lib/static-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Star, Quote } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface TestimonialCardProps {
  name: string;
  age: number;
  text: string;
  rating: number;
  avatarUrl: string;
  index: number;
}

function TestimonialCard({
  name,
  age,
  text,
  rating,
  avatarUrl,
  index,
}: TestimonialCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="group relative bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#8FDB00]/30 h-full flex flex-col"
    >
      {/* Decorative gradient border on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#8FDB00]/0 to-[#8FDB00]/0 group-hover:from-[#8FDB00]/5 group-hover:to-[#1C4200]/5 transition-all duration-300 -z-10"></div>

      {/* Quote Icon */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={
          isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }
        }
        transition={{
          duration: 0.5,
          delay: index * 0.1 + 0.2,
          ease: [0.34, 1.56, 0.64, 1],
        }}
        className="text-[#8FDB00]/20 mb-4"
      >
        <Quote className="w-12 h-12" />
      </motion.div>

      {/* Testimonial Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{
          duration: 0.5,
          delay: index * 0.1 + 0.3,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="text-[#1C4200]/80 text-base lg:text-lg leading-relaxed mb-6 flex-1 italic"
      >
        &ldquo;{text}&rdquo;
      </motion.p>

      {/* Rating */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{
          duration: 0.5,
          delay: index * 0.1 + 0.4,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="flex gap-1 mb-6"
      >
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating
                ? "fill-[#8FDB00] text-[#8FDB00]"
                : "fill-gray-200 text-gray-200"
            }`}
          />
        ))}
      </motion.div>

      {/* Author */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{
          duration: 0.5,
          delay: index * 0.1 + 0.5,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="flex items-center gap-4"
      >
        <div className="relative w-14 h-14 overflow-hidden flex-shrink-0 border-2 border-[#8FDB00]/30">
          <Image
            src={avatarUrl}
            alt={name}
            fill
            className="object-cover"
            sizes="56px"
          />
        </div>
        <div>
          <p className="font-semibold text-[#1C4200] text-lg">{name}</p>
          <p className="text-[#1C4200]/60 text-sm">{age} anos</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function TestimonialsSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-50px" });

  const testimonials = [
    {
      name: "Maria Silva",
      age: 42,
      text: "Consegui reformar minha casa com taxas justas e atendimento excepcional.",
      rating: 5,
      avatarUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    },
    {
      name: "João Oliveira",
      age: 35,
      text: "Processo rápido! Em menos de 24h o crédito estava na conta.",
      rating: 5,
      avatarUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    },
    {
      name: "Ana Costa",
      age: 28,
      text: "Consolidei minhas dívidas com uma taxa muito menor. Recomendo!",
      rating: 5,
      avatarUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    },
    {
      name: "Carlos Santos",
      age: 51,
      text: "Consultoria clara, sem empurrar produtos. Excelente atendimento!",
      rating: 5,
      avatarUrl:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    },
  ];

  return (
    <section className="relative w-full flex items-center justify-center bg-[#F9FAFB] py-16 lg:py-24">
      <div className="relative w-full max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={
              isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{
              duration: 0.7,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="text-4xl lg:text-6xl font-semibold text-[#1C4200] mb-6"
          >
            Depoimentos de Clientes Reais
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
            className="text-xl lg:text-2xl text-[#1C4200]/70 max-w-3xl mx-auto"
          >
            Histórias de quem transformou sua vida com a CredCertoBueno
          </motion.p>
        </div>

        {/* Testimonials Swiper */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={32}
            slidesPerView={1}
            navigation={
              typeof window !== "undefined" && window.innerWidth >= 1024
            }
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
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
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="!h-auto !flex">
                <TestimonialCard
                  name={testimonial.name}
                  age={testimonial.age}
                  text={testimonial.text}
                  rating={testimonial.rating}
                  avatarUrl={testimonial.avatarUrl}
                  index={index}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #9ca3af !important;
          background: white;
          width: 36px !important;
          height: 36px !important;
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
        }
      `}</style>
    </section>
  );
}
