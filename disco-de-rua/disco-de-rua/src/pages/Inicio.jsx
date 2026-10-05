import { Link } from 'react-router-dom';

export function Inicio() {
  return (
    <main>
      <section className="hero-section">
        <div className="hero-content">
          <h1>O Som que Ecoa na Alma</h1>
          <p>Encontre os maiores clássicos e raridades no formato que a música merece ser ouvida.</p>
          <Link to="/catalogo" className="btn hero-btn">Explorar o Catálogo</Link>
        </div>
      </section>

      <section className="intro-section">
        <h2>Bem-vindo à Disco de Rua</h2>
        <p>Aqui você encontra o disco certo pra completar sua coleção, dos mais recentes aos clássicos, temos de todos os tipos e gêneros a sua disposição.</p>
      </section>
    </main>
  );
}