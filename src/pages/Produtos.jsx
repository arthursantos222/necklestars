import { useState } from "react";
import { useCarrinho } from "../context/CarrinhoContext";
import "../styles/produtos.css";

const produtosFake = [
  { id: 1, nome: "DENIM TEARS The Cotton black", preco: 399.9, categoria: "Moletom", imagem: "https://static.mercdn.net/item/detail/orig/photos/m23436237803_1.jpg?1747131408" },
  { id: 2, nome: "DENIM TEARS The Cotton Wreath", preco: 199.9, categoria: "Camisa", imagem: "https://static.mercdn.net/item/detail/orig/photos/m67807442161_1.jpg?1732963152" },
  { id: 3, nome: "Bapesta Stars com zíper blue", preco: 429.9, categoria: "Moletom", imagem: "https://i.ebayimg.com/thumbs/images/g/IfwAAeSw-K9oG0K1/s-l1200.jpg" },
  { id: 4, nome: "DENIM TEARS short orange Flors", preco: 149.9, categoria: "Camisa", imagem: "https://dcdn-us.mitiendanube.com/stores/005/551/656/products/1000595408-045dbff2dde03b9de417478730867014-1024-1024.jpg" },
  { id: 5, nome: "Moletom Nike Athletics Branco", preco: 279.9, categoria: "Calça", imagem: "https://cdn.awsli.com.br/600x450/1900/1900104/produto/224318468/img_1688_jpg-5vedxwsnmr.jpeg" },
  { id: 6, nome: "Calça Jeans Clara Rasgada Drip US ", preco: 249.9, categoria: "Calça", imagem: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-luu5g8bt4jtsc3" },
  { id: 7, nome: "Camisa Drip Oversized all Black", preco: 99.9, categoria: "Acessório", imagem: "https://uzistore.com.br/cdn/shop/files/camisa-hype-trap-drip-oversized-ultra-larga_3.jpg?v=1706103645" },
  { id: 8, nome: "Bone new era  unissex al Black", preco: 119.9, categoria: "Acessório", imagem: "https://photos.enjoei.com.br/bone-aba-curva-feminino-e-masculino-ny-new-york-unissex-preto-classic-102775081/800x800/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy8zNDkwODQxNS81NzJlZWJkY2Y1YzgyNzQ3OTRkZDAyMTM0ODgxNDBiNi5qcGc" },
];

const categorias = ["Todos", "Moletom", "Camisa", "Calça", "Acessório"];

export default function Produtos() {
  const [filtro, setFiltro] = useState("Todos");
  const [ordenarAZ, setOrdenarAZ] = useState(false);
  const { adicionarProduto } = useCarrinho();

  const filtrarProdutos = () => {
    let produtos = filtro === "Todos"
      ? produtosFake
      : produtosFake.filter(p => p.categoria === filtro);

    if (ordenarAZ) {
      produtos = [...produtos].sort((a, b) =>
        a.nome.localeCompare(b.nome)
      );
    }

    return produtos;
  };

  return (
    <div className="produtos-container">
      <h1 className="titulo">Coleção Streetwear</h1>

      <div className="filtros-ordenar">
        <div className="filtros">
          {categorias.map(cat => (
            <button
              key={cat}
              className={filtro === cat ? "ativo" : ""}
              onClick={() => setFiltro(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="ordenar">
          <label>
            <input
              type="checkbox"
              checked={ordenarAZ}
              onChange={() => setOrdenarAZ(!ordenarAZ)}
            />
            Ordenar por nome A → Z
          </label>
        </div>
      </div>

      <div className="produtos-grid">
        {filtrarProdutos().map(produto => (
          <div key={produto.id} className="card">
            <img src={produto.imagem} alt={produto.nome} />
            <h3>{produto.nome}</h3>
            <p>R$ {produto.preco.toFixed(2)}</p>
            <button onClick={() => adicionarProduto(produto)}>Adicionar ao Carrinho</button>
          </div>
        ))}
      </div>
    </div>
  );
}
