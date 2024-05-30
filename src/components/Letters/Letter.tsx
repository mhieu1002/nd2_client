import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Image } from "antd";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./letter.scss";
import img from "../../assets/images/thu_cam_on.jpg";
import img2 from "../../assets/images/2.jpg";
import img3 from "../../assets/images/3.jpg";
import img4 from "../../assets/images/4.jpg";
import img5 from "../../assets/images/5.jpg";

type SlideData = {
  imgSrc: string;
  date: string;
  title: string;
};

const slidesData: SlideData[] = [
  { imgSrc: img, date: "28/04/2022", title: "Thư cảm ơn của Mẹ Cháu Hòa" },
  { imgSrc: img2, date: "28/04/2022", title: "Thư cảm ơn của chị Thanh Thủy" },
  { imgSrc: img3, date: "28/04/2022", title: "Thư cảm ơn chị Nguyễn Thị Tươi" },
  { imgSrc: img4, date: "28/04/2022", title: "Thư cảm ơn của Mẹ Cháu Hòa" },
  { imgSrc: img5, date: "28/04/2022", title: "Thư cảm ơn của chị Thanh Thủy" },
];

const Letter: React.FC = () => {
  return (
    <section className="section letter">
      <div className="box letter-box">
        <h2 className="h2">CẢM NHẬN CỦA THÂN NHÂN BỆNH NHI</h2>
        <hr
          style={{
            background:
              "linear-gradient(to right, #228b22, rgba(51, 255, 102, 0))",
          }}
          className="gradient-line"
        />
        <div>
          <Swiper
            style={{ paddingBottom: "36px" }}
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              993: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1201: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            modules={[Pagination]}
          >
            {slidesData.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="letter-list">
                  <Image
                    className="img"
                    src={slide.imgSrc}
                    alt={`Hình ảnh của ${slide.title}`}
                    width="100%"
                    preview={{
                      mask: <span style={{ color: "white" }}>Xem ảnh</span>,
                    }}
                  />
                  <p>{slide.date}</p>
                  <h3>{slide.title}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Letter;
