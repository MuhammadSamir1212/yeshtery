import { useState } from "react";
import "./navbar.css";
import { Search, AdidasLogo, CartSec, Heart, User } from "../../../images";
import Cart from "../../cart/Cart";
import BackDrop from "../../cart/BackDrop";

const NavMeddel = ({ cartItems, handelAddCart }) => {
  const [sidebar, setSidebar] = useState(false);

  const handelOpen = () => {
    setSidebar(true);
  };
  const handelClose = () => {
    setSidebar(false);
  };

  return (
    <div className="middle-nav">
      <div className="middel-container">
        {/* left */}
        <div className="middle-left">
          <div className="nav-search">
            <img src={Search} alt="search" />
            <h3>Search</h3>
          </div>
        </div>
        {/* meddel */}
        <div className="middle-middel">
          <img src={AdidasLogo} alt="adidasLogo" />
        </div>
        {/* Right */}
        <div className="middle-right">
          <div className="middle-right-content">
            <img src={CartSec} alt="cartSec" onClick={handelOpen} />
            <span className="cart-num">{cartItems.length}</span>
            <h3>Cart</h3>
            {sidebar ? (
              <Cart
                onClick={handelClose}
                cartItems={cartItems}
                handelClose={handelClose}
                handelAddCart={handelAddCart}
              />
            ) : null}
            {sidebar ? <BackDrop onClick={handelClose} /> : null}
          </div>
          <div className="middle-right-content">
            <img src={Heart} alt="heart" />
            <h3>Wishlist</h3>
          </div>
          <div className="middle-right-content">
            <img src={User} alt="user" />
            <h3>Login</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavMeddel;
