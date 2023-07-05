import React, { ReactNode } from 'react';
import { PopperStyled } from './Popper.styled';

interface PopperProps {
  children: ReactNode | ReactNode[] | string;
  positionY: string;
  positionX: string;
}

const Popper: React.FC<PopperProps> = ({ children, positionY, positionX }) => {
  return (
    <PopperStyled
      className="popper"
      positionY={positionY}
      positionX={positionX}
    >
      {children}
    </PopperStyled>
  );
};

export default Popper;
