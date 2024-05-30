import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "./news.scss";

type NewsItemProps = {
  date: string;
  title: string;
  content: string;
  readMore: string;
};

const NewsItem: React.FC<NewsItemProps> = ({
  date,
  title,
  content,
  readMore,
}) => (
  <Link to="/:id">
    <div className="news-list">
      <p className="news-list-time">{date}</p>
      <h3 className="news-list-title">{title}</h3>
      <p className="news-list-content">{content}</p>
      <p className="news-list-check">{readMore}</p>
    </div>
  </Link>
);

type NewsData = {
  date: string;
  title: string;
  content: string;
};

const newsData: NewsData[] = [
  {
    date: "21/04/2024",
    title:
      "Bệnh viện Nhi Đồng 2 nỗ lực phát triển hơn nữa vì bệnh nhi thân yêu",
    content:
      "Đó là nội dung trọng tâm của Hội thảo Nâng cao chất lượng và phát triển bệnh viện Nhi Đồng 2 năm 2024 được tổ chức vào ngày 13-14/4 vừa qua. Với phần thảo luận sôi nổi và trình bày những giải pháp đầy thuyết phục từ các lãnh đạo chủ chốt của bệnh viện về phương hướng phát triển bệnh viện thời gian tới, Ban Giám đốc Bệnh viện Nhi đồng 2 đã có những nhận định, đánh giá, giúp Hội thảo Nâng cao chất lượng và phát triển Bệnh viện Nhi đồng 2 năm 2024 diễn ra thành công tốt đẹp!",
  },
  {
    date: "21/04/2024",
    title: "Thông Báo Số 2 - Hội Thảo 'Sốt Co Giật Và Động Kinh Ở Trẻ Em'",
    content:
      "Về Việc Thay Đổi Ngày Tổ Chức Hội Thảo: “SỐT CO GIẬT VÀ ĐỘNG KINH Ở TRẺ EM”",
  },
  {
    date: "21/04/2024",
    title:
      "Bệnh viện Nhi đồng 2 tiếp Đoàn Lãnh đạo Phường Bến Nghé đến chúc mừng nhân dịp kỷ niệm 69 năm Ngày Thầy thuốc Việt Nam",
    content:
      "Nhân dịp Kỷ niệm 69 năm Ngày Thầy thuốc Việt Nam 27/2/1955-27/2/2024, sáng nay Bệnh viện Nhi đồng 2 đã hân hoan đón tiếp Đoàn Đảng ủy – UBND – UBMT Tổ quốc Việt Nam cùng các đoàn thể phường Bến Nghé do Đ/c Thái Thị Kim Thanh – Quận ủy viên – Bí thư Đảng ủy phường Bến Nghé làm trưởng đoàn đến thăm và chúc mừng.",
  },
];

const News = () => {
  return (
    <section className="section news">
      <div className="box news-box">
        <div className="news-title">
          <h2 className="h2">TIN TỨC</h2>
          <div>
            <Link to="/tin-tuc/tin-chuyen-mon">
              <p>Xem Thêm Tin Tức</p>
            </Link>
            <i className="fa-solid fa-chevron-right"></i>
          </div>
        </div>
        <hr
          style={{
            background:
              "linear-gradient(to right, #cd950c, rgba(51, 255, 102, 0))",
          }}
          className="gradient-line"
        />
        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={true}
            modules={[Pagination]}
            breakpoints={{
              993: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            {newsData.map((news, index) => (
              <SwiperSlide key={index}>
                <NewsItem
                  date={news.date}
                  title={news.title}
                  content={news.content}
                  readMore="Xem thêm"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default News;
