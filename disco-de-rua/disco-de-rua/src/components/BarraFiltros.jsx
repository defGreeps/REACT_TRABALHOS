export function BarraFiltros({ filtroAtivo, aoSelecionarFiltro }) {
  const categorias = ['Todos', 'Vinis Novos', 'Vinis Usados', 'CDs', 'Posters', 'Selos', 'Capas de Banda'];

  return (
    <nav className="catalog-filter-bar">
      <ul>
        {categorias.map((categoria) => (
          <li key={categoria}>
            <a
              href="#"
              className={filtroAtivo === categoria ? 'active' : ''}
              onClick={(evento) => {
                evento.preventDefault();
                aoSelecionarFiltro(categoria);
              }}
            >
              {categoria}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}