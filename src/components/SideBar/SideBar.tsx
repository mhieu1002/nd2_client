import "./sideBar.scss";
import img from "../../assets/images/1(5).jpg";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/33333333333333(1)(1).png"
import img2 from "../../assets/images/IUIU.jpg"
import img3 from "../../assets/images/33333333333333(1).jpg"
import img4 from "../../assets/images/sddddd.jpg"
import img5 from "../../assets/images/11111111111111(3).jpg"
import img6 from "../../assets/images/SASAgffg(4).png"
import img7 from "../../assets/images/a1d0fe3a4abf43190a0418e302a7ec7d(2).png"

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
        </div>
      </div>
      <div className="sidebar-listbox">
        <img src="http://www.benhviennhi.org.vn//upload/files/%C3%82N/PAYMENT-02.jpg" />
      </div>
      <div className="sidebar-listbox">
        <img src={img1} />
      </div>
      <div className="sidebar-listbox">
        <img src="http://www.benhviennhi.org.vn//upload/images/DSG.jpg" />
      </div>
      <div className="sidebar-listbox">
        <img src={img2} />
      </div>
      <div className="sidebar-listbox">
        <img src={img3} />
      </div>
      <div className="sidebar-listbox">
        <img src="http://www.benhviennhi.org.vn//upload/images/Tieu%20de%20Bo%20phap%20dien1.jpg" />
      </div>
      <div className="sidebar-listbox">
        <img src={img4} />
      </div>
      <div className="sidebar-listbox">
        <img src={img5} />
      </div>
      <div className="sidebar-listbox">
        <img src="http://www.benhviennhi.org.vn//upload/images/jhjhj.jpg" />
      </div>
      <div className="sidebar-listbox">
        <img src={img6} />
      </div>
      <div className="sidebar-listbox">
        <img src={img7} />
      </div>
      <div className="sidebar-listbox">
        <img src="http://www.benhviennhi.org.vn//upload/images/AN-QLCL/Untitled%20design%20(3).png" />
      </div>
    </div>
  );
};

export default SideBar;
