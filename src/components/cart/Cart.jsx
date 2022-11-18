import "./cart.css";
import CartCard from "./CartCard";
import { Close } from "../../images";

const Cart = ({ cartItems, handelClose, handelAddCart }) => {
  return (
    <div className="cart-side active">
      <div className="cart-head">
        <img src={Close} alt="close" onClick={handelClose} />
      </div>
      <h2>My Cart</h2>
      <CartCard cartItems={cartItems} handelAddCart={handelAddCart} />
    </div>
  );
};

export default Cart;
