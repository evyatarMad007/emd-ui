import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
const ModalsContainer = ({ modalList }) => {
    return (_jsx(_Fragment, { children: modalList.map((modal, index) => {
            const ModalComponent = modal.component;
            const { isOpen } = modal;
            return isOpen && _jsx(ModalComponent, {}, index);
        }) }));
};
export default ModalsContainer;
