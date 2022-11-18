import "./cart.css";

const CartCard = ({ cartItems }) => {
  return cartItems.length === 0 ? (
    <h2 className="cart-empty">Cart Is Empty</h2>
  ) : (
    <div>
      <div className="cart-summary">Cart Summary</div>
      {cartItems.map((product) => (
        <>
          <div key={product.id} className="cart-card">
            <img src={product.mainImg1} alt="mainImg1" />
            <div className="card-content">
              <p>{product.title}</p>
              <div className="cart-quantity">
                Quantity: <span>{product.quantity}</span>
              </div>
              <div className="price-btn">
                <div className="card-price">
                  <span className="card-price-num">{product.price}</span>LE
                </div>
                <button className="card-remove-btn">Remove</button>
              </div>
            </div>
          </div>
          <div className="cart-total">
            Total: <span>{product.price}</span> LE
          </div>
        </>
      ))}
      <div className="cart-btn-flex">
        <button className="review-cart">Review Cart</button>
        <button className="checkout-cart">Complete Checkout</button>
      </div>
    </div>
  );
};

export default CartCard;
