import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

const GoogleSlider = () => {
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
            src="https://www.melbournemobiles.com.au/media/catalog/category/google-banner.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[22vh] lg:h-[50vh]  object-cover"
            src="https://9to5google.com/wp-content/uploads/sites/4/2020/09/google-pixel-5-cover2.jpg?quality=82&strip=all"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[22vh] lg:h-[50vh]  object-cover"
            src="https://everphone.com/wp-content/uploads/2023/01/everphone-google-pixel-6a-magazin-banner-klein2-1024x384.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default GoogleSlider;
