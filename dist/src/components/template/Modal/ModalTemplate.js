import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ModalTemplateStyled } from "./Modal.styled";
import Icon from "../../common/Icon/Icon";
const ModalTemplate = ({ children, modalTitle, isModalActive, setModal, iconType, iconColor, modalError, }) => {
    if (!isModalActive)
        return null;
    return (_jsxs(ModalTemplateStyled, { children: [_jsx("div", { className: "outside", onClick: () => setModal(false) }), _jsxs("div", { className: "inside", children: [_jsxs("div", { className: "modal-header", children: [iconType && (_jsx("span", { className: "icon", children: _jsx(Icon, { iconType: iconType, iconSize: 20, iconColor: iconColor }) })), _jsx("h2", { className: "title", children: modalTitle }), _jsx("button", { className: "close-button", onClick: () => setModal(false), children: _jsx(Icon, { iconType: "close", iconSize: 20, iconColor: "#adadadff" }) })] }), _jsx("div", { className: "modal-body", children: children }), _jsx("div", { className: "modal-footer", children: modalError && _jsx("p", { className: "modal-error", children: modalError }) })] })] }));
};
export default ModalTemplate;
