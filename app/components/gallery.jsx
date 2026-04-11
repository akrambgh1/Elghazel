'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

// images
import slide_image_1 from './assets/images/img_1.jpg';
import slide_image_2 from './assets/images/img_1.jpg';
import slide_image_3 from './assets/images/img_1.jpg';
import slide_image_4 from './assets/images/img_1.jpg';
import slide_image_5 from './assets/images/img_1.jpg';
import slide_image_6 from './assets/images/img_1.jpg';
import slide_image_7 from './assets/images/img_1.jpg';


export default function Gallery() {

  const images = [
    slide_image_1,
    slide_image_2,
    slide_image_3,
    slide_image_4,
    slide_image_5,
    slide_image_6,
    slide_image_7,
  ];

  return (
    <section className="min-h-screen flex items-center justify-center  py-32 bg-[#F5F1EA]">
      <div className="max-w-[124rem] mx-auto px-4 py-16 w-full">

        {/* HEADER */}
        <div className="text-center max-[500px]:!mb-5 mb-15">
          <p className="text-sm tracking-[0.3em] text-[#6E1F2A] mb-4">
            GALERIE
          </p>

          <h2 className="text-4xl md:text-5xl mb-4">
            Découvrez notre salle
          </h2>

          <div className="h-[2px] w-16 bg-[#C9A45C] mx-auto"></div>
        </div>

        {/* SWIPER */}
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 120,
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
          className="relative  py-8 w-[60rem] max-[500px]:!w-[20rem]"
        >

          {images.map((img, i) => (
            <SwiperSlide
              key={i}
              className="!w-[30rem] !h-[32rem] max-[500px]:!w-[28rem] max-[500px]:!h-[36rem]"
            >
              <Image
                src={img}
                alt={`slide-${i}`}
                width={800}
                height={600}
                className="w-full h-full rounded-[0.5rem] object-cover"
              />
            </SwiperSlide>
          ))}

          {/* Controls */}
<div className="custom-pagination flex justify-center gap-2 mt-10"></div>

         <div className="flex justify-center items-center gap-8 mt-10">

          <button className="swiper-prev w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 hover:bg-[#6E1F2A] hover:text-white transition">
            ←
          </button>

          <button className="swiper-next w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 hover:bg-[#6E1F2A] hover:text-white transition">
            →
          </button>

        </div>

        {/* MINI LINE PAGINATION */}

        


        </Swiper>

      </div>

      {/* 🎨 CLEAN LINE PAGINATION STYLE */}
      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          width: 28px;
          height: 2px;
          border-radius: 999px;
          background: #c9a45c33;
          opacity: 1;
          transition: all 0.3s ease;
        }

        .custom-pagination .swiper-pagination-bullet-active {
          width: 50px;
          background: #c9a45c;
        }
      `}</style>
    </section>
  );
}