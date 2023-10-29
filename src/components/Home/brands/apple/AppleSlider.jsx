import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

const AppleSlider = () => {
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
            src="https://www.bigcmobiles.com/media/slidebanner/1/5/15_pro_dasara_banner.jpeg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[22vh] lg:h-[50vh]  object-cover"
            src="https://ishop.com.gh/images/fpslide/wslider01_iPhone_14_iPhone_14_plus_Family.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[22vh] lg:h-[50vh]  object-cover"
            src="https://about.att.com/ecms/dam/snr/2020/November2020/StoryLevelBanner/11042020_iPhoneProMax_STORY_LEVEL_BANNER_1600x483.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default AppleSlider;
