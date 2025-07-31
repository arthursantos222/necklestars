import React, { useState } from "react";
import "../styles/contato.css";

export default function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensagem enviada! Obrigado pelo contato, " + nome + "!");
    setNome("");
    setEmail("");
    setMensagem("");
  };

  return (
    <div className="contato-container">
      <h1>Fale Conosco</h1>
      <form className="contato-form" onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome Completo</label>
        <input
          type="text"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Seu nome"
          required
        />

        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="seuemail@exemplo.com"
          required
        />

        <label htmlFor="mensagem">Mensagem</label>
        <textarea
          id="mensagem"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          placeholder="Escreva sua mensagem aqui..."
          required
        ></textarea>

        <button type="submit" className="botao-enviar">
          Enviar Mensagem
        </button>
      </form>
    </div>
  );
}
