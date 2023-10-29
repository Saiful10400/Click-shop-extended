import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

const OneplusSlider = () => {
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
            src="https://www.alezay.com/wp-content/uploads/2021/04/ONEPLUS-9-PRO-5G-ALEZAY-KUWAIT-MAIN-BANNER.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[22vh] lg:h-[50vh]  object-cover"
            src="https://www.themobileindian.com/wp-content/uploads/2021/06/1578289-3437ad5818fcc7d67a57724486945670.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[22vh] lg:h-[50vh]  object-cover"
            src="https://www.penguin.com.bd/wp-content/uploads/2019/06/OnePlus-Pro-Banner-1.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default OneplusSlider;
