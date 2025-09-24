import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer'; // 1. Importando o "superpoder"

// 2. Modificando nosso container para reagir se está visível ou não
const ServiceListContainer = styled.section`
  padding: 4rem 50px;


  /* Estilos para a animação */
  opacity: ${({ inView }) => (inView ? 1 : 0)};
  transform: ${({ inView }) => (inView ? 'translateY(0)' : 'translateY(50px)')};
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.text};
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const ServiceCard = styled.div`
  background: ${({ theme }) => theme.body};
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border: 1px solid ${({ theme }) => theme.uiElement};
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ServiceName = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.accent};
  margin-bottom: 0.5rem;
`;

const ServiceInfo = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1rem;
`;

const ServiceList = () => {
  const [servicos, setServicos] = useState([]);

  // 3. Usando o hook para observar o componente
  const { ref, inView } = useInView({
    triggerOnce: true, // A animação acontece apenas uma vez
    threshold: 0.1,    // A animação começa quando 10% do elemento estiver visível
  });

  useEffect(() => {
    fetch('http://localhost:3001/api/servicos')
      .then(response => response.json())
      .then(data => setServicos(data))
      .catch(error => console.error('Erro ao buscar serviços:', error));
  }, []);

  return (
    // 4. Conectando o observador ao nosso container e passando o status de visibilidade
    <ServiceListContainer ref={ref} inView={inView}>
      <Title>Nossos Serviços</Title>
      {servicos.length > 0 ? (
        <CardGrid>
          {servicos.map(servico => (
            <ServiceCard key={servico._id}>
              <ServiceName>{servico.nome}</ServiceName>
              <ServiceInfo>
                Duração: {servico.duracao_minutos} min
              </ServiceInfo>
              <ServiceInfo>
                <strong>Preço: R$ {servico.preco.toFixed(2)}</strong>
              </ServiceInfo>
            </ServiceCard>
          ))}
        </CardGrid>
      ) : (
        <p style={{ textAlign: 'center' }}>Carregando serviços...</p>
      )}
    </ServiceListContainer>
  );
};

export default ServiceList;