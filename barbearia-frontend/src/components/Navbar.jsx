import React from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import LoginButton from './LoginButton';
import Container from './Container'; // 1. Importando nosso novo Container

const Nav = styled.nav`
  background: ${({ theme }) => theme.body};
  height: 80px;
  display: flex;
  justify-content: center; // Centraliza o container filho
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

// O Container da Navbar terá um comportamento flex específico
const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;
  ${Container} // Herda os estilos do Container que criamos
`;

const NavLogo = styled.h1`
  color: ${({ theme }) => theme.accent};
  justify-self: flex-start;
  cursor: pointer;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavButton = styled.button`
  /* ... Estilos do botão continuam os mesmos ... */
  background: transparent;
  border: 2px solid ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.accent};
  padding: 10px 22px;
  border-radius: 5px;
  margin-left: 20px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.buttonText};
  }
`;

const HamburgerIcon = styled(FaBars)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.8rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text};
  }
`;

const Navbar = ({ onOpenModal }) => {
  return (
    <Nav>
      {/* 2. Usando o Container para envolver o conteúdo */}
      <NavbarContainer>
        <NavLogo>RAGI</NavLogo>
        <HamburgerIcon />
        <NavMenu>
          <NavButton onClick={() => onOpenModal('userRegister')}>Cadastrar</NavButton>
          <NavButton onClick={() => onOpenModal('companyRegister')}>Cadastre sua Empresa</NavButton>
          <LoginButton onClick={() => onOpenModal('login')} />
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;