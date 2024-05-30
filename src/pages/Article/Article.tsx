import { Image } from "antd";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ClockCircleOutlined,
  EyeOutlined,
  ReadOutlined,
  CaretRightOutlined,
} from "@ant-design/icons";
import SideBar from "../../components/SideBar";

const sections = [
  {
    paragraphs: [
      <>
        Vào năm 1862, Quân đội Pháp thành lập <strong>Bệnh viện Quân sự</strong>{" "}
        (Tiếng Pháp là Hôpital militaire) khi họ mới xâm chiếm Nam Kỳ. Cơ sở này
        vào cuối thập niên 1870 chuyển về số 14 rue Lagrandière, tức địa điểm
        hiện nay (14 Lý Tự Trọng, P. Bến Nghé, Q.1, TP.HCM).
      </>,
    ],
    images: [
      "/src/assets/images/Grall-Hospital.jpg",
      "/src/assets/images/41_Pano_trien lam 4 the ky Phap - Viet -FINAL-061(1).jpg",
      "/src/assets/images/sdsds(1).jpg",
      "/src/assets/images/1(5).jpg",
    ],
  },
  {
    paragraphs: [
      <>
        Tại cơ sở này nhà bác học Albert Calmette đã thành lập Viện Pasteur
        (Pasteur-Institut) đầu tiên ở ngoài nước Pháp vào năm 1891.
      </>,
    ],
    images: ["/src/assets/images/D4wdmhC.jpg"],
  },
  {
    paragraphs: [
      <>
        Cấu trúc các tòa nhà trong khuôn viên đều là sườn sắt tiền chế đem ráp
        lại trên nền bằng đá. Mọi vật liệu được mang từ Pháp sang.
      </>,
    ],
    images: [
      "/src/assets/images/_facebook_1504185329625.jpg",
      "/src/assets/images/20_big.jpg",
    ],
  },
  {
    paragraphs: [
      <>
        Từ năm 1905 trở đi cơ sở y tế này dưới sự điều hành của bác sĩ Charles
        Grall đã mở cửa chữa trị cho mọi thành phần, quân sự cũng như dân sự kể
        cả dân bản xứ.
      </>,
    ],
    images: ["/src/assets/images/15115771056_89d8a692ce_o.jpg"],
  },
  {
    paragraphs: [
      <>
        - Năm 1925, Bệnh viện Quân sự chính thức đổi tên thành{" "}
        <strong>"Bệnh viện Grall"</strong>
        để vinh danh Giám đốc Y tế Nam Kỳ (bác sĩ Charles Grall).
      </>,
    ],
    images: ["/src/assets/images/15138793245_e7e31fbe63_o.jpg"],
  },
  {
    paragraphs: [
      <>
        - Tháng 4/1945 (thời Đệ Nhị Thế chiến) bệnh viện bị trúng bom, phá sập
        mé phía bắc, tiêu hủy các phòng thí nghiệm.
      </>,
      <>
        - Năm 1956, dưới chính thể Việt Nam Cộng Hòa, chính phủ Pháp ký biên bản
        tiếp tục điều hành Bệnh viện Grall, thuộc Bộ ngoại giao Pháp (Bệnh viện
        có 560 giường).
      </>,
    ],
    images: ["/src/assets/images/uyuy.jpg"],
  },
  {
    paragraphs: [
      <>
        - Năm 1976, Người Pháp rút đi, Bệnh viện Grall được chuyển giao cho nhà
        chức trách Cộng hòa Xã hội Chủ nghĩa Việt Nam.
      </>,
      <>
        - Năm 1978, Bệnh viện Grall đổi tên thành{" "}
        <strong>Bệnh viện Nhi đồng 2</strong> và trở thành bệnh viện chuyên khoa
        Nhi phụ trách khám và điều trị bệnh cho các bé từ 0 đến dưới 16 tuổi.
      </>,
    ],
    images: ["/src/assets/images/BV-nhi-dong.jpg"],
  },
];

