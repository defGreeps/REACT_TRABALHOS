import { useState } from 'react';
import { ModalCheckout } from '../components/ModalCheckout';

export function Carrinho({ itens, aoLimpar }) {

  const [modalAberto, setModalAberto] = useState(false);
  
  const calcularTotal = () => {
    const total = itens.reduce((soma, item) => {
      const valor = parseFloat(item.preco.replace('R$ ', '').replace(',', '.'));
      return soma + valor;
    }, 0);

    return total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const finalizarCompra = () => {
    alert("Compra realizada com sucesso!");
    aoLimpar();
    setModalAberto(false);
  };

  return (
   <> <main className="cart-container">
      <div className="cart-header-container">
        <h2 className="cart-header">Seu Carrinho</h2>
        {itens.length > 0 && (
          <button className="btn-limpar" onClick={aoLimpar}>
            Limpar
          </button>
        )}
      </div>
      
      {itens.length === 0 ? (
        <div className="cart-empty">
          <p>Seu carrinho está vazio no momento.</p>
        </div>
      ) : (
        <>
          <ul className="cart-list">
            {itens.map((item, index) => (
              <li key={index} className="cart-item">
                <div className="cart-item-info">
                  <strong>{item.titulo}</strong>
                  <p>{item.artista}</p>
                </div>
                <div className="cart-item-price">{item.preco}</div>
              </li>
            ))}
          </ul>
          
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total:</span>
              <span>{calcularTotal()}</span>
            </div>

            <button className="btn" style={{ padding: '1.2rem', fontSize: '1.1rem' }} 
            onClick={() => setModalAberto(true)}>
                COMPRAR AGORA
              </button>
          </div>
        </>
      )}
     </main>
     <ModalCheckout 
        aberto={modalAberto}
        aoFechar={() => setModalAberto(false)}
        aoConfirmar={finalizarCompra}
        total={calcularTotal()}
      />
    </>
  );
}