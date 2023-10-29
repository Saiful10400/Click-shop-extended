import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

const NothingSlider = () => {
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
            src="https://www.tmt.my/data/editor/ROI/nothing%20phone%202_ROI_Banner_tmt.jpg?v=1687948562587"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[22vh] lg:h-[50vh]  object-cover"
            src="https://static.sastodeal.com/media/Sub%20banner%202%20Nothing%20copy%20new%20(2).jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[22vh] lg:h-[50vh]  object-cover"
            src="https://forumstatic.oneplusmobile.com/opforum-gl/upload/image/front/thread/20220712/1390015980452714301/1109073268050493444/1109073268050493444.png"
            alt=""
          />
        </SwiperSlide>
        
      </Swiper>
    </>
  );
};

export default NothingSlider;
