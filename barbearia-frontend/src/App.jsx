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
import 'react-datepicker/dist/react-datepicker.css';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    /* Novo gradiente com cores do seu tema */
    background: radial-gradient(
      100% 100% at 100% 100%,
      ${({ theme }) => theme.body} 40%,
      ${({ theme }) => theme.accent} 100%
    );
    color: ${({ theme }) => theme.text};
    font-family: 'Montserrat', sans-serif;
  }
`;

// O AppContainer agora não precisa de um fundo, pois ele foi movido para o body na GlobalStyle
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

function App() {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalName) => setActiveModal(modalName);
  const closeModal = () => setActiveModal(null);

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <AppContainer>
        <Navbar onOpenModal={openModal} />
        <HeroSection />
        <ServiceList />
        <ProfessionalList />

        {/* Modais */}
        <UserRegisterModal isOpen={activeModal === 'userRegister'} onOpenModal={openModal} onClose={closeModal} />
        <CompanyRegisterModal isOpen={activeModal === 'companyRegister'} onClose={closeModal} />
        <LoginModal isOpen={activeModal === 'login'} onClose={closeModal} onOpenModal={openModal} />
        <ForgotPasswordModal isOpen={activeModal === 'forgotPassword'} onClose={closeModal} />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;