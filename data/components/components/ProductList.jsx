import ProductCard from "./ProductCard";
import { products } from "../data/products";

export default function ProductList() {
  return (
    <section>

      <h2>
        Nossos produtos
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "25px"
        }}
      >

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </section>
  );
}
