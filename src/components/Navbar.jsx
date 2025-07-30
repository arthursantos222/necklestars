import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="logo">Necklestars</div>
      <ul className="nav-links">
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === "/produtos" ? "active" : ""}>
          <Link to="/produtos">Produtos</Link>
        </li>
        <li className={location.pathname === "/carrinho" ? "active" : ""}>
          <Link to="/carrinho">Carrinho</Link>
        </li>
      </ul>
    </nav>
  );
}
