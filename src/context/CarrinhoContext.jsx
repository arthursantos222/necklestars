import { createContext, useContext, useState } from "react";

const CarrinhoContext = createContext();

export function CarrinhoProvider({ children }) {
  const [carrinho, setCarrinho] = useState([]);

  const adicionarAoCarrinho = (produto) => {
    setCarrinho((oldCarrinho) => {
      const produtoExistente = oldCarrinho.find((p) => p.id === produto.id);
      if (produtoExistente) {
        return oldCarrinho.map((p) =>
          p.id === produto.id ? { ...p, quantidade: p.quantidade + 1 } : p
        );
      } else {
        return [...oldCarrinho, { ...produto, quantidade: 1 }];
      }
    });
  };

  const removerDoCarrinho = (idProduto) => {
    setCarrinho((oldCarrinho) => oldCarrinho.filter((p) => p.id !== idProduto));
  };

  const alterarQuantidade = (idProduto, novaQuantidade) => {
    setCarrinho((oldCarrinho) =>
      oldCarrinho.map((p) =>
        p.id === idProduto ? { ...p, quantidade: novaQuantidade } : p
      )
    );
  };

  const limparCarrinho = () => {
    setCarrinho([]);
  };

  return (
    <CarrinhoContext.Provider
      value={{
        carrinho,
        adicionarAoCarrinho,
        removerDoCarrinho,
        alterarQuantidade,
        limparCarrinho,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}

export function useCarrinho() {
  return useContext(CarrinhoContext);
}
