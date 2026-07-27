export default function ProductCard({ product }) {
  return (
    <div
      style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "15px",
        boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
      }}
    >

      <div
        style={{
          height: "180px",
          background: "#eee",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        Imagem do produto
      </div>

      <h3>
        {product.name}
      </h3>

      <p>
        {product.description}
      </p>

      <strong>
        Material: {product.material}
      </strong>

      <br /><br />

      <button>
        Solicitar orçamento
      </button>

    </div>
  );
}
