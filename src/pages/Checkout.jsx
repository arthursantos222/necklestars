import { useState } from "react";
import { useCarrinho } from "../context/CarrinhoContext";
import "../styles/checkout.css";

export default function Checkout() {
  const { carrinho, limparCarrinho } = useCarrinho();
  const [pagamentoConcluido, setPagamentoConcluido] = useState(false);
  const [nomeCartao, setNomeCartao] = useState("");
  const [numeroCartao, setNumeroCartao] = useState("");
  const [validade, setValidade] = useState("");
  const [cvv, setCvv] = useState("");

  const total = carrinho.reduce((acc, item) => acc + item.preco * item.quantidade, 0);

  const handlePagamento = (e) => {
    e.preventDefault();

    // Aqui você faria validação e integração com um gateway real
    // Para simular, só vamos marcar como pago e limpar carrinho depois

    if (!nomeCartao || !numeroCartao || !validade || !cvv) {
      alert("Preencha todos os dados do cartão.");
      return;
    }

    setPagamentoConcluido(true);
    limparCarrinho();
  };

  if (carrinho.length === 0 && !pagamentoConcluido) {
    return (
      <div className="checkout-container">
        <h2>Seu carrinho está vazio.</h2>
      </div>
    );
  }

  if (pagamentoConcluido) {
    return (
      <div className="checkout-container">
        <h2>Pagamento concluído com sucesso! 🎉</h2>
        <p>Obrigado pela sua compra na Necklestars.</p>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h2>Resumo do Pedido</h2>
      <ul>
        {carrinho.map((item) => (
          <li key={item.id}>
            {item.nome} x {item.quantidade} — R$ {(item.preco * item.quantidade).toFixed(2)}
          </li>
        ))}
      </ul>
      <p><strong>Total: R$ {total.toFixed(2)}</strong></p>

      <h3>Dados do Cartão</h3>
      <form onSubmit={handlePagamento} className="form-pagamento">
        <label>
          Nome no Cartão:
          <input
            type="text"
            value={nomeCartao}
            onChange={(e) => setNomeCartao(e.target.value)}
            required
          />
        </label>
        <label>
          Número do Cartão:
          <input
            type="text"
            value={numeroCartao}
            onChange={(e) => setNumeroCartao(e.target.value)}
            maxLength={16}
            required
          />
        </label>
        <label>
          Validade:
          <input
            type="text"
            placeholder="MM/AA"
            value={validade}
            onChange={(e) => setValidade(e.target.value)}
            maxLength={5}
            required
          />
        </label>
        <label>
          CVV:
          <input
            type="password"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            maxLength={3}
            required
          />
        </label>

        <button type="submit" className="botao-finalizar">
          Finalizar Pagamento
        </button>
      </form>
    </div>
  );
}
