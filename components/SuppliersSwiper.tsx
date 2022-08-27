import Image from "next/image";
import React from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
function SuppliersSwiper() {
  const Suppliers_LOGOS = ["/about.svg", "/blogDark.svg", "/extension.svg"];
  return (
    <div className="w-full relative flex justify-center ">
      <p>dfdfdfdfdfdff</p>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={6}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          waitForTransition: false,
          stopOnLastSlide: false,
        }}
        speed={3000}
        breakpoints={{
          320: { slidesPerView: 2 },
          768: { slidesPerView: 4 },
          1025: { slidesPerView: 6 },
        }}
        className="swiper-wrapper"
      >
        {Suppliers_LOGOS.map((logo) => (
          <SwiperSlide key={logo}>
            <Image src={logo} width={128} height={128} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SuppliersSwiper;
