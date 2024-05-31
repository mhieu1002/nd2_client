import React from "react";
import "./achievement.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import img from "../../assets/images/frontp9_2_1.png";
import img2 from "../../assets/images/frontp9_2_2.png";
import img3 from "../../assets/images/frontp9_2_4.png";
import img4 from "../../assets/images/frontp9_2_5.png";
import img5 from "../../assets/images/frontp9_2_6.png";

const Achievement: React.FC = () => {
  const items = [
    {
      icon: img2,
      number: "35.000",
      description: "CA PHẪU THUẬT/NĂM",
    },
    {
      icon: img,
      number: "7.100",
      description: "LƯỢT KHÁM/NGÀY",
    },
    {
      icon: img4,
      number: "44",
      description: "CA GHÉP TẠNG",
    },
    {
      icon: img3,
      number: "222",
      description: "TIẾN SĨ, THẠC SĨ, BÁC SĨ CHUYÊN KHOA 1, CHUYÊN KHOA 2",
    },
    {
      icon: img5,
      number: "44",
      description: "NĂM HÌNH THÀNH VÀ PHÁT TRIỂN",
    },
  ];
  return (
    <section className="section achievement">
      <div className="achievement-list">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            769: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            993: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="achievement-list-item">
                <div>
                  <img src={item.icon} />
                </div>
                <h1>{item.number}</h1>
                <hr
                  style={{
                    width: "50%",
                  }}
                />
                <p>{item.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Achievement;
