import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './css.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <header class="header">
        <div class="logo">Disco de Rua</div>
        <nav class="nav-bar">
            <ul>
                <li><a href="#">Início</a></li>
                <li><a href="#">Catálogo</a></li>
                <li><a href="#">Clássicos</a></li>
                <li><a href="#">Contato</a></li>
            </ul>
        </nav>
    </header>

    <main class="catalog-container">
        <article class="catalog-card">
            <div class="card-image-placeholder"></div>
            <div class="card-content">
                <h2 class="card-title">Clube da Esquina</h2>
                <p class="card-artist">Milton Nascimento & Lô Borges</p>
                <p class="card-price">R$ 180,00</p>
                <button class="btn">Adicionar ao Carrinho</button>
            </div>
        </article>
    </main>
      </section>
    </>
  )
}

export default App
