import React from "react";
import "./footer.scss";
import { Button, Icon } from "semantic-ui-react";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <span>Thông tin chung</span>
          <ul>
            <li>Giới thiệu về sản phẩm</li>
            <li>Các mặt hàng</li>
            <li>Liên hệ, góp ý</li>
            <li>Tin tức</li>
          </ul>
        </div>
        <div className="footer-location">
          <span>Chi nhánh</span>
          <ul>
            <li>1 Dương Thủy, Lệ Thủy, Quảng Bình</li>
            <li>2 Dương Thủy, Lệ Thủy, Quảng Bình</li>
            <li>3 Dương Thủy, Lệ Thủy, Quảng Bình</li>
            <li>4 Dương Thủy, Lệ Thủy, Quảng Bình</li>
          </ul>
        </div>
        <div className="footer-social">
          <span>Liên lạc</span>
          <br />
          <div className="footer-icon">
            <Button color="orange">Orange</Button>
            <Button color="yellow">Yellow</Button>
            <Button color="olive">Olive</Button>
            <Button color="green">Green</Button>
          </div>
        </div>
      </div>
      <p className="designer">Designed by Ngoc Minh</p>
    </div>
  );
}
export default Footer;
