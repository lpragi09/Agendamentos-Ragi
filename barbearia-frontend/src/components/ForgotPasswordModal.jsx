import React, { useState } from 'react';
import styled from 'styled-components';
import { ModalOverlay, ModalContent, CloseButton } from './ModalStyles';
import { IoClose } from 'react-icons/io5';

const ForgotPasswordModal = ({ isOpen, onClose }) => {
  // Estado para controlar a etapa do formulário: 'email' ou 'reset'
  const [step, setStep] = useState('email');

  if (!isOpen) {
    return null;
  }

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Aqui, em um app real, você enviaria o email para o backend.
    // Por enquanto, vamos apenas avançar para a próxima etapa.
    setStep('reset');
  };

  const handleResetSubmit = (e) => {
    e.preventDefault();
    // Aqui, você enviaria o código e a nova senha para o backend.
    alert("Senha alterada com sucesso!"); // Simula sucesso
    onClose(); // Fecha o modal
    setStep('email'); // Reseta para a primeira etapa para a próxima vez
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}><IoClose /></CloseButton>
        
        {/* Etapa 1: Pedir o Email */}
        {step === 'email' && (
          <form className="form" onSubmit={handleEmailSubmit}>
            <p className="title">Recuperar Senha</p>
            <p className="message">Digite seu email para receber um código de verificação.</p>
            <label>
              <input required placeholder="" type="email" className="input" />
              <span>Email</span>
            </label>
            <button className="submit">Enviar Código</button>
          </form>
        )}

        {/* Etapa 2: Pedir Código e Nova Senha */}
        {step === 'reset' && (
          <form className="form" onSubmit={handleResetSubmit}>
            <p className="title">Redefinir Senha</p>
            <p className="message">Verifique seu email e digite o código recebido.</p>
            <label>
              <input required placeholder="" type="text" className="input" />
              <span>Código de Verificação</span>
            </label>
            <label>
              <input required placeholder="" type="password" className="input" />
              <span>Nova Senha</span>
            </label>
            <label>
              <input required placeholder="" type="password" className="input" />
              <span>Repetir Nova Senha</span>
            </label>
            <button className="submit">Salvar Nova Senha</button>
          </form>
        )}

      </ModalContent>
    </ModalOverlay>
  );
}

export default ForgotPasswordModal;