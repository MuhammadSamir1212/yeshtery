import { footer, media } from "../../../services";
import { Link } from "react-router-dom";
import {
  YeshteryLogo,
  ArrowSend,
  Visa,
  MasterCard,
  CashOnDelivery,
  NasnavLogo,
} from "../../../images";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-left">
            <img src={YeshteryLogo} alt="yeshteryLogo" />
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
            </p>
            <p>
              Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla. Lorem ipsum dolor sit amet, consectetuer adipiscing
              elit, sed dia
            </p>
            <p>
              m nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis
            </p>
          </div>

          <div className="footer-right">
            <h2 className="footer-right-header">Subscribe to our newsletter</h2>
            <div className="footer-search">
              <h3 className="footer-search-placeholder">Enter Your Mail</h3>
              <div className="footer-send">
                <span>Subscribe</span>
                <img src={ArrowSend} alt="arrowSend" />
              </div>
            </div>
            <div className="footer-flex-media">
              <div className="footer-flex-media-left">
                {footer.map((link) => (
                  <div key={link.id} className="footer-links">
                    <Link to="/">{link.title}</Link>
                  </div>
                ))}
              </div>
              <div className="footer-flex-media-right">
                {media.map((media) => (
                  <div key={media.id} className="footer-midea">
                    <img src={media.logo} alt="logo" />
                    <h2>{media.title}</h2>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="footer-coyrights">
          <p>&copy; 2021 yeshtery, all rights reserved.</p>
          <div className="footer-cash-img">
            <img src={CashOnDelivery} alt="cashOnDelivery" />
            <img src={Visa} alt="visa" />
            <img src={MasterCard} alt="masterCard" />
          </div>
          <div className="footer-powerdby">
            <h2>Powered By</h2>
            <img src={NasnavLogo} alt="nasnavLogo" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
