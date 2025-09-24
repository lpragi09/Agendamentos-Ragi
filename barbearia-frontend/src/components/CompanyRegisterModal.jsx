import React from 'react';
import { ModalOverlay, ModalContent, CloseButton } from './ModalStyles';
import { IoClose } from 'react-icons/io5'; // Importando o ícone

const CompanyRegisterModal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <IoClose />
        </CloseButton>
        <form className="form">
          <p className="title">Cadastre sua Barbearia</p>
          <p className="message">Preencha os dados para colocar seu negócio no mapa.</p>
          
          <label>
            <input required placeholder="" type="text" className="input" />
            <span>Nome da Barbearia</span>
          </label>
          <label>
            <input required placeholder="" type="text" className="input" />
            <span>Endereço Completo</span>
          </label>
          <label>
            <input required placeholder="" type="tel" className="input" />
            <span>Telefone de Contato</span>
          </label>
          <label>
            <input placeholder="" type="text" className="input" />
            <span>CNPJ (Opcional)</span>
          </label>
          
          <button className="submit">Finalizar Cadastro</button>
        </form>
      </ModalContent>
    </ModalOverlay>
  );
}

export default CompanyRegisterModal;