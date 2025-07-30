import { useCarrinho } from "../context/CarrinhoContext";
import "../styles/carrinho.css";

export default function Carrinho() {
  const { carrinho, removerProduto, limparCarrinho } = useCarrinho();

  const total = carrinho.reduce((acc, item) => acc + item.preco * item.quantidade, 0);

  return (
    <div className="carrinho-container">
      <h1>Seu Carrinho</h1>
      {carrinho.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <>
          <ul>
            {carrinho.map(item => (
              <li key={item.id} className="item-carrinho">
                <img src={item.imagem} alt={item.nome} />
                <div>
                  <h3>{item.nome}</h3>
                  <p>Quantidade: {item.quantidade}</p>
                  <p>Preço unitário: R$ {item.preco.toFixed(2)}</p>
                  <p>Subtotal: R$ {(item.preco * item.quantidade).toFixed(2)}</p>
                  <button onClick={() => removerProduto(item.id)}>Remover</button>
                </div>
              </li>
            ))}
          </ul>
          <h2>Total: R$ {total.toFixed(2)}</h2>
          <button className="limpar-btn" onClick={limparCarrinho}>Limpar Carrinho</button>
        </>
      )}
    </div>
  );
}
