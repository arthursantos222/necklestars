import React from "react";
import { useNavigate } from "react-router-dom";
import { useCarrinho } from "../context/CarrinhoContext";
import "../styles/Carrinho.css"; 

export default function Carrinho() {
  const { carrinho, removerDoCarrinho, alterarQuantidade, limparCarrinho } = useCarrinho();
  const navigate = useNavigate();

  const total = carrinho.reduce((acc, produto) => acc + produto.preco * produto.quantidade, 0);

  const handleQuantidadeChange = (id, e) => {
    const novaQtd = parseInt(e.target.value);
    if (novaQtd >= 1) {
      alterarQuantidade(id, novaQtd);
    }
  };

  return (
    <div className="carrinho">
      <h1>Seu Carrinho</h1>

      {carrinho.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <>
          {carrinho.map((produto) => (
            <div key={produto.id} className="carrinho-item">
              <img src={produto.imagem} alt={produto.nome} />
              <div className="carrinho-info">
                <h4>{produto.nome}</h4>
                <p>R$ {produto.preco.toFixed(2)}</p>

                <div className="carrinho-quantidade">
                  <label>Quantidade:</label>
                  <input
                    type="number"
                    min="1"
                    value={produto.quantidade}
                    onChange={(e) => handleQuantidadeChange(produto.id, e)}
                  />
                </div>
              </div>

              <button
                className="botao-remover"
                onClick={() => removerDoCarrinho(produto.id)}
              >
                Remover
              </button>
            </div>
          ))}

          <h2>Total: R$ {total.toFixed(2)}</h2>

          <div className="carrinho-botoes">
            <button
              className="botao-continuar"
              onClick={() => navigate("/produtos")}
            >
              Continuar Comprando
            </button>
            <button
              className="botao-checkout"
              onClick={() => navigate("/checkout")}
            >
              Finalizar Compra
            </button>
            <button className="botao-remover" onClick={limparCarrinho}>
              Limpar Carrinho
            </button>
          </div>
        </>
      )}
    </div>
  );
}
