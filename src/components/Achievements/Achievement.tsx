import React from "react";
import "./achievement.scss";

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
        <i className={icon}></i>
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
      icon: "fa-solid fa-syringe",
      number: "35.000",
      description: "CA PHẪU THUẬT/NĂM",
    },
    {
      icon: "fa-solid fa-stethoscope",
      number: "7.100",
      description: "LƯỢT KHÁM/NGÀY",
    },
    {
      icon: "fa-solid fa-magnifying-glass",
      number: "44",
      description: "CA GHÉP TẠNG",
    },
    {
      icon: "fa-solid fa-users",
      number: "222",
      description: "TIẾN SĨ, THẠC SĨ, BÁC SĨ CHUYÊN KHOA 1, CHUYÊN KHOA 2",
    },
    {
      icon: "fa-solid fa-arrow-up-right-dots",
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
