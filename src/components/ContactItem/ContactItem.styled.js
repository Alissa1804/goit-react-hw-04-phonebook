import styled from 'styled-components';

export const Button = styled.button`
  margin-left: 5px;
  color: #121b28;
  font-family: inherit;
  font-size: 22px;
  font-weight: 200;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  padding: 5px;
  align-self: stretch;
  order: 3;
  &:hover {
    background-color: #bdd4f1;
  }
  align-self: inherit;
`;

export const P = styled.p`
  color: #bdd4f1;
  font-weight: 200;
`;

export const PN = styled.p`
  flex-grow: 1;
`;
