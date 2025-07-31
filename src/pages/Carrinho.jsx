import { useContext } from "react";
import { useCarrinho } from "../context/CarrinhoContext";
import "../styles/carrinho.css";
import { useNavigate } from "react-router-dom";

function Carrinho() {
  const {
    carrinho,
    adicionarAoCarrinho,
    removerDoCarrinho,
    alterarQuantidade,
    limparCarrinho,
  } = useCarrinho();
  const navigate = useNavigate();

  const total = carrinho.reduce((acc, item) => acc + item.preco * item.quantidade, 0);

  // Agora só navega pra checkout, não limpa aqui
  const finalizarCompra = () => {
    navigate("/checkout");
  };

  const aumentarQuantidade = (id) => {
    const item = carrinho.find(p => p.id === id);
    if (item) alterarQuantidade(id, item.quantidade + 1);
  };

  const diminuirQuantidade = (id) => {
    const item = carrinho.find(p => p.id === id);
    if (item && item.quantidade > 1) alterarQuantidade(id, item.quantidade - 1);
  };

  return (
    <div className="carrinho-container">
      <h2>Seu Carrinho 🛒</h2>
      {carrinho.length === 0 ? (
        <p className="mensagem-vazio">Seu carrinho está vazio.</p>
      ) : (
        <>
          <div className="itens-carrinho">
            {carrinho.map((item) => (
              <div key={item.id} className="card-carrinho">
                <img src={item.imagem} alt={item.nome} className="img-carrinho" />
                <div className="info-carrinho">
                  <h3>{item.nome}</h3>
                  <p>Preço: R$ {item.preco.toFixed(2)}</p>
                  <div className="quantidade-controle">
                    <button onClick={() => diminuirQuantidade(item.id)}>-</button>
                    <span>{item.quantidade}</span>
                    <button onClick={() => aumentarQuantidade(item.id)}>+</button>
                  </div>
                  <button
                    className="botao-remover"
                    onClick={() => removerDoCarrinho(item.id)}
                  >
                    Remover
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="resumo-carrinho">
            <p>Total: <strong>R$ {total.toFixed(2)}</strong></p>
            <button className="botao-finalizar" onClick={finalizarCompra}>
              Finalizar Compra
            </button>
            <button className="botao-voltar" onClick={() => navigate("/produtos")}>
              Continuar Comprando
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Carrinho;
