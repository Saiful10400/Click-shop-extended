import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

const SamsungSlider = () => {
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
            src="https://images.vodafone.co.uk/gbnnsauqav4t/6gsXqzWZkKPRpNwBrDVVE5/860a237dafb64ae9c78405d9b4e7a1ae/Standard_banner_template_Content_Size_2combinedSamsungZFoldFlip5-SB-extralarge2x-size2.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[22vh] lg:h-[50vh]  object-cover"
            src="https://www.dalmamall.ae/media/7023/s22-ultra1400x500.png?anchor=center&mode=crop&width=1400&height=500&rnd=132941934620000000&format=webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[22vh] lg:h-[50vh]  object-cover"
            src="https://www.dalmamall.ae/media/3930/s22-ultrapluseco1400x500.png?anchor=center&mode=crop&width=1400&height=500&rnd=132941934150000000&format=webp"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SamsungSlider;
