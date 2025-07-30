import { createContext, useState, useContext } from "react";

const CarrinhoContext = createContext();

export function CarrinhoProvider({ children }) {
  const [carrinho, setCarrinho] = useState([]);

  // Adiciona produto ao carrinho, se já existir só aumenta a quantidade
  function adicionarProduto(produto) {
    setCarrinho((oldCarrinho) => {
      const existe = oldCarrinho.find(item => item.id === produto.id);
      if (existe) {
        return oldCarrinho.map(item =>
          item.id === produto.id ? { ...item, quantidade: item.quantidade + 1 } : item
        );
      } else {
        return [...oldCarrinho, { ...produto, quantidade: 1 }];
      }
    });
  }

  // Remove produto do carrinho
  function removerProduto(id) {
    setCarrinho((oldCarrinho) => oldCarrinho.filter(item => item.id !== id));
  }

  // Limpa o carrinho todo
  function limparCarrinho() {
    setCarrinho([]);
  }

  return (
    <CarrinhoContext.Provider value={{ carrinho, adicionarProduto, removerProduto, limparCarrinho }}>
      {children}
    </CarrinhoContext.Provider>
  );
}

// Hook para usar o carrinho
export function useCarrinho() {
  return useContext(CarrinhoContext);
}
