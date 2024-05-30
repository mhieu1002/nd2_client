import banner1 from "../../assets/images/banner1.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import "./carousel.scss";

const CustomCarousel = () => {
  return (
    <div className="carousel">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide> 
          <img src={banner1} alt="Bệnh viện Nhi Đồng 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner1} alt="Bệnh viện Nhi Đồng 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner1} alt="Bệnh viện Nhi Đồng 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner1} alt="Bệnh viện Nhi Đồng 2" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CustomCarousel;
