import styled from "styled-components";

interface PopperStyledProps {
  positionY: 'top' | 'bottom' | string;
  positionX: 'right' | 'center' | 'left' | string;
}

export const PopperStyled = styled.div<PopperStyledProps>`
  color: white;
  position: absolute;
  background-color: #545454ff;
  font-weight: lighter;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: max-content;
  border-radius: 0.3rem;
  padding: 0.2rem 0.5rem;
  box-shadow: 2px 3px 0.3rem #00000061;
  z-index: 65;
  user-select: none;
  font-size: 13px !important;
  animation: popperAnimation 0.45s ease-in-out;
  /* display: none; */
  display: flex;

  @keyframes popperAnimation {
    0% {
      opacity: 0;
    } 
    99% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  ${(props) => {
    if (props.positionY === 'top') {
      return `
        top: -1.55rem;
      `;
    } else if (props.positionY === 'bottom') {
      return `
        bottom: -1.6rem;
      `;
    } else {
      return `
        top: -1.55rem;
      `;
    }
  }}

  ${(props) => {
    if (props.positionX === 'right') {
      return `
        right: 0;
      `;
    }
    if (props.positionX === 'center') {
      return `
        right: 50%;
        transform: translateX(50%);
      `;
    } else if (props.positionX === 'left') {
      return `
        right: 100%;
      `;
    } else {
      return `
        right: 0;
      `;
    }
  }}

  &::after {
    content: "";
    position: absolute;
    border-style: solid;

    ${(props) => {
      if (props.positionY === 'top') {
        return `
          top: 100%;
          left: 50%;
          margin-left: -0.25rem;
          border-width: 0.25rem;
          border-color: #545454ff transparent transparent transparent;
        `;
      } else if (props.positionY === 'bottom') {
        return `
          bottom: 100%;
          left: 50%;
          margin-left: -0.25rem;
          border-width: 0.25rem;
          border-color: transparent transparent #545454ff transparent;
        `;
      } else {
        return `
          top: 100%;
          left: 50%;
          margin-left: -0.25rem;
          border-width: 0.25rem;
          border-color: #545454ff transparent transparent transparent;
        `;
      }
    }}
  }
`;
