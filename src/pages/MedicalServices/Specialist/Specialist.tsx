import React, { useState, useEffect } from "react";
import { Col, Row, Pagination } from "antd";
import { Link, useNavigate } from "react-router-dom";
import SideBar from "../../../components/SideBar";
import "./specialist.scss";
import { Helmet, HelmetProvider } from "react-helmet-async";

interface SpecialistProps {
  specialty: string;
}

const Specialist = ({ specialty }: SpecialistProps) => {
  const navigate = useNavigate();
  const posts = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    date: "30/04/2024",
    specialty: ["Chuyên khoa ngoại", "Chuyên khoa nội", "Cận lâm sàng"][i % 3],
    title: `Bài viết ${i + 1}`,
    content: "Nội dung bài viết",
  }));
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    setCurrentPage(1);
  }, [specialty]);

  const filteredPosts = posts.filter(
    (post) => post.specialty === specialty || specialty === "all"
  );
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const getTitle = () => {
    if (specialty === "Chuyên khoa ngoại") {
      return "Chuyên khoa ngoại | Website Bệnh viện nhi đồng 2";
    }
    if (specialty === "Chuyên khoa nội") {
      return "Chuyên khoa nội | Website Bệnh viện nhi đồng 2";
    }
    if (specialty === "Cận lâm sàng") {
      return "Cận lâm sàng | Website Bệnh viện nhi đồng 2";
    }
    return "Các chuyên khoa | Website Bệnh viện nhi đồng 2";
  };
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{getTitle()}</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <div className="posts-path">
          <p>
            Trang chủ <i className="fa-solid fa-angles-right"></i>
          </p>
          <p>Các chuyên khoa</p>
        </div>
        <div className="posts-box" style={{ backgroundColor: "transparent" }}>
          <h2 style={{ marginBottom: "16px", letterSpacing: "2px" }}>
            CÁC CHUYÊN KHOA
          </h2>
          <div style={{ display: "flex" }}>
            <div className="w-100" style={{ width: "75%" }}>
              <Row gutter={[32, 16]}>
                <Col span={8}>
                  <div
                    className="specialist-button"
                    onClick={() =>
                      navigate(
                        "/kham-chua-benh/cac-chuyen-khoa/chuyen-khoa-ngoai"
                      )
                    }
                  >
                    Chuyên khoa ngoại
                  </div>
                </Col>
                <Col span={8}>
                  <div
                    className="specialist-button"
                    onClick={() =>
                      navigate(
                        "/kham-chua-benh/cac-chuyen-khoa/chuyen-khoa-noi"
                      )
                    }
                  >
                    Chuyên khoa nội
                  </div>
                </Col>
                <Col span={8}>
                  <div
                    className="specialist-button"
                    onClick={() =>
                      navigate("/kham-chua-benh/cac-chuyen-khoa/can-lam-sang")
                    }
                  >
                    Cận lâm sàng
                  </div>
                </Col>
              </Row>
              <div>
                {currentPosts.map((post) => (
                  <Link to="/:id" key={post.id} style={{ color: "#000" }}>
                    <div className="specialist-box">
                      <p
                        style={{
                          fontSize: "12px",
                          color: "#808080",
                          marginBottom: "0.5rem",
                        }}
                      >
                        {post.date}
                      </p>
                      <p style={{ fontWeight: "700", marginBottom: "0.5rem" }}>
                        {post.title}
                      </p>
                      <p className="specialist-content">{post.content}</p>
                    </div>
                  </Link>
                ))}
                <Pagination
                  style={{ marginTop: "12px" }}
                  current={currentPage}
                  onChange={handlePageChange}
                  total={filteredPosts.length}
                  pageSize={pageSize}
                  showSizeChanger={false}
                />
              </div>
            </div>
            <div className="none" style={{ width: "25%", marginLeft: "12px" }}>
              <SideBar />
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Specialist;
