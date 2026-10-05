export function ModalCheckout({ aberto, aoFechar, aoConfirmar, total }) {
  // Se o modal não estiver aberto, não renderiza nada na tela
  if (!aberto) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Confirmar Compra</h3>
        <p>Você está prestes a finalizar sua compra no valor total de <strong>{total}</strong>.</p>
        <p>Deseja prosseguir para o pagamento?</p>
        
        <div className="modal-actions">
          <button className="btn-cancelar" onClick={aoFechar}>
            Cancelar
          </button>
          <button className="btn" onClick={aoConfirmar}>
            Confirmar Pagamento
          </button>
        </div>
      </div>
    </div>
  );
}