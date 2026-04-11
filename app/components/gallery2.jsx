'use client';
import React from 'react';    
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import slide1 from './assets/images/img_1.jpg';
import slide2 from './assets/images/img_1.jpg';
import slide3 from './assets/images/img_1.jpg';
import slide4 from './assets/images/img_1.jpg';
import slide5 from './assets/images/img_1.jpg';

export default function Gallery() {

  const images = [slide1, slide2, slide3, slide4, slide5];

  return (
    <section className="py-32 bg-[#F5F1EA]">

      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">

          <p className="text-sm tracking-[0.3em] text-[#6E1F2A] mb-4">
            GALERIE
          </p>

          <h2 className="text-4xl md:text-5xl mb-6">
            Découvrez notre salle
          </h2>

          <div className="h-[2px] w-16 bg-[#C9A45C] mx-auto"></div>

        </div>

        {/* SWIPER */}
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 160,
            modifier: 2.5,
          }}
          pagination={{
            el: '.custom-pagination',
            clickable: true,
          }}
          navigation={{
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="py-16"
        >

          {images.map((img, i) => (
            <SwiperSlide
              key={i}
              className="!w-[420px] md:!w-[520px]"
            >
              <div className="group relative">

                {/* glow */}
                <div className="absolute inset-0 bg-[#C9A45C]/20 blur-3xl opacity-0 group-hover:opacity-100 transition"></div>

                <Image
                  src={img}
                  alt="gallery"
                  className="relative w-full h-[520px] object-cover rounded-2xl shadow-2xl 
                  group-hover:scale-[1.03] transition duration-500"
                />

              </div>
            </SwiperSlide>
          ))}

        </Swiper>

        {/* CONTROLS */}
        <div className="flex justify-center items-center gap-8 mt-10">

          <button className="swiper-prev w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 hover:bg-[#6E1F2A] hover:text-white transition">
            ←
          </button>

          <button className="swiper-next w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 hover:bg-[#6E1F2A] hover:text-white transition">
            →
          </button>

        </div>

        {/* MINI LINE PAGINATION */}
        <div className="custom-pagination flex justify-center gap-2 mt-10"></div>

      </div>

      {/* 🎨 LUXURY LINE PAGINATION STYLE */}
      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          width: 28px;
          height: 2px;
          border-radius: 999px;
          background: #C9A45C33;
          opacity: 1;
          transition: all 0.3s ease;
        }

        .custom-pagination .swiper-pagination-bullet-active {
          width: 50px;
          background: #C9A45C;
        }
      `}</style>

    </section>
  );
}