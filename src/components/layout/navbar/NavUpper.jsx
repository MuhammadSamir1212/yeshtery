import React from "react";
import "./navbar.css";
import {
  YeshteryLogoBlack,
  Bars,
  ArrowLeftSmall,
  ArrowRightSmall,
  Phone,
  Cart,
  Location,
} from "../../../images";
import { Link } from "react-router-dom";

const navUpper = () => (
  <div className="uper-nav">
    <div className="upper-container">
      {/* left */}
      <div className="upper-left">
        <div className="bars">
          <img src={Bars} alt="bars" />
        </div>
        <div className="yeshtery-Logo">
          <Link to="/">
            <img src={YeshteryLogoBlack} alt="yeshtery-Logo" />
          </Link>
        </div>
      </div>
      {/* meddel */}
      <div className="upper-middel">
        <img src={ArrowLeftSmall} alt="arrowLeftSmall" />
        <p>
          Valentine’s Day Offers! Buy Two Get One Free{" "}
          <u>
            <strong>Shop Now</strong>
          </u>
        </p>
        <img src={ArrowRightSmall} alt="arrowRightSmall" />
      </div>
      {/* Right */}
      <div className="upper-right">
        <div className="right-content">
          <img src={Phone} alt="phone" />
          <h3>Contact Us</h3>
        </div>
        <div className="right-content">
          <img src={Cart} alt="phone" />
          <h3>Track Order</h3>
        </div>
        <div className="right-content">
          <img src={Location} alt="phone" />
          <h3>Find A Store</h3>
        </div>
      </div>
    </div>
  </div>
);

export default navUpper;
