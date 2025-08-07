import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/checkout.css';

const Checkout = () => {
  const [metodoPagamento, setMetodoPagamento] = useState('cartao');
  const [pedidoFinalizado, setPedidoFinalizado] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aqui você pode fazer a chamada real ao backend, se quiser

    setPedidoFinalizado(true);

    // Depois de 3 segundos, redireciona para Produtos
    setTimeout(() => {
      navigate('/produtos');
    }, 3000);
  };

  if (pedidoFinalizado) {
    return (
      <div className="checkout-container" style={{ textAlign: 'center', padding: '4rem' }}>
        <h2>Compra finalizada com sucesso! 🎉</h2>
        <p>Obrigado pela sua compra. Você será redirecionado para a página de produtos.</p>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h2>Finalizar Compra</h2>

      <form className="checkout-form" onSubmit={handleSubmit}>
        {/* Informações do comprador */}
        <fieldset>
          <legend>Informações do Comprador</legend>
          <input type="text" placeholder="Nome completo" required />
          <input type="email" placeholder="E-mail" required />
          <input type="text" placeholder="Endereço" required />
          <input type="text" placeholder="CEP" required />
          <input type="text" placeholder="Cidade" required />
          <input type="text" placeholder="Estado" required />
        </fieldset>

        {/* Seleção do método de pagamento */}
        <fieldset>
          <legend>Selecione o Método de Pagamento</legend>
          <div className="pagamento-opcoes">
            <label>
              <input
                type="radio"
                name="pagamento"
                value="cartao"
                checked={metodoPagamento === 'cartao'}
                onChange={() => setMetodoPagamento('cartao')}
              />
              Cartão de Crédito
            </label>
            <label>
              <input
                type="radio"
                name="pagamento"
                value="pix"
                checked={metodoPagamento === 'pix'}
                onChange={() => setMetodoPagamento('pix')}
              />
              Pix
            </label>
            <label>
              <input
                type="radio"
                name="pagamento"
                value="boleto"
                checked={metodoPagamento === 'boleto'}
                onChange={() => setMetodoPagamento('boleto')}
              />
              Boleto Bancário
            </label>
            <label>
              <input
                type="radio"
                name="pagamento"
                value="transferencia"
                checked={metodoPagamento === 'transferencia'}
                onChange={() => setMetodoPagamento('transferencia')}
              />
              Transferência Bancária
            </label>
          </div>
        </fieldset>

        {/* Informações específicas do método */}
        {metodoPagamento === 'cartao' && (
          <fieldset>
            <legend>Pagamento - Cartão de Crédito</legend>
            <input type="text" placeholder="Número do Cartão" required />
            <input type="text" placeholder="Nome no Cartão" required />
            <div className="card-details">
              <input type="text" placeholder="Validade (MM/AA)" required />
              <input type="text" placeholder="CVV" required />
            </div>
          </fieldset>
        )}

        {metodoPagamento === 'pix' && (
          <fieldset>
            <legend>Pagamento - Pix</legend>
            <p>
              Após finalizar, você receberá o código Pix para pagamento no seu e-mail.
            </p>
          </fieldset>
        )}

        {metodoPagamento === 'boleto' && (
          <fieldset>
            <legend>Pagamento - Boleto Bancário</legend>
            <p>
              Após finalizar, você receberá o boleto para pagamento no seu e-mail.
            </p>
          </fieldset>
        )}

        {metodoPagamento === 'transferencia' && (
          <fieldset>
            <legend>Pagamento - Transferência Bancária</legend>
            <p>
              Dados para transferência serão enviados para seu e-mail após finalizar o pedido.
            </p>
          </fieldset>
        )}

        <button type="submit" className="btn-finalizar">Finalizar Pedido</button>
      </form>
    </div>
  );
};

export default Checkout;
