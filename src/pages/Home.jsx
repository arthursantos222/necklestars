import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <section className="home-section">
      <div className="content">
        <h1 className="logo-text">NECKLESTARS</h1>
        <h2 className="slogan">Estilo de rua pra quem vive nas ruas.</h2>
        <button className="btn-explore" onClick={() => navigate("/produtos")}>
          Explore nossos produtos
        </button>
      </div>

      <div className="contact-info">
        <p>@necklestars</p>
        <p>Email: contato@necklestars.com</p>
        <p>Instagram: <a href="https://instagram.com/necklestars" target="_blank" rel="noopener noreferrer">@necklestars</a></p>
      </div>
    </section>
  );
}

export default Home;
