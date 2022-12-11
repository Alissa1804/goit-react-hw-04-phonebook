import styled from 'styled-components';

export const Label = styled.label`
  font-weight: 200;
  font-size: 22px;
  color: #121b28;
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export const Input = styled.input`
  font-family: inherit;
  font-weight: 200;
  font-size: 22px;
  background-color: transparent;
  border: 1px solid #bdd4f1;
  color: #bdd4f1;
  padding: 3px;
  &:focus {
    outline: 1px solid #bdd4f1;
  }
`;
