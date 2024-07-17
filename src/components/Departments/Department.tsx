import React, { useState } from "react";
import { Col, Row } from "antd";
import "swiper/css";
import "./department.scss";
import { Link } from "react-router-dom";

type DepartmentButtonProps = {
  iconClassName: string;
  label: string;
  bgColorClass: string;
  path: string;
};

type Department = {
  title: string;
  items: { name: string; link: string }[];
};

const DepartmentButton: React.FC<DepartmentButtonProps> = ({
  iconClassName,
  label,
  bgColorClass,
  path,
}) => (
  <Link to={path}>
    <div className={`department-buttons ${bgColorClass}`}>
      <div className="department-border">
        <div className="department-button">
          <i className={iconClassName}></i>
          <p>{label}</p>
        </div>
      </div>
    </div>
  </Link>
);

const buttonData: DepartmentButtonProps[] = [
  {
    iconClassName: "fa-regular fa-clock",
    label: "LỊCH KHÁM",
    bgColorClass: "bg-orange",
    path: "/kham-chua-benh/lich-kham-benh-tai-kham",
  },
  {
    iconClassName: "fa-regular fa-newspaper",
    label: "BẢNG GIÁ",
    bgColorClass: "bg-blue ",
    path: "/kham-chua-benh/bang-gia-kham-chua-benh",
  },
  {
    iconClassName: "fa-regular fa-heart",
    label: "CHIA SẺ YÊU THƯƠNG",
    bgColorClass: "bg-red",
    path: "/tin-tuc/chia-se-yeu-thuong",
  },
  {
    iconClassName: "fa-regular fa-circle-question",
    label: "HƯỚNG DẪN",
    bgColorClass: "bg-green",
    path: "/kham-chua-benh/thu-tuc-kham-benh",
  },
];

const departments: Department[] = [
  {
    title: "CHUYÊN KHOA NỘI",
    items: [
      { name: "Tiêu hoá", link: "/tin-tuc/cong-doan/cong-doan-benh-vien-nhi-dong-2-quyet-tam-vi-moi-truong-benh-vien-an-toan,-khong-khoi-thuoc-P7em7r" },
      { name: "Dinh Dưỡng", link: "/dinh-duong" },
      { name: "Tim mạch", link: "/tim-mach" },
      { name: "Hô hấp", link: "/ho-hap" },
      { name: "Sơ sinh", link: "/so-sinh" },
      { name: "Tâm lý", link: "/tam-ly" },
      { name: "Vật lý trị liệu", link: "/vat-ly-tri-lieu" },
    ],
  },
  {
    title: "CHUYÊN KHOA NGOẠI",
    items: [
      { name: "Ngoại tổng hợp", link: "/ngoai-tong-hop" },
      { name: "Ngoại thần kinh", link: "/ngoai-than-kinh" },
      { name: "Bỏng - Chỉnh trực", link: "/bong-chinh-truc" },
      { name: "Thận niệu", link: "/than-nieu" },
      { name: "Gan - Mật - Tuỵ và Ghép gan", link: "/gan-mat-tuy-va-ghep-gan" },
      { name: "Liên chuyên khoa", link: "/lien-chuyen-khoa" },
      {
        name: "Hồi sức tích cực và chống độc",
        link: "/hoi-suc-tich-cuc-va-chong-doc",
      },
    ],
  },
  {
    title: "CẬN LÂM SÀNG",
    items: [
      { name: "Chẩn đoán hình ảnh", link: "/chan-doan-hinh-anh" },
      { name: "Vi sinh", link: "/vi-sinh" },
      { name: "Hoá sinh", link: "/hoa-sinh" },
      { name: "Xét nghiệm huyết học", link: "/xet-nghiem-huyet-hoc" },
      { name: "Giải phẩu bệnh", link: "/giai-phau-benh" },
      { name: "Dược", link: "/duoc" },
      { name: "Kiểm soát nhiễm khuẩn", link: "/kiem-soat-nhiem-khuan" },
    ],
  },
];

const Department = () => {
  const [activeDivs, setActiveDivs] = useState<string[]>([]);

  const toggleActive = (title: string) => {
    setActiveDivs((prevActiveDivs) => {
      if (prevActiveDivs.includes(title)) {
        return prevActiveDivs.filter((t) => t !== title);
      } else {
        return [...prevActiveDivs, title];
      }
    });
  };

  const DepartmentColumn: React.FC<Department> = ({ title, items }) => (
    <Col md={{ span: 8 }} sm={{ span: 24 }} xs={{ span: 24 }}>
      <div
        className={`department-department ${
          activeDivs.includes(title) ? "active" : ""
        }`}
        onClick={() => toggleActive(title)}
      >
        <h3>{title}</h3>
        {items.map((item) => (
          <Link to={item.link} className="link-list" key={item.name}>
            <p>{item.name}</p>
          </Link>
        ))}
      </div>
    </Col>
  );
  return (
    <section className="section department">
      <div className="department-fix">
        {buttonData.map((button, index) => (
          <DepartmentButton {...button} key={index} />
        ))}
      </div>
      <div className="box department-quick">
        <div className="department-list-button">
          <Row gutter={[8, 24]}>
            {buttonData.map((button, index) => (
              <Col key={index} span={12}>
                <DepartmentButton {...button} />
              </Col>
            ))}
          </Row>
        </div>
        <div className="department-departments">
          <h2 className="h2">CHUYÊN KHOA</h2>
          <hr
            style={{
              background:
                "linear-gradient(to right, #ee6aa7, rgba(51, 255, 102, 0))",
            }}
            className="gradient-line"
          />
          <div className="department-container">
            <Row gutter={[8, 8]}>
              {departments.map((dept) => (
                <DepartmentColumn key={dept.title} {...dept} />
              ))}
            </Row>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Department;
