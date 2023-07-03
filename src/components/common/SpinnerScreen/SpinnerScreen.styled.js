import styled from 'styled-components';

export const SpinnerOverlay = styled.div`
  position: fixed;
  z-index: 55555;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(188, 188, 188, 0.756);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: screen-spinner-fade-in 0.05s;

  @keyframes screen-spinner-fade-in {
    0% {
      background-color: transparent;
    }
    100% {
      background-color: rgba(188, 188, 188, 0.756);
    }
    
  }
`;
