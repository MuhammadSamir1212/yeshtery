import "./similarproduct.css";
import { A360, Star, EmptyStar } from "../../../images";

const SimilarProductCard = ({ similar }) => {
  const {
    similarImg,
    title,
    price,
    sallPrice,
    sallRange,
    companyImage,
    rate,
    pickUp,
  } = similar;

  return (
    <div className="similar-card-content">
      <div className="similar-card-img">
        <img src={A360} alt="360" className="similar-card-aa360" />
        <img src={similarImg} alt="mainimg" className="similar-card-mainimg" />
      </div>
      <div className="similar-card-detail">
        <p>{title}</p>
        <h3 className="similar-card-price">
          <span>{price}</span> LE
        </h3>
        <div className="similar-caed-middel">
          <div className="similar-caed-sale">
            <span className="similar-card-old-price">
              <s>{sallPrice}LE</s>
            </span>
            <span className="similar-card-salle-off">{sallRange}</span>
          </div>
          <div className="similar-card-company">
            <img src={companyImage} alt="company" />
          </div>
        </div>
        <div className="similar-card-rate">
          <div className="similar-card-stars">
            <img src={Star} alt="satar" />
            <img src={Star} alt="satar" />
            <img src={Star} alt="satar" />
            <img src={Star} alt="satar" />
            <img src={EmptyStar} alt="emptyStar" />
          </div>
          <span className="similar-card-rate-num">{rate} of 5</span>
        </div>
        <div className="similar-pickup">
          Pickup From: <strong>{pickUp}</strong>
        </div>
      </div>
    </div>
  );
};

export default SimilarProductCard;
