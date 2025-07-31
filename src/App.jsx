import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Carrinho from "./pages/Carrinho";
import Checkout from "./pages/Checkout";
import Contato from "./pages/Contato";

import { CarrinhoProvider } from "./context/CarrinhoContext";

export default function App() {
  return (
    <CarrinhoProvider>
      <div style={{
        minHeight: "100vh",
        backgroundColor: "#111", // Fundo preto escuro
        color: "white",           // Texto branco para todo o app
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        paddingBottom: "2rem"
      }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/carrinho" element={<Carrinho />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </div>
    </CarrinhoProvider>
  );
}
