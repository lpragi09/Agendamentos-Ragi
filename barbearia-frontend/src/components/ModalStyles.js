import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  position: relative;

  .form {
    display: flex;
    position: relative;
    flex-direction: column;
    gap: 10px;
    max-width: 350px;
    background-color: ${({ theme }) => theme.body};
    padding: 20px;
    border-radius: 20px;
    border: 1px solid ${({ theme }) => theme.accent};
    position: relative;
  }

  .title {
    font-size: 28px;
    color: ${({ theme }) => theme.accent};
    font-weight: 600;
    letter-spacing: -1px;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 30px;
    margin-bottom: 1rem;
  }

  .title::before, .title::after {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    border-radius: 50%;
    left: 0px;
    background-color: ${({ theme }) => theme.accent};
  }

  .title::before {
    width: 18px;
    height: 18px;
  }

  .title::after {
    width: 18px;
    height: 18px;
    animation: pulse 1s linear infinite;
  }

  .message, .signin {
    color: ${({ theme }) => theme.text}B3;
    font-size: 14px;
  }

  .signin {
    text-align: center;
  }

  .signin a {
    color: ${({ theme }) => theme.accent};
  }

  .signin a:hover {
    text-decoration: underline ${({ theme }) => theme.accent};
  }

  .flex {
    display: flex;
    width: 100%;
    gap: 6px;
  }

  .form label {
    position: relative;
  }

  .form label .input {
    width: 100%;
    padding: 10px 10px 20px 10px;
    outline: 0;
    border: 1px solid ${({ theme }) => theme.uiElement};
    border-radius: 10px;
    background-color: ${({ theme }) => theme.uiBackground};
    color: ${({ theme }) => theme.text};
  }

  .form label .input + span {
    position: absolute;
    left: 10px;
    top: 15px;
    color: grey;
    font-size: 0.9em;
    cursor: text;
    transition: 0.3s ease;
  }

  .form label .input:placeholder-shown + span {
    top: 15px;
    font-size: 0.9em;
  }

  .form label .input:focus + span, .form label .input:valid + span {
    top: 30px;
    font-size: 0.7em;
    font-weight: 600;
  }

  .form label .input:valid + span {
    color: green;
  }

  .submit {
    border: none;
    outline: none;
    background-color: ${({ theme }) => theme.accent};
    padding: 10px;
    border-radius: 10px;
    color: ${({ theme }) => theme.buttonText};
    font-size: 16px;
    transform: .3s ease;
    cursor: pointer;
  }

  .submit:hover {
    opacity: 0.9;
  }

  @keyframes pulse {
    from {
      transform: scale(0.9);
      opacity: 1;
    }
    to {
      transform: scale(1.8);
      opacity: 0;
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: ${({ theme }) => theme.uiElement};
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  z-index: 10;

  &:hover {
    background: ${({ theme }) => theme.uiBackground};
    transform: scale(1.1);
  }
`;