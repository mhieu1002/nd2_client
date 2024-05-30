import React from "react";
import "./sideBar.scss";
import img from "../../assets/images/1(5).jpg";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-first">
        <div className="sidebar-title">THỜI GIAN LÀM VIỆC</div>
        <div className="sidebar-content">
          <p>HÀNH CHÍNH: 7H00 - 16H30 (THỨ 2 - 6)</p>
          <p>KHÁM & CẤP CỨU: 24/24</p>
        </div>
      </div>
      <div>
        <div className="sidebar-second">
          <div className="sidebar-box">
            <p style={{marginBottom: "0", fontSize: "14px"}}>TIN TỨC XEM NHIỀU NHẤT</p>
          </div>
          <Link to="/:id">
            <div className="sidebar-box-item">
              <div style={{ width: "40%" }}>
                <img src={img} />
              </div>
              <div style={{ marginLeft: "6px", width: "60%" }}>
                <p style={{ color: "#808080", fontSize: "11px" }}>30/04/2024</p>
                <p className="sidebar-box-content">
                  Bảng giá các loại tại phòng khám ngoài giờ
                </p>
              </div>
            </div>
          </Link>
          <Link to="/:id">
            <div className="sidebar-box-item">
              <div style={{ width: "40%" }}>
                <img src={img} />
              </div>
              <div style={{ marginLeft: "6px", width: "60%" }}>
                <p style={{ color: "#808080", fontSize: "11px" }}>30/04/2024</p>
                <p className="sidebar-box-content">
                  Bảng giá các loại tại phòng khám ngoài giờ
                </p>
              </div>
            </div>
          </Link>
          <Link to="/:id">
            <div className="sidebar-box-item">
              <div style={{ width: "40%" }}>
                <img src={img} />
              </div>
              <div style={{ marginLeft: "6px", width: "60%" }}>
                <p style={{ color: "#808080", fontSize: "11px" }}>30/04/2024</p>
                <p className="sidebar-box-content">
                  Bảng giá các loại tại phòng khám ngoài giờ
                </p>
              </div>
            </div>
          </Link>
          <Link to="/:id">
            <div className="sidebar-box-item">
              <div style={{ width: "40%" }}>
                <img src={img} />
              </div>
              <div style={{ marginLeft: "6px", width: "60%" }}>
                <p style={{ color: "#808080", fontSize: "11px" }}>30/04/2024</p>
                <p className="sidebar-box-content">
                  Bảng giá các loại tại phòng khám ngoài giờ
                </p>
              </div>
            </div>
          </Link>
          <Link to="/:id">
            <div className="sidebar-box-item">
              <div style={{ width: "40%" }}>
                <img src={img} />
              </div>
              <div style={{ marginLeft: "6px", width: "60%" }}>
                <p style={{ color: "#808080", fontSize: "11px" }}>30/04/2024</p>
                <p className="sidebar-box-content">
                  Bảng giá các loại tại phòng khám ngoài giờ
                </p>
              </div>
            </div>
          </Link>
          <Link to="/:id">
            <div className="sidebar-box-item">
              <div style={{ width: "40%" }}>
                <img src={img} />
              </div>
              <div style={{ marginLeft: "6px", width: "60%" }}>
                <p style={{ color: "#808080", fontSize: "11px" }}>30/04/2024</p>
                <p className="sidebar-box-content">
                  Bảng giá các loại tại phòng khám ngoài giờ
                </p>
              </div>
            </div>
          </Link>
          <Link to="/:id">
            <div className="sidebar-box-item">
              <div style={{ width: "40%" }}>
                <img src={img} />
              </div>
              <div style={{ marginLeft: "6px", width: "60%" }}>
                <p style={{ color: "#808080", fontSize: "11px" }}>30/04/2024</p>
                <p className="sidebar-box-content">
                  Bảng giá các loại tại phòng khám ngoài giờ
                </p>
              </div>
            </div>
          </Link>
          <Link to="/:id">
            <div className="sidebar-box-item">
              <div style={{ width: "40%" }}>
                <img src={img} />
              </div>
              <div style={{ marginLeft: "6px", width: "60%" }}>
                <p style={{ color: "#808080", fontSize: "11px" }}>30/04/2024</p>
                <p className="sidebar-box-content">
                  Bảng giá các loại tại phòng khám ngoài giờ
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
