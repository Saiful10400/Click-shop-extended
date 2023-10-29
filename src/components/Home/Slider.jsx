import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="w-full h-[22vh] lg:h-[50vh]  object-cover"
            src="https://www.jarir.com/cdn-cgi/image/fit=contain,width=1200,height=auto,quality=85,metadata=none/https://wps-media.jarir.com/wp-content/uploads/2023/10/mb-ksa-111023-samsung-s23-fe-launch-en.jpg"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="w-full h-[22vh] lg:h-[50vh]  object-cover"
            src="https://www.jarir.com/cdn-cgi/image/fit=contain,width=1200,height=auto,quality=85,metadata=none/https://wps-media.jarir.com/wp-content/uploads/2023/10/mb-ksa-161023-macbook-air-en.jpg"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="w-full h-[22vh] lg:h-[50vh]  object-cover"
            src="https://www.jarir.com/cdn-cgi/image/fit=contain,width=1200,height=auto,quality=85,metadata=none/https://wps-media.jarir.com/wp-content/uploads/2023/10/mb-ksa-041023-iphone15-pro-max-en.jpg"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="w-full h-[22vh] lg:h-[50vh]   object-cover"
            src="https://www.jarir.com/cdn-cgi/image/fit=contain,width=1200,height=auto,quality=85,metadata=none/https://wps-media.jarir.com/wp-content/uploads/2023/10/mb-ksa-161023-iphone-spare-parts-en.jpg"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="w-full h-[22vh] lg:h-[50vh]   object-cover"
            src="https://www.jarir.com/cdn-cgi/image/fit=contain,width=1200,height=auto,quality=85,metadata=none/https://wps-media.jarir.com/wp-content/uploads/2023/10/mb-ksa-111023-hp-victus-laptop-160835-en.jpg"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="w-full h-[22vh] lg:h-[50vh]  object-cover"
            src="https://www.jarir.com/cdn-cgi/image/fit=contain,width=1200,height=auto,quality=85,metadata=none/https://wps-media.jarir.com/wp-content/uploads/2023/10/mb-ksa-181023-arts-crafts-sr50-coupon-en.jpg"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="w-full h-[22vh] lg:h-[50vh]  object-cover"
            src="https://www.jarir.com/cdn-cgi/image/fit=contain,width=1200,height=auto,quality=85,metadata=none/https://wps-media.jarir.com/wp-content/uploads/2023/10/mb-ksa-171023-vivo-v29-launch-en.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
