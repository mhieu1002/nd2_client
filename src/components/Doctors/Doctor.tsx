import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import img from "../../assets/images/bacsi.jpg";
import img2 from "../../assets/images/bacsi2.jpg";
import img3 from "../../assets/images/bacsi3.jpg";
import img4 from "../../assets/images/bacsi4.jpg";
import img5 from "../../assets/images/bacsi5.jpg";
import img6 from "../../assets/images/bacsi6.jpg";
import "./doctor.scss";

interface Doctor {
  img: string;
  name: string;
  role: string;
}

const doctorsList: Doctor[] = [
  {
    img: img,
    name: "BS. CK2. Nguyễn Thanh Hải",
    role: "Trưởng Khoa Khám Bệnh",
  },
  {
    img: img3,
    name: "BS. CK2. Nguyễn Minh Trí Việt",
    role: "Trưởng Khoa Tim Mạch",
  },
  {
    img: img2,
    name: "BS. CK2. Nguyễn Thanh Thiện",
    role: "Trưởng Khoa Hồi Sức Sơ Sinh",
  },
  { img: img4, name: "GS. Trần Đông A", role: "Cố Vấn Chuyên Môn" },
  {
    img: img5,
    name: "TS. BS. Nguyễn Lê Trung Hiếu",
    role: "Trưởng Khoa Thần Kinh",
  },
  {
    img: img6,
    name: "TS. BS. Nguyễn Văn Lộc",
    role: "Trưởng Khoa Hồi Sức Tích Cực - Chống Độc",
  },
  {
    img: img,
    name: "BS. CK2. Nguyễn Thanh Hải",
    role: "Trưởng Khoa Khám Bệnh",
  },
  {
    img: img3,
    name: "BS. CK2. Nguyễn Minh Trí Việt",
    role: "Trưởng Khoa Tim mạch",
  },
  {
    img: img2,
    name: "BS. CK2. Thái Thị Thanh Thúy",
    role: "Trưởng Khoa Tâm Lý - Vật Lý Trị Liệu",
  },
  { img: img4, name: "GS. Trần Đông A", role: "Cố Vấn Chuyên Môn" },
  {
    img: img5,
    name: "TS. BS. Nguyễn Lê Trung Hiếu",
    role: "Trưởng Khoa Thần Kinh",
  },
  {
    img: img6,
    name: "TS. BS. Trần Thanh Trí",
    role: "Trưởng Khoa Gan - Mật - Tụy Và Ghép Gan",
  },
];

const Doctors = () => {
  return (
    <section className="doctors">
      <h2>ĐỘI NGŨ CHUYÊN GIA</h2>
      <div style={{ padding: "24px 12px" }}>
        <Swiper
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
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
            1201: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
          onSwiper={(swiper) => {
            swiper.el.onmouseover = () => {
              swiper.autoplay.stop();
            };
            swiper.el.onmouseout = () => {
              swiper.autoplay.start();
            };
          }}
          modules={[Autoplay]}
        >
          {doctorsList.map((doctor, index) => (
            <SwiperSlide key={index}>
              <div className="doctors-list">
                <img src={doctor.img} alt={`Hình ảnh của ${doctor.name}`} />
                <h3>{doctor.name}</h3>
                <p>{doctor.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Doctors;
