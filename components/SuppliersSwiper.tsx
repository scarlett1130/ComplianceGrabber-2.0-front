import Image from "next/image";
import React from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
function SuppliersSwiper() {
  const Suppliers_LOGOS = ["/about.svg", "/blogDark.svg", "/extension.svg"];
  return (
    <div className="w-full relative  flex flex-col justify-center py-8">
      <div className="flex justify-center pb-14">
        <p className="font-poppins text-4xl text-black">Our Suppliers</p>
      </div>
      <div className="container mx-auto">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={6}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            waitForTransition: false,
            stopOnLastSlide: false,
          }}
          speed={2000}
          spaceBetween={5}
          breakpoints={{
            320: { slidesPerView: 2 },
            768: { slidesPerView: 4 },
            1025: { slidesPerView: 6 },
          }}
          className="swiper-wrapper"
        >
          {Array(16)
            .fill(null)
            .map((logo) => (
              <SwiperSlide key={logo}>
                <Image src="/faqDark.svg" width={80} height={80} alt="ddf" />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}

export default SuppliersSwiper;
