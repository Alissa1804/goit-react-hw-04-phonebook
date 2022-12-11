import styled from 'styled-components';

export const Item = styled.li`
  min-width: 450px;
  display: flex;
  flex-grow: 1;
  align-items: baseline;
  gap: 10px;
  color: #cebdab;
  font-weight: 200;
  font-size: 20px;
  border-bottom: 1px solid #bdd4f1;
`;

export const List = styled.ul`
  max-width: 450px;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  margin-top: 10px;
  font-size: 14px;
`;
