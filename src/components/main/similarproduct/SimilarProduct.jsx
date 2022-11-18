import SimilarProductCard from "./SimilarProductCard";
import "./similarproduct.css";
import { similarProduct } from "../../../services";

const SimilarProduct = () => (
  <section className="similar-products">
    <div className="similar-header">
      <h2>Similar Products</h2>
      <p>You may like these products also</p>
    </div>
    <div className="similar-card">
      {similarProduct.map((similar) => (
        <SimilarProductCard key={similar.id} similar={similar} />
      ))}
    </div>
  </section>
);

export default SimilarProduct;
