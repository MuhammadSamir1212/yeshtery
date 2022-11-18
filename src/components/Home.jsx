import { useState } from "react";
import { product } from "../services";
import NavBar from "./layout/navbar/NavBar";
import Footer from "./layout/footer/Footer";
import UnderNav from "./main/undernav/UnderNav";
import Product from "./main/product/Product";
import SimilarProduct from "./main/similarproduct/SimilarProduct";

const Home = () => {
  const [cartItems, setCartItems] = useState([]);

  const handelAddCart = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  return (
    <>
      <NavBar cartItems={cartItems} />
      <div className="container">
        <UnderNav />
        <Product
          product={product}
          handelAddCart={handelAddCart}
          cartItems={cartItems}
        />
        <SimilarProduct />
      </div>
      <Footer />
    </>
  );
};

export default Home;
