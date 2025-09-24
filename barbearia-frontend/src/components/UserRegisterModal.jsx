import React from 'react';
import { ModalOverlay, ModalContent, CloseButton } from './ModalStyles';
import { IoClose } from 'react-icons/io5';

const UserRegisterModal = ({ isOpen, onClose, onOpenModal }) => {
  if (!isOpen) {
    return null;
  }

  // Função para lidar com o clique no link "Acessar"
  const handleSignInClick = (e) => {
    e.preventDefault(); // Impede o link de recarregar a página
    onClose(); // Fecha o modal de cadastro atual
    onOpenModal('login'); // Abre o modal de login
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <IoClose />
        </CloseButton>
        <form className="form">
          <p className="title">Cadastre-se</p>
          <p className="message">Crie sua conta e tenha acesso total.</p>
          <div className="flex">
            <label>
              <input required placeholder="" type="text" className="input" />
              <span>Nome</span>
            </label>
            <label>
              <input required placeholder="" type="text" className="input" />
              <span>Sobrenome</span>
            </label>
          </div>
          <label>
            <input required placeholder="" type="email" className="input" />
            <span>Email</span>
          </label>
          <label>
            <input required placeholder="" type="password" className="input" />
            <span>Senha</span>
          </label>
          <label>
            <input required placeholder="" type="password" className="input" />
            <span>Confirmar Senha</span>
          </label>
          <button className="submit">Enviar</button>
          <p className="signin">Já possui uma conta? 
            <a href="#" onClick={handleSignInClick}> Acessar</a> 
          </p>
        </form>
      </ModalContent>
    </ModalOverlay>
  );
}

export default UserRegisterModal;