const announcements = [
  {
    id: "1",
    date: "28/05/2024",
    text: "Chào mừng 134 năm ngày sinh Chủ tịch Hồ Chí Minh: Bệnh viện Nhi đồng 2 tổ chức chuyến về nguồn, thực hiện khám, chữa bệnh nhân đạo và trao quà đến 600 trẻ em huyện Côn Đảo, tỉnh Bà Rịa – Vũng Tàu",
  },
  {
    id: "2",
    date: "29/05/2024",
    text: "Phối hợp chương trình “Ước mơ của Thuý” trao hỗ trợ viện phí đến bệnh nhi khoa Ung bướu huyết học",
  },
  {
    id: "3",
    date: "30/05/2024",
    text: "Trách nhiệm của người lao động trong việc bảo đảm an toàn, vệ sinh lao động tại nơi làm việc",
  },
  {
    id: "4",
    date: "31/05/2024",
    text: "Thông Báo Về Việc Mời Chào Giá Hàng Hóa Thuộc Danh Mục Thuốc Mua Sắm Năm 2024-2025 (Đợt 1) Của Bệnh Viện Nhi Đồng 2",
  },
  {
    id: "5",
    date: "01/06/2024",
    text: "Thông Báo Kết Quả Kỳ Thi Tuyển Dụng Viên Chức Năm 2024 Tại Bệnh Viện Nhi Đồng 2",
  },
];

const Article = () => {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>| Website Bệnh viện nhi đồng 2</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <div
          className="posts-box"
          style={{ display: "flex", backgroundColor: "transparent" }}
        >
          <div
            className="witdh-lg-100"
            style={{
              width: "75%",
              backgroundColor: "#fff",
              padding: "12px",
              borderRadius: "12px",
            }}
          >
            <h1
              style={{ fontWeight: "700", fontSize: "24px", lineHeight: "1.2" }}
            >
              Chào mừng 134 năm ngày sinh Chủ tịch Hồ Chí Minh: Bệnh viện Nhi
              đồng 2 tổ chức chuyến về nguồn, thực hiện khám, chữa bệnh nhân đạo
              và trao quà đến 600 trẻ em huyện Côn Đảo, tỉnh Bà Rịa – Vũng Tàu
            </h1>
            <div
              style={{
                display: "flex",
                borderTop: "1px solid #DDDDDD",
                borderBottom: "1px solid #DDDDDD",
                padding: "10px 0",
                marginBottom: "16px",
              }}
            >
              <p
                style={{
                  marginBottom: "0",
                  color: "#555555",
                  fontSize: "14px",
                }}
              >
                <ClockCircleOutlined /> <span>23/05/2024</span>
              </p>
              <p
                style={{
                  marginLeft: "12px",
                  marginBottom: "0",
                  color: "#555555",
                  fontSize: "14px",
                }}
              >
                <EyeOutlined /> <span>1000</span> lượt xem
              </p>
            </div>
            {sections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                {section.paragraphs.map((paragraph, paragraphIndex) => (
                  <p className="p-text" key={paragraphIndex}>
                    {paragraph}
                  </p>
                ))}
                {section.images.map((image, imageIndex) => (
                  <div className="flex-box" key={imageIndex}>
                    <Image
                      src={image}
                      width="80%"
                      preview={{
                        mask: <span style={{ color: "white" }}>Xem ảnh</span>,
                      }}
                    />
                  </div>
                ))}
              </div>
            ))}
            <div style={{ paddingTop: "12px", paddingRight: "30px" }}>
              <p
                style={{
                  fontWeight: 500,
                  fontSize: "16px",
                  textAlign: "right",
                  marginBottom: "24px",
                }}
              >
                Đăng bởi: <strong>Bệnh viện nhi đồng 2</strong>
              </p>
              <div className="sharethis-inline-share-buttons"></div>
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  borderTop: "1px solid #DDDDDD",
                  borderBottom: "1px solid #DDDDDD",
                  padding: "10px 0",
                  marginBottom: "16px",
                  marginTop: "32px",
                }}
              >
                <p
                  style={{
                    marginBottom: "0",
                    color: "#555555",
                    fontSize: "15px",
                    fontWeight: "700",
                  }}
                >
                  <ReadOutlined /> <span>Bài viết liên quan</span>
                </p>
              </div>
              <div>
                {announcements.map((announcement) => (
                  <div
                    style={{ display: "flex", alignItems: "center" }}
                    className="hover"
                    key={announcement.id}
                  >
                    <Link to="/:id" style={{ color: "#000" }}>
                      <p style={{ lineHeight: "1.2" }}>
                        <CaretRightOutlined />
                        {announcement.text}
                        <strong style={{ marginLeft: "6px", color: "#888888" }}>
                          {announcement.date}
                        </strong>
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className="witdh-lg-none"
            style={{ width: "25%", marginLeft: "12px" }}
          >
            <SideBar />
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Article;
