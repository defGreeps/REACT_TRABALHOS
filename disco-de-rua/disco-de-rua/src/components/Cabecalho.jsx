import { Link, useLocation } from 'react-router-dom';

export function Cabecalho({ quantidadeCarrinho }) {
  const localizacao = useLocation();

  return (
    <header className="header">
      <div className="logo">Disco de Rua</div>
      <nav className="nav-bar">
        <ul>
          <li>
            <Link to="/" style={localizacao.pathname === '/' ? { color: 'var(--accent-color)' } : {}}>
              Início
            </Link>
          </li>
          <li>
            <Link to="/catalogo" style={localizacao.pathname === '/catalogo' ? { color: 'var(--accent-color)' } : {}}>
              Catálogo
            </Link>
          </li>
          <li>
            <Link to="/carrinho" style={localizacao.pathname === '/carrinho' ? { color: 'var(--accent-color)' } : {}}>
              Carrinho {quantidadeCarrinho > 0 && `(${quantidadeCarrinho})`}
            </Link>
          </li>
          <li>
            <Link to="/contato" style={localizacao.pathname === '/contato' ? { color: 'var(--accent-color)' } : {}}>
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}