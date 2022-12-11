import styled from 'styled-components';

export const Container = styled.div`
  max-width: 580px;
  min-height: 680px;
  padding: 50px 25px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  font-family: 'Readex Pro', sans-serif;
  background: linear-gradient(0deg, #7c8584 2.86%, #121b28 100%);
  background: linear-gradient(180deg, #aabed8, #121b28 100%);
  border-radius: 8px;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 42px;
  color: #e7effa;
`;
export const MTitle = styled.h2`
  font-weight: 600;
  color: #baa287;
  font-size: 36px;
`;
