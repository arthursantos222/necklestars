import { useState } from "react";
import { Link } from "react-router-dom";
import { useCarrinho } from "../context/CarrinhoContext";
import "../styles/navbar.css";

function Navbar() {
  const { carrinho } = useCarrinho();
  const totalItens = carrinho.reduce((total, item) => total + item.quantidade, 0);
  const [menuAtivo, setMenuAtivo] = useState(false);

  const toggleMenu = () => setMenuAtivo(!menuAtivo);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">Necklestars</Link>

      <div className={`links ${menuAtivo ? "active" : ""}`}>
        <Link to="/" onClick={() => setMenuAtivo(false)}>Home</Link>
        <Link to="/produtos" onClick={() => setMenuAtivo(false)}>Produtos</Link>
        <Link to="/contato" onClick={() => setMenuAtivo(false)}>Contato</Link>
        <Link to="/carrinho" className="cart-icon" onClick={() => setMenuAtivo(false)}>
          🛒
          {totalItens > 0 && <span className="cart-count">{totalItens}</span>}
        </Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}

export default Navbar;
