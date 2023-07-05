import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const SpinnerContainerSmall = styled.div`
  border: 5px solid transparent;
  border-top: 5px solid #007CF3; 
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: ${spin} 0.5s linear infinite;
`;

export const SpinnerContainerBig = styled.div`
  border: 10px solid transparent;
  border-top: 10px solid #007CF3; 
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: ${spin} 0.5s linear infinite;
`;
