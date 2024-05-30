import { Pagination } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import img from "../../../../assets/images/1(5).jpg";
import SideBar from "../../../../components/SideBar/SideBar";
import { Helmet, HelmetProvider } from "react-helmet-async";

const HealthCare = () => {
  const posts = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    date: "30/04/2024",
    title: `Bài viết ${i + 1}`,
    content: "Nội dung bài viết",
  }));
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentPosts = posts.slice(startIndex, endIndex);

  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Bảng giá khám chữa bệnh | Website Bệnh viện nhi đồng 2</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <div className="posts-path">
          <Link to="/" style={{ color: "#000" }}>
            <p>
              Trang Chủ <i className="fa-solid fa-angles-right"></i>
            </p>
          </Link>
          <p style={{ fontWeight: "700" }}>Bảng Giá Khám Chữa Bệnh</p>
        </div>
        <div className="posts-box" style={{ backgroundColor: "transparent" }}>
          <h2 style={{ marginBottom: "16px", letterSpacing: "2px" }}>
            BẢNG GIÁ KHÁM CHỮA BỆNH
          </h2>
          <hr
            style={{
              background:
                "linear-gradient(to right, #228b22, rgba(51, 255, 102, 0))",
              width: "75%",
            }}
            className="gradient-line"
          />
          <div style={{ display: "flex" }}>
            <div className="w-100" style={{ width: "75%" }}>
              <div>
                {currentPosts.map((post, index) => (
                  <Link to="/:id" key={index}>
                    <div className="box-list" key={post.id}>
                      <div className="box-list-img">
                        <img src={img} />
                      </div>
                      <div className="box-list-content">
                        <p className="box-list-content-date">{post.date}</p>
                        <p className="box-list-content-title">{post.title}</p>
                        <p className="box-list-content-summary">
                          {post.content}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
                <Pagination
                  style={{ marginTop: "12px" }}
                  current={currentPage}
                  onChange={handlePageChange}
                  total={posts.length}
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

export default HealthCare;
