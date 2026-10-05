export function Contato() {
  
  const equipe = [
    {
      id: 1,
      foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJG7rgOgWfw2qMMNbzBLGTS45BYIPUYJ7w6lqJnQnurw&s=10",
      nome: "Ronald Hayel",
      cpf: "111.111.111-11",
      telefone: "(00) 99999-9999",
      email: "Ronald@email.com"
    },
    {
      id: 2,
      foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJG7rgOgWfw2qMMNbzBLGTS45BYIPUYJ7w6lqJnQnurw&s=10",
      nome: "Vinicius Baroni",
      cpf: "222.222.222-22",
      telefone: "(00) 88888-8888",
      email: "Vinicius@email.com"
    },
    {
      id: 3,
      foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJG7rgOgWfw2qMMNbzBLGTS45BYIPUYJ7w6lqJnQnurw&s=10",
      nome: "Thyago Silva",
      cpf: "333.333.333-33",
      telefone: "(00) 77777-7777",
      email: "Thyago@email.com"
    }
  ];

  return (
    <main className="contato-container">
      <h2 className="contato-header">Nossa Equipe</h2>
      <p className="contato-subtitle">Os especialistas por trás da Disco de Rua.</p>
      
      <div className="contato-grid">
        {equipe.map((membro) => (
          <div key={membro.id} className="contato-card">
            <img src={membro.foto} alt={`Foto de ${membro.nome}`} className="contato-foto" />
            
            <div className="contato-info">
              <div className="info-group">
                <strong>Nome:</strong> 
                <span>{membro.nome}</span>
              </div>
              <div className="info-group">
                <strong>CPF:</strong> 
                <span>{membro.cpf}</span>
              </div>
              <div className="info-group">
                <strong>Telefone:</strong> 
                <span>{membro.telefone}</span>
              </div>
              <div className="info-group">
                <strong>Email:</strong> 
                <span>{membro.email}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}