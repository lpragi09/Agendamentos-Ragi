import 'react-datepicker/dist/react-datepicker.css';
import React, { useState } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import UserRegisterModal from './components/UserRegisterModal';
import CompanyRegisterModal from './components/CompanyRegisterModal';
import LoginModal from './components/LoginModal';
import ForgotPasswordModal from './components/ForgotPasswordModal';
import ServiceList from './components/ServiceList';
import ProfessionalList from './components/ProfessionalList';
import { lightTheme } from './theme';



// ESTILOS GLOBAIS CORRIGIDOS E COMPLETOS
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body, #root {
    height: 100%; // Garante que a base da página ocupe 100% da altura
  }

  body {
    background-color: ${({ theme }) => theme.body}; 
    color: ${({ theme }) => theme.text};
    font-family: 'Montserrat', sans-serif;
  }
`;

// CONTAINER DO APP CORRIGIDO E COMPLETO
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

function App() {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalName) => setActiveModal(modalName);
  const closeModal = () => setActiveModal(null);

  return (
    <ThemeProvider theme={lightTheme}>
      <AppContainer>
        {/* Componentes visíveis da página */}
        <GlobalStyle />
        <Navbar onOpenModal={openModal} />
        <HeroSection />
        <ServiceList />
        <ProfessionalList />

        {/* Modais (só aparecem quando chamados) */}
        <UserRegisterModal 
          isOpen={activeModal === 'userRegister'} 
          onOpenModal={openModal}
          onClose={closeModal} 
        />
        <CompanyRegisterModal 
          isOpen={activeModal === 'companyRegister'} 
          onClose={closeModal} 
        />
        <LoginModal 
          isOpen={activeModal === 'login'} 
          onClose={closeModal} 
          onOpenModal={openModal}
        />
        <ForgotPasswordModal 
          isOpen={activeModal === 'forgotPassword'}
          onClose={closeModal}
        />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;