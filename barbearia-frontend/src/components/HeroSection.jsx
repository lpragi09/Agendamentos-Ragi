import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSearch, FaMapMarkerAlt, FaCalendarAlt, FaClock } from 'react-icons/fa';
import DatePicker from 'react-datepicker';

// Seus styled-components (sem alterações)
const SearchInput = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.uiElement};
  padding: 10px 15px;
  border-radius: 5px;
  color: ${({ theme }) => theme.accent};

  input, .react-datepicker__input-container input {
    background: transparent;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.text};
    margin-left: 10px;
    font-size: 1rem;
    width: 100%;
    cursor: pointer;
  }
`;

const HeroContainer = styled.div`
  color: ${({ theme }) => theme.text};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 30px;
  text-align: center;
  min-height: 100vh;
  box-sizing: border-box;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  max-width: 600px;

  span {
    color: ${({ theme }) => theme.accent};
  }
`;

const SearchContainer = styled.div`
  margin-top: 30px;
  background: ${({ theme }) => theme.uiBackground};
  padding: 20px;
  border-radius: 10px;
  display: flex;
  gap: 15px;
  align-items: center;
  flex-wrap: wrap;
`;

const SearchButton = styled.button`
  background: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.buttonText};
  border: none;
  padding: 15px 30px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroSection = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const blockTyping = (e) => {
    e.preventDefault();
  };

  const isToday = selectedDate
    ? new Date().toDateString() === selectedDate.toDateString()
    : false;

  // Função de filtro à prova de fuso horário
  const filterPassedTime = (time) => {
    const now = new Date();
    const selected = new Date(time);
    return now.getTime() < selected.getTime();
  };

  return (
    <HeroContainer>
      <HeroTitle>Onde o estilo encontra a precisão. <span>Sua melhor versão</span> começa aqui.</HeroTitle>
      <SearchContainer>
        <SearchInput>
          <FaMapMarkerAlt />
          <input type="text" placeholder="Local ou Barbearia" />
        </SearchInput>

        <SearchInput>
          <FaCalendarAlt />
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            placeholderText="Data"
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
            onKeyDown={blockTyping}
          />
        </SearchInput>

        <SearchInput>
          <FaClock />
          <DatePicker
            selected={selectedTime}
            onChange={(time) => setSelectedTime(time)}
            placeholderText="Horário"
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={30}
            timeCaption="Horário"
            dateFormat="p"
            onKeyDown={blockTyping}
            // Usando a propriedade "filterTime" para a lógica correta
            filterTime={isToday ? filterPassedTime : null}
          />
        </SearchInput>

        <SearchButton>
          <FaSearch style={{ marginRight: '8px' }} />
          Pesquisar
        </SearchButton>
      </SearchContainer>
    </HeroContainer>
  )
}

export default HeroSection;