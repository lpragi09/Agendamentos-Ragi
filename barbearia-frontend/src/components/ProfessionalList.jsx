import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

const ProfessionalListContainer = styled.section`
  padding: 4rem 50px;


  /* Animação de revelação ao rolar */
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

const ProfessionalCard = styled.div`
  background: ${({ theme }) => theme.uiBackground};
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  border: 1px solid ${({ theme }) => theme.uiElement};
  text-align: center;
`;

const ProfessionalName = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.accent};
  margin-bottom: 0.5rem;
`;

const ProfessionalDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.text}B3; /* Cor do texto com 70% de opacidade */
`;

const ProfessionalList = () => {
  const [profissionais, setProfissionais] = useState([]);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    // Busca os dados da API de profissionais
    fetch('http://localhost:3001/api/profissionais')
      .then(response => response.json())
      .then(data => setProfissionais(data))
      .catch(error => console.error('Erro ao buscar profissionais:', error));
  }, []);

  return (
    <ProfessionalListContainer ref={ref} inView={inView}>
      <Title>Nossos Profissionais</Title>
      {profissionais.length > 0 ? (
        <CardGrid>
          {profissionais.map(profissional => (
            <ProfessionalCard key={profissional._id}>
              <ProfessionalName>{profissional.nome}</ProfessionalName>
              <ProfessionalDescription>{profissional.descricao}</ProfessionalDescription>
            </ProfessionalCard>
          ))}
        </CardGrid>
      ) : (
        <p style={{ textAlign: 'center' }}>Carregando profissionais...</p>
      )}
    </ProfessionalListContainer>
  );
};

export default ProfessionalList;