import { Link } from "react-router-dom";
import { useCarrinho } from "../context/CarrinhoContext";
import "../styles/navbar.css";

function Navbar() {
  const { carrinho } = useCarrinho();
  const totalItens = carrinho.reduce((total, item) => total + item.quantidade, 0);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">Necklestars</Link>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/produtos">Produtos</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/carrinho" className="cart-icon">
          🛒
          {totalItens > 0 && <span className="cart-count">{totalItens}</span>}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
