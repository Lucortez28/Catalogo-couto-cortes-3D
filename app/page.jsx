import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />

      <main style={{ padding: "40px" }}>

        <h1>
          Couto & Cortes Soluções 3D
        </h1>

        <h2>
          Impressão 3D de alta precisão
        </h2>

        <p>
          Criamos produtos personalizados, peças exclusivas
          e soluções criativas através da tecnologia de
          impressão 3D.
        </p>


        <a
          href="https://wa.me/"
          target="_blank"
        >
          <button>
            Solicitar orçamento pelo WhatsApp
          </button>
        </a>


        <h2>
          🚀 Lançamentos
        </h2>

        <p>
          Novos produtos em destaque aparecerão aqui.
        </p>


        <h2>
          Nossos produtos
        </h2>

        <p>
          • Produtos prontos para entrega<br />
          • Produtos personalizados<br />
          • Brindes corporativos<br />
          • Projetos exclusivos
        </p>

      </main>
    </>
  );
}
