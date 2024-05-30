import { useState } from "react";
import { Col, Row, Pagination } from "antd";
import { Link } from "react-router-dom";
import "./service.scss";
import img from "../../../assets/images/1(5).jpg";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Service = () => {
  // Example data array
  const services = new Array(24).fill({
    date: "02/05/2024",
    title: "Dịch vụ chăm sóc bệnh nhân",
    content:
      "Với 06 nội dung chuyên môn liên quan đến Sốt co giật và động kinh ở trẻ em được trình bày bởi các chuyên gia của Liên chi Hội Thần kinh học, Đại học Y Dược TP.HCM, Trường Đại học Y khoa Phạm Ngọc Thạch, Hội thảo Khoa học “Sốt co giật và động kinh” – Hội thảo khoa học thưởng niên của Bệnh viện Nhi đồng 2 dành cho các y bác sĩ sẽ diễn ra vào ngày 04/05/2024.",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 16;

  const currentServices = services.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Dịch vụ nổi bật | Website Bệnh viện nhi đồng 2</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <div className="posts-path">
          <p>
            Trang chủ <i className="fa-solid fa-angles-right"></i>
          </p>
          <p>Dịch Vụ</p>
        </div>
        <div className="posts-box" style={{ backgroundColor: "transparent" }}>
          <div className="fix-none" style={{ marginBottom: "24px" }}>
            <Row gutter={[24, 24]}>
              <Col span={12}>
                <Link to="/:id">
                  <div
                    className="service"
                    style={{
                      backgroundImage: `url("/src/assets/images/1(5).jpg")`,
                    }}
                  >
                    DỊCH VỤ MỔ NỘI SOI PHƯƠNG PHÁP MỚI
                  </div>
                </Link>
              </Col>
              <Col span={12}>
                <Row gutter={[8, 8]}>
                  <Col span={12}>
                    <Link to="/:id">
                      <div
                        className="service-outstanding"
                        style={{
                          backgroundImage: `url("/src/assets/images/1(5).jpg")`,
                        }}
                      >
                        Dịch vụ chăm sóc người bệnh đặc biệt tại nhà
                      </div>
                    </Link>
                  </Col>
                  <Col span={12}>
                    <Link to="/:id">
                      <div
                        className="service-outstanding"
                        style={{
                          backgroundImage: `url("/src/assets/images/_facebook_1504185329625.jpg")`,
                        }}
                      >
                        dịch vụ thẩm mỹ
                      </div>
                    </Link>
                  </Col>
                  <Col span={12}>
                    <Link to="/:id">
                      <div
                        className="service-outstanding"
                        style={{
                          backgroundImage: `url("/src/assets/images/_facebook_1504185329625.jpg")`,
                        }}
                      >
                        dịch vụ mổ nội soi phương pháp mới
                      </div>
                    </Link>
                  </Col>
                  <Col span={12}>
                    <Link to="/:id">
                      <div
                        className="service-outstanding"
                        style={{
                          backgroundImage: `url("/src/assets/images/1(5).jpg")`,
                        }}
                      >
                        Đội ngũ y tế chuyên nghiệp và các dịch vụ
                      </div>
                    </Link>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          <Row gutter={[32, 32]}>
            {currentServices.map((service, index) => (
              <Col
                key={index}
                lg={{ span: 6 }}
                md={{ span: 8 }}
                sm={{ span: 12 }}
              >
                <Link to="/:id">
                  <div className="service-box">
                    <img src={img} alt="Service" />
                    <p className="service-time">{service.date}</p>
                    <p className="service-title">{service.title}</p>
                    <p className="service-content">{service.content}</p>
                  </div>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "12px",
          }}
        >
          <Pagination
            current={currentPage}
            total={services.length}
            pageSize={pageSize}
            showSizeChanger={false}
            onChange={handlePageChange}
          />
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Service;
