import React, { ReactNode } from 'react';
interface PopperProps {
    children: ReactNode;
    positionY: string;
    positionX: string;
}
declare const Popper: React.FC<PopperProps>;
export default Popper;
