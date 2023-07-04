import { jsx as _jsx } from "react/jsx-runtime";
import { PopperStyled } from './Popper.styled';
const Popper = ({ children, positionY, positionX }) => {
    return (_jsx(PopperStyled, { className: "popper", positionY: positionY, positionX: positionX, children: children }));
};
export default Popper;
