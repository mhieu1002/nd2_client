import React, { useEffect } from "react";
import { ReadOutlined, CaretRightOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import { Spin } from "antd";
import { format } from "date-fns"; // Import format function from date-fns
import { usePosts } from "../../hooks/usePost";

type TPostsDto = {
  title: string;
  content: string;
  thumbnail?: string;
  file?: string;
  isActive: boolean;
  groupCategorySlug: string;
  slug?: string;
  postCategory?: Specialty;
  updatedAt: string;
};

enum Specialty {
  InternalMedicine = "InternalMedicine", // Chuyên khoa nội
  SurgicalSpecialty = "SurgicalSpecialty", // Chuyên khoa ngoại
  ClinicalMedicine = "ClinicalMedicine", // Cận lâm sàng
}

const NewPost: React.FC = () => {
  const location = useLocation();
  const groupCategorySlug = location.pathname.split("/")[2];
  const { posts, refetch, isLoading } = usePosts({
    groupCategorySlug,
  });

  useEffect(() => {
    refetch();
  }, []);

  if (isLoading) {
    return <Spin />;
  }

  // Lọc và sắp xếp các bài viết có isActive là true theo updatedAt mới nhất
  const filteredPosts = posts?.data?.data
    .filter((post: TPostsDto) => post.isActive)
    .sort((a: TPostsDto, b: TPostsDto) =>
      a.updatedAt > b.updatedAt ? -1 : 1
    )
    .slice(0, 6); // Chỉ lấy 6 bài viết mới nhất

  return (
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
          <ReadOutlined /> <span>Bài viết mới</span>
        </p>
      </div>
      <div>
        {filteredPosts.map((post: TPostsDto, index: number) => (
          <div
            style={{ display: "flex", alignItems: "center" }}
            className="hover"
            key={index}
          >
            <Link
              to={`/kham-chua-benh/cac-chuyen-khoa/${post.slug}`}
              style={{ color: "#000" }}
            >
              <p style={{ lineHeight: "1.2" }}>
                <CaretRightOutlined />
                {post.title}
                <strong style={{ marginLeft: "6px", color: "#888888" }}>
                  {format(new Date(post.updatedAt), "dd/MM/yyyy")}{" "}
                </strong>
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewPost;
