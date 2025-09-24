import styled from 'styled-components';

const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px; /* Largura máxima do conteúdo */
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px; /* O "gap" que você pediu */
  padding-left: 50px;  /* O "gap" que você pediu */

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export default Container;