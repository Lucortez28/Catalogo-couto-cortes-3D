export default function Header() {
  return (
    <header style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px 40px",
      background: "#111",
      color: "#fff",
      borderRadius: "0 0 20px 20px"
    }}>

      <div>
        <h2 style={{ margin: 0 }}>
          Couto & Cortes
        </h2>

        <p style={{ margin: 0 }}>
          Soluções 3D
        </p>
      </div>


      <nav>
        <a style={{color:"#fff", marginRight:"20px"}}>
          Produtos
        </a>

        <a style={{color:"#fff", marginRight:"20px"}}>
          Personalizados
        </a>

        <a style={{color:"#25D366"}}>
          WhatsApp
        </a>
      </nav>

    </header>
  );
}
