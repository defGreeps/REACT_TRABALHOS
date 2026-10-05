export function CartaoProduto({ produto, aoClicar }) {
  return (
    <article className="catalog-card">
      <div className="card-image-placeholder"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgXx1bB1SsBEpXNIswF-qtZ8P6Y9dL1npEluyG5ymCEFQ4ychg5CFAUD0A&s=10" alt="imagem generica livre para uso criativo"/></div>
      <div className="card-content">
       <h2 className="card-title">{produto.titulo}</h2>
        <p className="card-artist">{produto.artista}</p>
        <p className="card-price">{produto.preco}</p>
        <button className="btn" onClick={() => aoClicar(produto)}>
          Adicionar ao Carrinho
        </button>
      </div>
    </article>
  );
}