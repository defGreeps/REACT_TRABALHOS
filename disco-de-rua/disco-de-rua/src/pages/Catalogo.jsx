import { useState } from 'react';
import { BarraFiltros } from '../components/BarraFiltros';
import { CartaoProduto } from '../components/CartaoProduto';
import { PRODUTOS } from '../data/produtos';

export function Catalogo({ aoAdicionar }) {
  const [filtroAtivo, setFiltroAtivo] = useState('Todos');

  const produtosFiltrados = filtroAtivo === 'Todos'
    ? PRODUTOS
    : PRODUTOS.filter((produto) => produto.categoria === filtroAtivo);

  return (
    <>
      <BarraFiltros filtroAtivo={filtroAtivo} aoSelecionarFiltro={setFiltroAtivo} />
      <main className="catalog-container">
        {produtosFiltrados.map((produto) => (
          <CartaoProduto
            key={produto.id}
            produto={produto}
            aoClicar={aoAdicionar}
          />
        ))}
      </main>
    </>
  );
}