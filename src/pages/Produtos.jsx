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
  { id: 8, nome: "GORRO hip hop estilo y2k", preco: 119.9, categoria: "Acessório", imagem: "https://img4.dhresource.com/webp/m/0x0/f3/albu/km/y/13/7d7a558b-4abe-48c6-bb1f-6fdcebe7fc5c.jpg" },
  { id: 9, nome: "THE NORTH FACE 96 RETRO", preco: 320.0, categoria: "Moletom", imagem: "https://u-mercari-images.mercdn.net/photos/m49870347844_1.jpg" },
  { id: 10, nome: "The North Face O Norte", preco: 210.0, categoria: "Moletom", imagem: "https://cf.shopee.com.br/file/b05d2a35dd2057adb516be9231e92903" },
  { id: 11, nome: "Y2K Retro Graffiti-Hosen", preco: 279.9, categoria: "Calça", imagem: "https://img.kwcdn.com/product/fancy/53eca8ab-3426-4021-90b8-eee278d60ca9.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp" },
  { id: 12, nome: "Chaveiro y2k METAL preto", preco: 89.9, categoria: "Acessório", imagem: "https://ae01.alicdn.com/kf/S27053e61aeb9417988f7e76944efe620w.jpg_640x640q90.jpg" },
  { id: 13, nome: "CAMISETA OVERSIZED PALM ANGELS", preco: 149.9, categoria: "Camisa", imagem: "https://dcdn-us.mitiendanube.com/stores/902/111/products/img_2874-afc18e63032e034b2917044866165244-1024-1024.jpeg" },
  { id: 14, nome: "Shoulder Bag Louis Vuitton Mens ", preco: 89.9, categoria: "Acessório", imagem: "https://i.ebayimg.com/images/g/hW0AAOSwWwtmz0EX/s-l1200.jpg" },
  { id: 15, nome: "Camiseta corteiz PREMIUM", preco: 199.9, categoria: "Camisa", imagem: "https://acdn-us.mitiendanube.com/stores/003/221/852/products/whatsapp-image-2024-09-12-at-17-25-07-1c8a1913217055e60f17261730804345-1024-1024.jpeg" },
  { id: 16, nome: "Calça Trapstar Comfy", preco: 219.9, categoria: "Calça", imagem: "https://static.wixstatic.com/media/4e70d6_8a0e9dc8bbe9451e9470e6533e835238~mv2.jpg/v1/fill/w_683,h_683,al_c,q_85,enc_avif,quality_auto/4e70d6_8a0e9dc8bbe9451e9470e6533e835238~mv2.jpg" },
  { id: 17, nome: "MOLETOM NIKE WORLDTOUR", preco: 199.9, categoria: "Moletom", imagem: "https://acdn-us.mitiendanube.com/stores/002/527/495/products/img_6472-2f75c02d78e5bf5f1017492354590530-1024-1024.jpeg" },
  { id: 18, nome: "Trapstar Puffer, AF 1 Branco e Moletom Essentials", preco: 499.9, categoria: "Moletom", imagem: "https://i.redd.it/pandabuy-nice-review-haul-4xtrapstar-puffer-jackets-af-1-v0-njn1zdfi7uua1.jpg?width=600&format=pjpg&auto=webp&s=7bc8fae8d99d66ac5708788e74d8146658bc3d63" },
  { id: 19, nome: "Polo Ralph Lauren Men's Black and", preco: 229.9, categoria: "Camisa", imagem: "https://media-photos.depop.com/b1/42055913/2057186710_59634ca4418b4973b1f679a0ef12ed45/P0.jpg" },
  { id: 20, nome: "Cinto Louis Vuitton Masculino", preco: 179.9, categoria: "Acessório", imagem: "https://acdn-us.mitiendanube.com/stores/330/557/products/whatsapp-image-2021-02-22-at-12-28-26-11-6778dfee5b07b15dbf16140124599327-640-0.jpeg" },
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
