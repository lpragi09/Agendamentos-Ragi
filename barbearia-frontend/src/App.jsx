import { useState, useEffect } from 'react'
import './App.css'

function App() {
  // Estado para armazenar a lista de serviços
  const [servicos, setServicos] = useState([])

  // useEffect para buscar os dados da API quando o componente carregar
  useEffect(() => {
    fetch('http://localhost:3001/api/servicos')
      .then(response => response.json())
      .then(data => setServicos(data))
      .catch(error => console.error('Erro ao buscar serviços:', error))
  }, []) // O array vazio garante que a busca aconteça só uma vez

  return (
    <div className="App">
      <h1>Serviços da Barbearia</h1>
      {servicos.length > 0 ? (
        <ul>
          {/* Mapeia o array de serviços para criar um item de lista para cada um */}
          {servicos.map(servico => (
            <li key={servico._id}>
              <strong>{servico.nome}</strong> - R$ {servico.preco.toFixed(2)} ({servico.duracao_minutos} min)
            </li>
          ))}
        </ul>
      ) : (
        <p>Carregando serviços...</p>
      )}
    </div>
  )
}

export default App