import styled from 'styled-components';

export const Label = styled.label`
  font-weight: 200;
  font-size: 22px;
  color: #121b28;
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
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

export const Button = styled.button`
  color: #121b28;
  font-family: inherit;
  font-weight: 200;
  font-size: 22px;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  padding: 5px;
  align-self: stretch;
  &:hover {
    background-color: #bdd4f1;
  }
`;
