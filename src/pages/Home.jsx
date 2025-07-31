import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <section className="home-section">
      <h2 className="titulo-home">Bem-vindo à Necklestars</h2>
      <p className="descricao-home">Estilo de rua para quem vive nas ruas.</p>
      <button className="btn-explore" onClick={() => navigate("/produtos")}>
        Explore nossos produtos
      </button>
    </section>
  );
}

export default Home;
