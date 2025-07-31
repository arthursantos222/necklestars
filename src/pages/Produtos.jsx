import { useState } from "react";
import { useCarrinho } from "../context/CarrinhoContext";
import "../styles/Produtos.css";

const produtosFake = [
  { id: 1, nome: "DENIM TEARS The Cotton black", preco: 399.9, categoria: "Moletom", imagem: "https://static.mercdn.net/item/detail/orig/photos/m23436237803_1.jpg?1747131408" },
  { id: 2, nome: "DENIM TEARS The Cotton Wreath", preco: 199.9, categoria: "Moletom", imagem: "https://static.mercdn.net/item/detail/orig/photos/m67807442161_1.jpg?1732963152" },
  { id: 3, nome: "Ape Bapesta Stars com zíper", preco: 429.9, categoria: "Moletom", imagem: "https://i.ebayimg.com/thumbs/images/g/IfwAAeSw-K9oG0K1/s-l1200.jpg" },
  { id: 4, nome: "DENIM TEARS short orange", preco: 149.9, categoria: "Calça", imagem: "https://dcdn-us.mitiendanube.com/stores/005/551/656/products/1000595408-045dbff2dde03b9de417478730867014-1024-1024.jpg" },
  { id: 5, nome: "Moletom Nike Athletics Branco", preco: 279.9, categoria: "Moletom", imagem: "https://cdn.awsli.com.br/600x450/1900/1900104/produto/224318468/img_1688_jpg-5vedxwsnmr.jpeg" },
  { id: 6, nome: "Calça Jeans Clara Rasgada Drip US", preco: 249.9, categoria: "Calça", imagem: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-luu5g8bt4jtsc3" },
  { id: 7, nome: "Camisa Drip Oversized", preco: 99.9, categoria: "Camisa", imagem: "https://uzistore.com.br/cdn/shop/files/camisa-hype-trap-drip-oversized-ultra-larga_3.jpg?v=1706103645" },
  { id: 8, nome: "NY NEW ERA ALL BLACK", preco: 119.9, categoria: "Acessório", imagem: "https://photos.enjoei.com.br/bone-aba-curva-feminino-e-masculino-ny-new-york-unissex-preto-classic-102775081/800x800/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy8zNDkwODQxNS81NzJlZWJkY2Y1YzgyNzQ3OTRkZDAyMTM0ODgxNDBiNi5qcGc" },
  { id: 9, nome: "THE NORTH FACE 96 RETRO", preco: 320.0, categoria: "Moletom", imagem: "https://u-mercari-images.mercdn.net/photos/m49870347844_1.jpg" },
  { id: 10, nome: "The North Face O Norte", preco: 210.0, categoria: "Moletom", imagem: "https://cf.shopee.com.br/file/b05d2a35dd2057adb516be9231e92903" },
  { id: 11, nome: "Y2K Retro Graffiti-Hosen", preco: 279.9, categoria: "Calça", imagem: "https://img.kwcdn.com/product/fancy/53eca8ab-3426-4021-90b8-eee278d60ca9.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp" },
  { id: 12, nome: "Chaveiro y2k METAL preto", preco: 89.9, categoria: "Acessório", imagem: "https://ae01.alicdn.com/kf/S27053e61aeb9417988f7e76944efe620w.jpg_640x640q90.jpg" },
];

const categorias = ["Todos", "Moletom", "Camisa", "Calça", "Acessório"];

export default function Produtos() {
  const [filtro, setFiltro] = useState("Todos");
  const [ordenarAZ, setOrdenarAZ] = useState(false);
  const { adicionarAoCarrinho } = useCarrinho();

  const filtrarProdutos = () => {
    let produtos = filtro === "Todos"
      ? produtosFake
      : produtosFake.filter(p => p.categoria === filtro);

    if (ordenarAZ) {
      produtos = [...produtos].sort((a, b) => a.nome.localeCompare(b.nome));
    }

    return produtos;
  };

  return (
    <section>
      <h1 style={{ textAlign: "center", marginTop: "2rem", color: "white" }}>Coleção Streetwear</h1>

      <div style={{ display: "flex", justifyContent: "center", gap: "2rem", marginTop: "1rem", flexWrap: "wrap" }}>
        <div>
          {categorias.map(cat => (
            <button
              key={cat}
              style={{
                marginRight: "0.5rem",
                padding: "0.5rem 1rem",
                backgroundColor: filtro === cat ? "#ff6600" : "#333",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: filtro === cat ? "bold" : "normal",
                transition: "background-color 0.3s",
              }}
              onClick={() => setFiltro(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <label style={{ color: "#fff", display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <input
            type="checkbox"
            checked={ordenarAZ}
            onChange={() => setOrdenarAZ(!ordenarAZ)}
          />
          Ordenar A → Z
        </label>
      </div>

      <div className="produto-lista">
        {filtrarProdutos().map(produto => (
          <div key={produto.id} className="produto-card">
            <img src={produto.imagem} alt={produto.nome} />
            <h3>{produto.nome}</h3>
            <p>R$ {produto.preco.toFixed(2)}</p>
            <button
              className="botao-comprar"
              onClick={() => adicionarAoCarrinho(produto)}
            >
              Adicionar ao Carrinho
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
