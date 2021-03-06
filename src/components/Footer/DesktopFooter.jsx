import React from "react";
import IconLocation from "../../assets/images/icon-location.svg";
import IconPhone from "../../assets/images/icon-phone.svg";
import IconEmail from "../../assets/images/icon-email.svg";
function DesktopFooter() {
  return (
    <React.Fragment>
      <div className="footer-icon desktop">
        <img src={IconLocation} alt="location" />
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </span>
      </div>
      <div className="footer-icon-wrapper desktop">
        <div className="footer-icon">
          <img src={IconPhone} alt="phone" />
          <span>+1-543-123-4567</span>
        </div>
        <div className="footer-icon">
          <img src={IconEmail} alt="email" />
          <span>example@fylo.com</span>
        </div>
      </div>
    </React.Fragment>
  );
}

export default DesktopFooter;
