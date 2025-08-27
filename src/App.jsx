import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Carrinho from "./pages/Carrinho";
import Contato from "./pages/Contato";
import Checkout from "./pages/Checkout";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { CarrinhoProvider } from "./context/CarrinhoContext";
import "./styles/global.css";


function App() {
  return (
    <CarrinhoProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
        <Footer />
      </Router>
    </CarrinhoProvider>
  );
}

export default App;
