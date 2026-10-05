import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Cabecalho } from './components/Cabecalho.jsx';
import { Inicio } from './pages/Inicio.jsx';
import { Catalogo } from './pages/Catalogo.jsx';
import { Carrinho } from './pages/Carrinho.jsx';
import { Contato } from './pages/Contato.jsx';
import './App.css';

function App() {
  // Estado que guarda os itens adicionados ao carrinho
  const [itensCarrinho, setItensCarrinho] = useState([]);

  // Função que será chamada ao clicar no botão "Adicionar ao Carrinho"
  const adicionarAoCarrinho = (produto) => {
    setItensCarrinho([...itensCarrinho, produto]);
    alert(`${produto.titulo} foi adicionado ao carrinho!`);
  };

  const limparCarrinho = () => {
    setItensCarrinho([]);
  };

  return (
    <BrowserRouter>
      <Cabecalho quantidadeCarrinho={itensCarrinho.length} />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/catalogo" element={<Catalogo aoAdicionar={adicionarAoCarrinho} />} />
        <Route path="/carrinho" element={<Carrinho itens={itensCarrinho} aoLimpar={limparCarrinho} />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;