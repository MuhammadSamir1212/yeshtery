import "./product.css";
import {
  A360,
  ArrowLeft,
  ArrowRight,
  Star,
  EmptyStar,
  Minas,
  Pluse,
} from "../../../images";

const Product = ({ product, handelAddCart }) => {
  return (
    <section className="single-product">
      {product.map((product) => (
        <div key={product.id} className="single-product-content">
          <div className="left-sec-product">
            <div className="product-main-img">
              <img src={A360} alt="360" className="aa360-re" />
              <img
                src={product.mainImg1}
                alt="mainimg"
                className="mainimg-pro"
              />
            </div>
            <div className="product-small-imge">
              <img src={ArrowLeft} alt="arrowLeft" />
              <img
                src={product.mainImg2}
                alt="mainimg"
                className="mainimg-small"
              />
              <img
                src={product.mainImg3}
                alt="mainimg"
                className="mainimg-small"
              />
              <img
                src={product.mainImg4}
                alt="mainimg"
                className="mainimg-small"
              />
              <img
                src={product.mainImg5}
                alt="mainimg"
                className="mainimg-small"
              />
              <img src={ArrowRight} alt="arrowRight" />
            </div>
          </div>

          <div className="right-sec-product">
            <div className="right-sec-upper">
              <img
                src={product.companyImage}
                alt="companyLogo"
                className="producr-company-logo"
              />
              <p>{product.title}</p>
              <span className="catogeri-product">{product.catogri}</span>
              <div className="product-rate">
                <div className="product-stars">
                  <img src={Star} alt="satar" />
                  <img src={Star} alt="satar" />
                  <img src={Star} alt="satar" />
                  <img src={Star} alt="satar" />
                  <img src={EmptyStar} alt="emptyStar" />
                </div>
                <span className="product-rate-num">{product.rate} of 5</span>
                <span className="product-rate-total">
                  {product.totalRate} Rates
                </span>
              </div>
              <div className="product-price-sale">
                <h2 className="product-main-price">
                  <span>{product.price}</span> LE
                </h2>
                <span className="product-old-price">
                  <s>{product.sallPrice} LE </s>
                </span>
                <span className="product-salle-off">
                  {product.sallRange} Off
                </span>
              </div>
            </div>
            <div className="right-sec-size">
              <h3>Size</h3>
              <div className="diff-sizes">
                <span>{product.sizes[0]}</span>
                <span>{product.sizes[1]}</span>
                <span>{product.sizes[2]}</span>
                <span>{product.sizes[3]}</span>
                <span>{product.sizes[4]}</span>
              </div>
            </div>
            <div className="rigth-sec-color">
              <h3>Color</h3>
              <div className="diff-colors">
                <img src={product.colorImg1} alt="color" />
                <img src={product.colorImg2} alt="color" />
              </div>
            </div>
            <div className="right-sec-quantity">
              <h3>Quantity</h3>
              <div className="diff-quantity">
                <div className="minas-img">
                  <img src={Minas} alt="minas" />
                </div>
                <span className="quantity-num-rang">{product.quantity}</span>
                <div className="plus-img">
                  <img src={Pluse} alt="pluse" />
                </div>
              </div>
            </div>
            <div className="right-sec-buttons">
              <button
                className="add-to-cart-product"
                onClick={() => handelAddCart(product)}
              >
                Add To Cart
              </button>
              <button className="pickup-product">Pickup From Store</button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Product;
