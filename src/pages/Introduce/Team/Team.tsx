import React, { useState } from "react";
import { Input } from "antd";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import img from "../../../assets/images/bacsi.jpg";
import img2 from "../../../assets/images/bacsi2.jpg";
import img3 from "../../../assets/images/bacsi3.jpg";
import img4 from "../../../assets/images/bacsi4.jpg";
import img5 from "../../../assets/images/bacsi5.jpg";
import img6 from "../../../assets/images/bacsi6.jpg";
import { Helmet, HelmetProvider } from "react-helmet-async";

import { Grid, Pagination } from "swiper/modules";

const { Search } = Input;

const specialties = [
  {
    title: "Chuyên khoa nội",
    doctors: [
      {
        name: "BS. CK2. Nguyễn Thanh Hải",
        title: "Trưởng Khoa Khám Bệnh",
        img: img,
      },
      {
        name: "BS. CK2. Nguyễn Thanh Thiện",
        title: "Trưởng Khoa Hồi Sức Sơ Sinh",
        img: img2,
      },
      {
        name: "BS. CK2. Nguyễn Minh Trí Việt",
        title: "Trưởng Khoa Tim Mạch",
        img: img3,
      },
      {
        name: "GS. Trần Đông A",
        title: "Cố Vấn Chuyên Môn",
        img: img4,
      },
      {
        name: "TS. BS. Nguyễn Lê Trung Hiếu",
        title: "Trưởng Khoa Thần Kinh",
        img: img5,
      },
      {
        name: "TS. BS. Nguyễn Văn Lộc",
        title: "Trưởng Khoa Hồi Sức Tích Cực - Chống Độc",
        img: img6,
      },
      {
        name: "BS. CK2. Nguyễn Thanh Hải",
        title: "Trưởng Khoa Khám Bệnh",
        img: img,
      },
      {
        name: "BS. CK2. Nguyễn Thanh Thiện",
        title: "Trưởng Khoa Hồi Sức Sơ Sinh",
        img: img2,
      },
      {
        name: "BS. CK2. Nguyễn Minh Trí Việt",
        title: "Trưởng Khoa Tim Mạch",
        img: img3,
      },
    ],
  },
  {
    title: "Chuyên khoa ngoại",
    doctors: [
      {
        name: "BS. CK2. Nguyễn Thanh Hải",
        title: "Trưởng Khoa Khám Bệnh",
        img: img,
      },
      {
        name: "BS. CK2. Nguyễn Thanh Thiện",
        title: "Trưởng Khoa Hồi Sức Sơ Sinh",
        img: img2,
      },
      {
        name: "BS. CK2. Nguyễn Minh Trí Việt",
        title: "Trưởng Khoa Tim Mạch",
        img: img3,
      },
      {
        name: "GS. Trần Đông A",
        title: "Cố Vấn Chuyên Môn",
        img: img4,
      },
      {
        name: "TS. BS. Nguyễn Lê Trung Hiếu",
        title: "Trưởng Khoa Thần Kinh",
        img: img5,
      },
      {
        name: "TS. BS. Nguyễn Văn Lộc",
        title: "Trưởng Khoa Hồi Sức Tích Cực - Chống Độc",
        img: img6,
      },
      {
        name: "BS. CK2. Nguyễn Thanh Hải",
        title: "Trưởng Khoa Khám Bệnh",
        img: img,
      },
    ],
  },
  {
    title: "Cận lâm sàng",
    doctors: [
      {
        name: "BS. CK2. Nguyễn Thanh Hải",
        title: "Trưởng Khoa Khám Bệnh",
        img: img,
      },
      {
        name: "BS. CK2. Nguyễn Thanh Thiện",
        title: "Trưởng Khoa Hồi Sức Sơ Sinh",
        img: img2,
      },
      {
        name: "BS. CK2. Nguyễn Minh Trí Việt",
        title: "Trưởng Khoa Tim Mạch",
        img: img3,
      },
      {
        name: "GS. Trần Đông A",
        title: "Cố Vấn Chuyên Môn",
        img: img4,
      },
      {
        name: "TS. BS. Nguyễn Lê Trung Hiếu",
        title: "Trưởng Khoa Thần Kinh",
        img: img5,
      },
    ],
  },
];

const Team = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = (value: string) => {
    setSearchQuery(value.toLowerCase());
    console.log(searchQuery);
  };
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Đội ngũ chuyên gia | Website Bệnh viện nhi đồng 2</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <div className="posts-path">
          <Link to="/" style={{ color: "#000" }}>
            <p>
              Trang Chủ <i className="fa-solid fa-angles-right"></i>
            </p>
          </Link>
          <p style={{ fontWeight: "700" }}>Đội Ngũ Chuyên Gia</p>
        </div>
        <div className="posts-box">
          <Search
            placeholder="Nhập tên bác sĩ bạn cần tìm"
            allowClear
            onSearch={handleSearch}
            style={{ width: "100%" }}
            className="placeholder"
          />
          {specialties.map((specialty, index) => {
            const filteredDoctors = specialty.doctors.filter((doctor) => {
              const searchTerms = searchQuery.split(" ");
              return searchTerms.every((term) =>
                doctor.name.toLowerCase().includes(term)
              );
            });

            if (filteredDoctors.length === 0) return null;

            return (
              <div key={index}>
                <h2
                  style={{
                    marginTop: "24px",
                    marginLeft: "12px",
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "#1c86ee",
                  }}
                >
                  {specialty.title}
                </h2>
                <Swiper
                  style={{ paddingBottom: "16px" }}
                  slidesPerView={1}
                  grid={{ rows: 1 }}
                  breakpoints={{
                    769: { slidesPerView: 3, grid: { rows: 1 } },
                    993: { slidesPerView: 3, grid: { rows: 2 } },
                    1201: { slidesPerView: 4, grid: { rows: 2 } },
                  }}
                  spaceBetween={30}
                  pagination={true}
                  modules={[Grid, Pagination]}
                >
                  {filteredDoctors.map((doctor, idx) => (
                    <SwiperSlide key={idx}>
                      <div
                        className="doctors-list"
                        style={{ marginBottom: "12px" }}
                      >
                        <img src={doctor.img} alt={doctor.name} />
                        <h3>{doctor.name}</h3>
                        <p>{doctor.title}</p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            );
          })}
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Team;
