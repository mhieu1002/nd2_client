import React from "react";
import "./achievement.scss";
import img from "../../assets/images/frontp9_2_1.png";
import img2 from "../../assets/images/frontp9_2_2.png";
import img3 from "../../assets/images/frontp9_2_4.png";
import img4 from "../../assets/images/frontp9_2_5.png";
import img5 from "../../assets/images/frontp9_2_6.png";

interface AchievementListItemProps {
  icon: string;
  number: string;
  description: string;
}

const AchievementListItem: React.FC<AchievementListItemProps> = ({
  icon,
  number,
  description,
}) => {
  return (
    <div className="achievement-list-item">
      <div>
        <img src={icon} />
      </div>
      <h1>{number}</h1>
      <hr style={{ width: "50%" }} />
      <p>{description}</p>
    </div>
  );
};

const Achievement: React.FC = () => {
  const items = [
    {
      icon: img2,
      number: "35.000",
      description: "CA PHẪU THUẬT/NĂM",
    },
    {
      icon: img,
      number: "7.100",
      description: "LƯỢT KHÁM/NGÀY",
    },
    {
      icon: img4,
      number: "44",
      description: "CA GHÉP TẠNG",
    },
    {
      icon: img3,
      number: "222",
      description: "TIẾN SĨ, THẠC SĨ, BÁC SĨ CHUYÊN KHOA 1, CHUYÊN KHOA 2",
    },
    {
      icon: img5,
      number: "44",
      description: "NĂM HÌNH THÀNH VÀ PHÁT TRIỂN",
    },
  ];
  return (
    <section className="section achievement">
      <div className="achievement-list">
        {items.map((item, index) => (
          <AchievementListItem
            key={index}
            icon={item.icon}
            number={item.number}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Achievement;
